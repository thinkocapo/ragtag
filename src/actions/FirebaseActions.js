import firebase from 'firebase'
import {
    REQUEST_USERS, REQUEST_USERS_SUCCESS, REQUEST_USERS_FAIL
} from './types'

export function fetchAndPlotUsers () {
    console.log('fetchAndPlotUsers...1')
    return (dispatch) => {        
        dispatch({ type: REQUEST_USERS })
        console.log('fetchAndPlotUsers...2')

        firebase.database().ref(`/users`)
            .on('value', snapshot => {
    
                console.log("SNAPSHOT", snapshot)
                requestUsersSuccess(dispatch, snapshot.val())
            })
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