import firebase from 'firebase'
import {
    REQUEST_POSITION, REQUEST_POSITION_SUCCESS, REQUEST_POSITION_FAIL
} from './types'

// Get the position from React Native Geolocation API and Set the position in Firebase User collection
export function getAndSetCurrentPosition () {
    console.log('getAndSetCurrentPosition ... 1')

    return (dispatch) => {
        console.log('getAndSetCurrentPosition ... 2', navigator)

        dispatch({ type: REQUEST_POSITION })
        console.log('getAndSetCurrentPosition ... 3', navigator.geolocation)

        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log('getAndSetCurrentPosition ... position of user', position)
                const latlng = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
                console.log('getAndSetCurrentPosition ... position  latlng', latlng)

                requestPositionSuccess(dispatch, position) // REDUX 
                
                firebase.auth().onAuthStateChanged((currentUser) => {

                    console.log('getAndSetCurrentPosition ... onAuthStateChanged uid', currentUser.uid)
                    firebase.database().ref(`/users/${currentUser.uid}/position`)
                        .set({
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude
                        })
                        .then((result) => {
                            // console.log('getAndSetCurrentPosition ... FIREBASE updated', result) // undefined
                        })
                })

            },
            (error) => alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    }
    
}

const requestPositionSuccess = (dispatch, position) => {
    dispatch({
        type: REQUEST_POSITION_SUCCESS,
        payload: position
    })
}
const requestPositionFail = (dispatch) => {
    dispatch({ type: REQUEST_POSITION_FAIL })
}

//const { currentUser } = firebase.auth()
// console.log('getAndSetCurrentPosition ... currentUser', currentUser) // still logs undefined, but it was working in previous Apps
// const initialPosition = JSON.stringify(position);
// import getCurrentGeoPosition from '../modules' <-- No, keep all in this file for now...
