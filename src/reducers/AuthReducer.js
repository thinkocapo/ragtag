import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS 
} from '../actions/types'

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null
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
            return { ...state, user: action.payload}
        default:
            return state;
    }
}