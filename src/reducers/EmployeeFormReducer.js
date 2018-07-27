import { EMPLOYEE_UPDATE } from '../actions/types'

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: '' // # 1 could default Monday here,
}

// { ...state } 
// "key interpolation" key determined at runtime

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value}
        default:
            return state
    }
}