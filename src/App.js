import React, {Component} from 'react'
import { Text, View } from 'react-native'

import { Header } from './components/common'
import LoginForm from './components/LoginForm'

import firebase from 'firebase'

import Config from 'react-native-config'
const {FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_DATABASE_URL, FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCKET, FIREBASE_MESSAGING_SENDER_ID} = Config

class App extends Component {

    async componentWillMount () {
        console.log('API', FIREBASE_API_KEY)
        // const firebaseInitialized = await firebase.initializeApp({
        //     apiKey: FIREBASE_API_KEY,
        //     authDomain: FIREBASE_AUTH_DOMAIN,
        //     databaseURL: FIREBASE_DATABASE_URL,
        //     projectId: FIREBASE_PROJECT_ID,
        //     storageBucket: FIREBASE_STORAGE_BUCKET,
        //     messagingSenderId: FIREBASE_MESSAGING_SENDER_ID
        //   })
        //   console.log(firebaseInitialized)
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                <LoginForm />
            </View>
        )
    }
}

export default App