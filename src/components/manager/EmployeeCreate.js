import React, { Component } from 'react'
import { Card, CardSection, InputCustom, ButtonCustom } from '../common'


class EmployeeCreate extends Component {

    render() {
        return (
            <Card>
                <CardSection>
                    <InputCustom 
                        label="Name"
                        placeholder="Jane"
                    />
                </CardSection>
                
                <CardSection>
                    <InputCustom
                        label="Phone"
                        placeholder="555-555-5555"
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

export default EmployeeCreate