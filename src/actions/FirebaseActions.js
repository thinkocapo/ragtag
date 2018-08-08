import firebase from 'firebase'
import {
    REQUEST_USERS, REQUEST_USERS_SUCCESS, REQUEST_USERS_FAIL
} from './types'
import { asyncGetData } from '../modules/AsyncStorage'
import { LOGGED_IN_USER } from '../constants';

export function fetchAndPlotUsers () {

    return (dispatch) => {        
        dispatch({ type: REQUEST_USERS })

        firebase.database().ref(`/users`)
            .on('value', async (snapshot) => { // { index, key, node, ref }

                const loggedInUser = await asyncGetData(LOGGED_IN_USER)
                const usersObj = snapshot.val()

                for (var uid in usersObj) {
                    if (uid === loggedInUser) {
                        usersObj[uid]['loggedInUser'] = true
                    } else {
                        usersObj[uid]['loggedInUser'] = false
                    }
                }

                requestUsersSuccess(dispatch, usersObj)
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


// TODO - there's no action yet, so should this be here
// TODO - fromUser from AsyncStorage, or set it already on the Marker?
export async function tagUser ({ id }) {

    // let tagsGiven = 0
    // tagsGiven++

    // const result = firebase.auth().currentUser // working 08/05/28 .auth().currentUser since state has settled by now

    const loggedInUser = await asyncGetData(LOGGED_IN_USER)
    console.log('tagUser loggedInUser', loggedInUser)

    // **TODO** 10:51p
    // firebase.database().ref(`/users/${currentUser.uid}/position`)
    //     .set({ 
    //         tagsGiven: tagsGiven
    //     })
    //     .then(() => {
    //         // dispatch({ type: RECEIVE_TAGS_GIVEN })
    //     })
    //     .catch((err) => {
    //         console.log("ERR tagUser:", err)
    //     })
}