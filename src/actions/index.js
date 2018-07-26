import firebase from 'firebase'
import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS
} from './types'

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
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                console.log('USER...', user)
                dispatch({ 
                    type: LOGIN_USER_SUCCESS,
                    payload: user
                })
            })

    }
}