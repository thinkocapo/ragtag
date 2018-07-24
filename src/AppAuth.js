import React, {Component} from 'react'
import { Text, View } from 'react-native'

import { Header, ButtonCustom, SpinnerCustom } from './components/common'
import LoginForm from './components/auth/LoginForm'

import firebase from 'firebase'

import {FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_DATABASE_URL, FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCKET, FIREBASE_MESSAGING_SENDER_ID} from 'react-native-dotenv'

class AppAuth extends Component {
    state = { loggedIn: null }

    async componentWillMount () {
        const firebaseInitialized = await firebase.initializeApp({
            apiKey: FIREBASE_API_KEY,
            authDomain: FIREBASE_AUTH_DOMAIN,
            databaseURL: FIREBASE_DATABASE_URL,
            projectId: FIREBASE_PROJECT_ID,
            storageBucket: FIREBASE_STORAGE_BUCKET,
            messagingSenderId: FIREBASE_MESSAGING_SENDER_ID
          })
        console.log(firebaseInitialized)

        // Executes when User Signs In or Signs Out
        firebase.auth().onAuthStateChanged((user) => { // user is null if its signOut event
            console.log('onAuthStateChanged...user')
            if (user) {
                this.setState({ loggedIn: true })
            } else {
                this.setState({ loggedIn: false })
            }
        })
    }

    // renderLoggedInOrLoggedOut
    renderLoggedInOrLoggedOut() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <ButtonCustom onMyPress={() => firebase.auth().signOut() }>Log Out</ButtonCustom>
                )
            case false:
                return <LoginForm />
            case null:
                // * REVIEW * How to center the spinner
                // makes its parent View maximized to its own parents (overlays the <Header> but not an issue)
                return (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'  }}>
                        <SpinnerCustom size="large" />
                    </View>
                )
        }
    }

    render() {
        // * MAKE IT MAXIMIZE, SO NOW renderLoggedInOrLoggedOut maybe be able to expand * try those styles now ^^
        return (
            <View style={{ flex: 1 }}>
                <Header headerText="Authentication1"/>
                {this.renderLoggedInOrLoggedOut()}
            </View>
        )
    }

    // styles = {
    //     viewStyle: {
    //         paddingTop: 40,
    //         marginTop: 40,
    //         flexDirection: 'column'
    //     }
    // }
}

export default AppAuth