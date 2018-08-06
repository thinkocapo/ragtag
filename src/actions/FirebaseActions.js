import firebase from 'firebase'
import {
    REQUEST_USERS, REQUEST_USERS_SUCCESS, REQUEST_USERS_FAIL
} from './types'

export function fetchAndPlotUsers () {

    return (dispatch) => {        
        dispatch({ type: REQUEST_USERS })

        firebase.database().ref(`/users`)
            .on('value', snapshot => { // { index, key, node, ref }
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


export function tagUser ({ fromUser, id}) {
    firebase.auth().onAuthStateChanged((currentUser) => {
        console.log('tagUser ... currentUser.uid', currentUser.uid)
        // *TODO* can set this uid in redux upon login? and set tagsGiven, tagsReceived

        let tagsGiven = 0
        tagsGiven++

        firebase.database().ref(`/users/${currentUser.uid}/position`)
            .set({ 
              tagsGiven: tagsGiven
            })
            .then(() => {
                // dispatch({ type: RECEIVE_TAGS_GIVEN })

            })
            .catch((err) => {
                console.log("ERR tagUser:", err)
            })
    })
    
}