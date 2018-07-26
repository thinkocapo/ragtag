import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types'

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
}
// * IMPORTANT *
// no, because its same object in memory , redux will think it hasn't changed at all
// state.email = action.payload; return state

// * GOOD *
// return { ...state,  email: action.payload.text }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state,  email: action.payload }
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload }
        case LOGIN_USER_SUCCESS:
            // * INTERESTING *
            // banana - throw an error here, and it will cause the forebase call to reach .catch, even though the response came back
            return { ...state, user: action.payload, error: '', loading: false }
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed', loading: false } // could reset pw password: ''
        case LOGIN_USER:
            return { ...state, loading: true, error: '' }
        default:
            return state;
    }
}