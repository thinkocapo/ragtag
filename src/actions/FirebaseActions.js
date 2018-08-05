import firebase from 'firebase'
import {
    REQUEST_USERS, REQUEST_USERS_SUCCESS, REQUEST_USERS_FAIL
} from './types'

export function fetchAndPlotUsers () {

    return (dispatch) => {

        dispatch({ type: REQUEST_USERS })

        requestUsersSuccess(dispatch, position)

        // firebase...
    }
    
}

const requestUsersSuccess = (dispatch, users) => {
    dispatch({
        type: REQUEST_USERS_SUCCESS,
        payload: users
    })
}
const requestUsersFail = (dispatch) => {
    dispatch({ type: REQUEST_USERS_FAIL })
}