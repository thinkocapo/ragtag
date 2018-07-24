import React, { Component } from 'react'
import { Text } from 'react-native'
import { ButtonCustom, Card, CardSection, InputCustom, SpinnerCustom } from '../common'
import firebase from 'firebase'

// "TextInputs by default do not have a set height and width"
// value={this.state.text} was not mandatory, it still saved to state: <Text>State is: {this.state.text}</Text>
// "is so for when it re-renders, we tell it what it's new value is..."
// "the TextInput itself doesn't know what its value is....but state does, and we're telling TextInput its value via value={this.state.text}"
// " text exists as a piece of state, does not exist inside the TextInput. benefit is State is accessible from other areas"
// useful if you're pulling this component out and putting it to somewhere else...

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false }

    // Processing Authentication Credentials
    onButtonPress() {
        console.log('press')

        this.setState({ error: '', loading: true })

        const { email, password, error } = this.state
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch((err) => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this))
            })
            .finally((result) => {
                console.log('finally...result', result) // undefined
            })
    }

    onLoginFail(event) {
        this.setState({ error: 'Authentication Failed', loading: false })
        console.log('fail...', event)
    }
    onLoginSuccess() {
        this.setState({ email: '', password: '', error: '', loading: false })
    }

    renderButtonOrSpinner() {
        if (this.state.loading) {
            return <SpinnerCustom size="small" />
        }
        return (
            <ButtonCustom onMyPress={this.onButtonPress.bind(this)}>
                Login
            </ButtonCustom>
        )
    }

    render () {
        return (
            <Card>
                <CardSection>
                    <InputCustom 
                        label={"Email"}
                        placeholder={"user@gmail.com"}
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email }) }
                    />
                </CardSection>
                
                <CardSection>
                    <InputCustom 
                        secureTextEntry
                        label={"Password"}
                        placeholder={"xxxxxxxxxx"}
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password }) }
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButtonOrSpinner()}
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

export default LoginForm