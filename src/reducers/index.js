import { combineReducers } from 'redux'
import LibraryReducer from './LibraryReducer'
import SelectionReducer from './SelectionReducer'
import EmployeeFormReducer from './EmployeeFormReducer'
import EmployeeReducer from './EmployeeReducer'
import NavigatorReducer from './NavigatorReducer'

// Manager App
import AuthReducer from './AuthReducer'

export default combineReducers({
    // Techstack App
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer,

    // Manager App
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer,
    employees: EmployeeReducer,

    // RagTag App
    navigator: NavigatorReducer
})