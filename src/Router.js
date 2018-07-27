import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/manager/LoginForm'
import EmployeeList from './components/manager/EmployeeList'
import EmployeeCreate from './components/manager/EmployeeCreate'

// need identify 1 parent, root
// we see Login first because its the first <Scene>
// * GOOD* every <Scene> key get instantly transcribed onto Actions react-native-router-flux object
// Root Scene creates an additional nav bar we don't need so use hideNavBar
// note how 'initia' is on two different parent scenes. its in 2nd one to ensure/show/indicate that EmployeeList is before EmployeeDetail
const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login" initial/>
                </Scene>
                <Scene key="main">
                    <Scene 
                        onRight={() => { Actions.employeeCreate() }}
                        rightTitle="Add"

                        key="employeeList"
                        component={EmployeeList}
                        title="EmployeesZZZ"
                        initial
                    />
                    <Scene
                        key="employeeCreate"
                        component={EmployeeCreate}
                        title="Create Employee"
                    />
                </Scene>
            </Scene>
        </Router>
    )
}

export default RouterComponent