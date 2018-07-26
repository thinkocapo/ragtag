import React, {Component} from 'react'
import { Text, View } from 'react-native'

import { connect } from 'react-redux'
import { createStore } from 'redux'

import { Card, CardSection, InputCustom, ButtonCustom } from '../common'

import { emailChanged, passwordChanged, loginUser } from '../../actions'

class LoginForm extends Component { 

    onButtonPress() {
        const { email, password } = this.props
        this.props.loginUser({ email, password })
    }
    onEmailChange(text) {
        this.props.emailChanged(text)
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }

    render () {
        return (
            <Card>
                <CardSection>
                    <InputCustom
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <InputCustom
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <CardSection>
                    <ButtonCustom onMyPress={this.onButtonPress.bind(this)}>
                        Login
                    </ButtonCustom>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    }
}
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser } )(LoginForm)