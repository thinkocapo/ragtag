import React, { Component } from 'react'
import { Text } from 'react-native'
import { Button, Card, CardSection, Input } from './common'
import firebase from 'firebase'

// "TextInputs by default do not have a set height and width"
// value={this.state.text} was not mandatory, it still saved to state: <Text>State is: {this.state.text}</Text>
// "is so for when it re-renders, we tell it what it's new value is..."
// "the TextInput itself doesn't know what its value is....but state does, and we're telling TextInput its value via value={this.state.text}"
// " text exists as a piece of state, does not exist inside the TextInput. benefit is State is accessible from other areas"
// useful if you're pulling this component out and putting it to somewhere else...

class LoginForm extends Component {
    state = { email: '', password: '', error: '' }

    // Processing Authentication Credentials
    onButtonPress() {
        console.log('press')

        this.setState({ error: '' })

        const { email, password, error } = this.state
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch((err) => {
                console.log('ERROR...signInWithEmailAndPassword', err)
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch((err) => {
                        console.log('ERROR...createUserWithEmailAndPassword', err)
                        this.setState({ error: 'Authentication Failed' })
                    })
            })
            .finally((result) => {
                console.log('finally...result', result)
            })
    }

    render () {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label={"Email"}
                        placeholder={"user@gmail.com"}
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email }) }
                    />
                </CardSection>
                
                <CardSection>
                    <Input 
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
                    <Button onMyPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
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