import { combineReducers } from 'redux'
import LibraryReducer from './LibraryReducer'
import { LibrarySelectorReducer } from './LibrarySelectorReducer'

export default combineReducers({
    // selectedLibrary: LibrarySelectorReducer,
    libraries: LibraryReducer
})