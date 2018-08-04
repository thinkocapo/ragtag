// import getCurrentGeoPosition from '../modules' <-- No, keep all in this file for now...

import {
    REQUEST_POSITION, REQUEST_POSITION_SUCCESS, REQUEST_POSITION_FAIL
} from './types'

export const getCurrentPosition = () => {
    return (dispatch) => {
        dispatch({ type: REQUEST_POSITION })

        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log('position of user', position)

                requestPositionSuccess(dispatch, position)
                const initialPosition = JSON.stringify(position);
        
                const latlng = {
                    latitude: position.coords.latitude,
                    longitutde: position.coords.longitutde
                }
                // Action to Set it in Redux & Firebase...
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