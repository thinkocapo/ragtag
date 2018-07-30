import React, { Component } from 'react'
import { connect } from 'react-redux'
import { employeeUpdate, employeeCreate } from '../../actions'
import { Card, CardSection, ButtonCustom } from '../common'
import EmployeeForm from './EmployeeForm'
/*
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
}

allow read, update, delete: if request.auth.uid == userId;
allow create: if request.auth.uid != null;
should be
allow read, update, delete: if request.auth.uid == userId;
allow create: if request.auth.uid != userId;
?
*/

class EmployeeCreate extends Component {
    // #2 componentWillMount could default value of shift to Monday
    onButtonPress() {
        const { name, phone, shift } = this.props

        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' }) // #3 defaults selection if none selected
    }

    // no style property automatically consumed in CardSection, because CardSection is a component we put to gether. However Picker and react-native components can accept style: flex-direction
    // "take any props sent to EmployeeCreate... and forward them on to EmployeeForm" ** GOOD **
    render() {
        console.log('EmployeeCreate, employee on child props', this.props.employee)
        return (
            <Card>

                <EmployeeForm {...this.props} />

                <CardSection>
                    <ButtonCustom onMyPress={this.onButtonPress.bind(this)}>
                        Create
                    </ButtonCustom>
                </CardSection>
            </Card>
        )
    }
}



const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm
    return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate)