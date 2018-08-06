import { 
    REQUEST_USERS, 
    REQUEST_USERS_SUCCESS, 
    REQUEST_USERS_FAIL
} from '../actions/types'

const INITIAL_STATE = {
    users: '',
    error: '',
    loading: true
    // other Collections
    // coordinates
    // logged-in user
    // metadata
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_USERS:
        return { ...state,  loading: true, error: '' }
        case REQUEST_USERS_SUCCESS:
            return { ...state, users: action.payload, loading: false }
        case REQUEST_USERS_FAIL:
            return { ...state, error: 'getAndPlotUsers Failed', loading: false }
        default:
            return state;
    }
}