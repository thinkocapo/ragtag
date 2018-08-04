import { 
    REQUEST_POSITION, 
    REQUEST_POSITION_SUCCESS, 
    REQUEST_POSITION_FAIL
} from '../actions/types'

const INITIAL_STATE = {
    latlng: '',
    error: '',
    loading: false
}

// { ...state,  property_name: action.payload.value }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_POSITION:
            return { ...state,  loading: true, error: '' }
        case REQUEST_POSITION_SUCCESS:
            return { ...state, position: action.payload, loading: false }
        case REQUEST_POSITION_FAIL:
            return { ...state, error: 'GetCurrentPosition Failed', loading: false }
        default:
            return state;
    }
}