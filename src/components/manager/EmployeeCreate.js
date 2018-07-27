import React, { Component } from 'react'
import { connect } from 'react-redux'
import { employeeUpdate } from '../../actions'
import { Card, CardSection, InputCustom, ButtonCustom } from '../common'


class EmployeeCreate extends Component {

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

                <CardSection></CardSection>

                <CardSection>
                    <ButtonCustom>
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

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate)