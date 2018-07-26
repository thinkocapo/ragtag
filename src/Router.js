import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import LoginForm from './components/manager/LoginForm'
import EmployeeList from './components/manager/EmployeeList'

// need identify 1 parent, root
// we see Login first because its the first <Scene>
const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="login" component={LoginForm} title="Please Login" initial/>
                <Scene key="employeeList" component={EmployeeList} title="Employees" />
            </Scene>
        </Router>
    )
}

export default RouterComponent