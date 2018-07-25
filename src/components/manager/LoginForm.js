import React, {Component} from 'react'
import { Text, View } from 'react-native'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { Card, CardSection, InputCustom, ButtonCustom } from '../common'

class LoginForm extends Component { 
    render () {
        return (
            <Card>
                <CardSection>
                    <InputCustom
                        label="Email"
                        placeholder="email@gmail.com"
                    />
                </CardSection>

                <CardSection>
                    <InputCustom
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                    />
                </CardSection>

                <CardSection>
                    <ButtonCustom>
                        Login
                    </ButtonCustom>
                </CardSection>
            </Card>
        )
    }
}

export default LoginForm