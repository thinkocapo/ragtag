import firebase from 'firebase'

import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from './types'

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    }
}

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth()

    firebase.app().database().ref(`/users/${currentUser.uid}/employees`) // * SEE * creates a uid for the employee
        .push({ name, phone, shift })
        .catch(err => {
            console.log('err', err)
        })
    return {
        type: EMPLOYEE_CREATE,
        payload: { name, phone, shift}
    }
}