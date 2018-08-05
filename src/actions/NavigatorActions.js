import firebase from 'firebase'
import {
    REQUEST_POSITION, REQUEST_POSITION_SUCCESS, REQUEST_POSITION_FAIL
} from './types'

// Get the position from React Native Geolocation API and Set the position in Firebase User collection
export function getAndSetCurrentPosition () {

    return (dispatch) => {

        dispatch({ type: REQUEST_POSITION })

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latlng = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }

                requestPositionSuccess(dispatch, position) // REDUX 
                
                firebase.auth().onAuthStateChanged((currentUser) => {
                    firebase.database().ref(`/users/${currentUser.uid}/position`)
                        .set({
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude
                        })
                        .then((result) => { // TODO .catch?
                            // console.log('getAndSetCurrentPosition ... FIREBASE updated', result) // undefined
                        })
                })

            },
            (error) => alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        )
        // .catch() ?
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
