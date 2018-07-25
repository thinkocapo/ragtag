import React, {Component} from 'react'
import { Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

import { Header } from './components/common'

import firebase from 'firebase'
import {MANAGER_API_KEY, MANAGER_AUTH_DOMAIN, MANAGER_DATABASE_URL, MANAGER_PROJECT_ID, MANAGER_STORAGE_BUCKET, MANAGER_MESSAGING_SENDER_ID} from 'react-native-dotenv'

class AppEmployees extends Component {

    async componentWillMount() {
        const firebaseInitialized = await firebase.initializeApp({
            apiKey: MANAGER_API_KEY,
            authDomain: MANAGER_AUTH_DOMAIN,
            databaseURL: MANAGER_DATABASE_URL,
            projectId: MANAGER_PROJECT_ID,
            storageBucket: MANAGER_STORAGE_BUCKET,
            messagingSenderId: MANAGER_MESSAGING_SENDER_ID
        }) 
        console.log('firebase initialized:', firebaseInitialized) //shows config values

    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View style={ { flex: 1 } }>
                    <Header headerText="Employees Stack App"/>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>I am centered because i'm flexing to my parent, over the header, which shares same parent</Text>
                    </View>
                </View>
            </Provider>
        )
    }
}

export default AppEmployees