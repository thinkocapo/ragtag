import { 
    REQUEST_POSITION, 
    REQUEST_POSITION_SUCCESS, 
    REQUEST_POSITION_FAIL
} from '../actions/types'

const INITIAL_STATE = {
    latlng: '',
    error: '',
    loading: true
}

// { ...state,  property_name: action.payload.value }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_POSITION:
        return { ...state,  loading: true, error: '' }
        case REQUEST_POSITION_SUCCESS:
            action.payload.coords.latitudeDelta = 0.922 // ZOOM LEVEL
            action.payload.coords.longitudeDelta = 0.421
            return { ...state, latlng: action.payload.coords, loading: false }
        case REQUEST_POSITION_FAIL:
            return { ...state, error: 'GetCurrentPosition Failed', loading: false }
        default:
            return state;
    }
}