import firebase from 'firebase'
import {Actions} from 'react-native-router-flux'
import { 
    EMPLOYEE_UPDATE, 
    EMPLOYEE_CREATE, 
    EMPLOYEES_FETCH_SUCCESS 
} from './types'

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    }
}

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth()
    
    // 'return fn' satisfies the rules of redux-thunk (dispatch), this will suppress the thrown error about 'failed to call an action' *
    return (dispatch) => {
        // console.log('ACTIONS', Actions.employeeList) // exists but can't call it, says key doesn't exist and must call main() or auth

        // video showed a pop-up note abotu 'Actions.pop'? and stacking the Views?
        firebase.database().ref(`/users/${currentUser.uid}/employees`) // creates a uid for the employee
            .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE })
                Actions.main()
            }) // * View * got stacked, we wanna return to one, not add one on top * so use type: reset
            .catch((err) => {
                console.log("SOME ERR", err)
            })
            
            // .then(() => Actions.employeeList({ type: 'reset' }) ) // * View * got stacked, we wanna return to one, not add one on top * so use type: reset - WON'T WORK, GO TO MAIN()
            // https://github.com/react-navigation/react-navigation/issues/2270
            // https://github.com/react-navigation/react-navigation/issues/1127
    }
}

export const employeesFetch = () => {
    const { currentUser } = firebase.auth()

    // * Triggers anytime new data comes across * like a WATCH
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                // console.log("SNAPSHOT", snapshot) // * not an array of all employees. its an object that describes what data is in there
                dispatch({ 
                    type: EMPLOYEES_FETCH_SUCCESS,
                    payload: snapshot.val()
                })
            })
    }
}

export const employeeSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth()

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift })
            .then(() => console.log('saved!'))
    }
}