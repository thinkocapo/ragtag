import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Picker, Text } from 'react-native'
import { employeeUpdate, employeeCreate } from '../../actions'
import { Card, CardSection, InputCustom, ButtonCustom } from '../common'

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
    render() {
        return (
            <Card>
                <CardSection>
                    <InputCustom 
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={value => { this.props.employeeUpdate({ prop: 'name', value })}}
                    />
                </CardSection>
                
                <CardSection>
                    <InputCustom
                        label="Phone"
                        placeholder="555-555-5555"
                        value={this.props.phone}
                        onChangeText={value => { this.props.employeeUpdate({ prop: 'phone', value })}}
                    />
                </CardSection>

                <CardSection >
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        style={{flex:1}}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value }) }
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>

                <CardSection>
                    <ButtonCustom onMyPress={this.onButtonPress.bind(this)}>
                        Create
                    </ButtonCustom>
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    pickerTextStyle: {
        // flex: 1,
        fontSize: 18,
        paddingLeft: 20
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm
    return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate)