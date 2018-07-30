import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import Communications from 'react-native-communications'
import { Card, CardSection, ButtonCustom, ModalConfirm } from '../common'
import EmployeeForm from './EmployeeForm'
import { employeeUpdate, employeeSave } from '../../actions' // Update is for Reducer, Save is for Firebase
// *TODO My own ESLint settings

// EmployeeList gets its data from Firebase every time, so even if you change data here to props.employee,
// you can leave the screen without pressing Save and EmployeeList will get Firebase data again...
// When click touch/click the employee it will set props.employee again with the Firebase data
class EmployeeEdit extends Component {
    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value}) // update our form reducer with every property
        })
    }
    onButtonPress() {
        const { name, phone, shift } = this.props // came from employeeForm
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })

    }

    onTextPress() {
        const { phone, shift } = this.props

        Communications.text(phone, `Your upcoming shift is on ${shift}`)
    }

    render() {
        return (
            <Card>

                <EmployeeForm />

                <CardSection>
                    <ButtonCustom onMyPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </ButtonCustom>
                </CardSection>

                <CardSection>
                    <ButtonCustom onMyPress={this.onTextPress.bind(this)}>
                        Text Schedulel
                    </ButtonCustom>
                </CardSection>
                
            </Card>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift }
}
export default connect(mapStateToProps, { 
    employeeSave,
    employeeUpdate
})(EmployeeEdit);