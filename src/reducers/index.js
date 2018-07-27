import { combineReducers } from 'redux'
import LibraryReducer from './LibraryReducer'
import SelectionReducer from './SelectionReducer'
import EmployeeFormReducer from './EmployeeFormReducer'

// Manager App
import AuthReducer from './AuthReducer'

export default combineReducers({
    // Techstack App
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer,

    // Manager App
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer
})