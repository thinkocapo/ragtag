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

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>{this.props.error}</Text>
                </View>
            )
        }
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

                {this.renderError()}

                <CardSection>
                    <ButtonCustom onMyPress={this.onButtonPress.bind(this)}>
                        Login
                    </ButtonCustom>
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}
const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error
    }
}
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser } )(LoginForm)