import { EMPLOYEES_FETCH_SUCCESS } from '../actions/types'

const INITIAL_STATE = {

}

// * FIREBASE DATA STRUCTURE *  Object with KEYS of each employee e.g. -KTp9eGX0C4mlxkp0Em
// easier than working with an array
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEES_FETCH_SUCCESS:
            // return { ...state, [id]: action.payload} is what we want, see mapStateToProps in 
            return action.payload
        default:
            return state
    }
}