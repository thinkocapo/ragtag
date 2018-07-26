import { combineReducers } from 'redux'
import LibraryReducer from './LibraryReducer'
import SelectionReducer from './SelectionReducer'

// Manager App
import AuthReducer from './AuthReducer'

export default combineReducers({
    // Techstack App
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer,

    // Manager App
    auth: AuthReducer
})