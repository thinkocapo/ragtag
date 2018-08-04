import firebase from 'firebase'
import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from './types'
import { RAGTAG_YOUR_EMAIL, RAGTAG_YOUR_PASSWORD } from 'react-native-dotenv'
import { Actions } from 'react-native-router-flux'

// REDUX THUNK - handles async action creators
// "action creators are functions, must return a function. the function will be called with 'dispatch'"
// (store.dispatch to send off an action)
export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    }
}

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

// loginUser action returns a function which invokes immediately, and the 'dispatch' in it we can call at anytime, call it multiple times
export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER })

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch((err) => {
                console.log(err) // keep this here, because response might come back okay but if reducer throws an error, then this .catch will be reached, which is misleading
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(() => loginUserFail(dispatch))
            })
    }
}

export const loginUserRagTag = ({ email, password }) => {
    console.log('AuthActions ... loginUserRagTag ')

    return (dispatch) => {
    console.log('AuthActions ... loginUserRagTag2222 ')

        dispatch({ type: LOGIN_USER })

        // const { currentUser } = firebase.auth()
        // console.log('**** currentUser *****', currentUser)
        console.log('AuthActions ... loginUserRagTag3333 ')

        // works in iOS...
        firebase.auth().onAuthStateChanged((currentUser) => { 
            console.log('loginUserRagTag ... currentUser', currentUser)

            if (currentUser && currentUser.uid) {
                console.log('....Action')
                loginUserSuccessRagTag(dispatch, currentUser)
            } else {
                console.log('create the user...', RAGTAG_YOUR_PASSWORD, RAGTAG_YOUR_EMAIL)
                firebase.auth().createUserWithEmailAndPassword(RAGTAG_YOUR_EMAIL, RAGTAG_YOUR_PASSWORD)
                    .then(user => {
                        console.log('created user', user)
                        const { currentUser } = firebase.auth() // or const currentUser 
                        console.log('created currentUser', currentUser)
                        loginUserSuccessRagTag(dispatch, user)
                    })
                    .catch(() => {
                        // console.log('failed to create new user ...')
                        loginUserFail(dispatch)
                    })
            }
        })

    }
}

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL })
}
const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    })
    // <Scene key="employeeList">
    // Actions.employeeList() // puts backEmployeesList button, need to navigate through intermediary 'main'
    Actions.main() // shows first scene inside of it which is employeeList
}
const loginUserSuccessRagTag = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    })
}