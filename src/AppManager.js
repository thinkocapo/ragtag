import React, {Component} from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk' // middleware
import reducers from './reducers'

import { Header } from './components/common'
import LoginForm from './components/manager/LoginForm'

import firebase from 'firebase'
import {MANAGER_API_KEY, MANAGER_AUTH_DOMAIN, MANAGER_DATABASE_URL, MANAGER_PROJECT_ID, MANAGER_STORAGE_BUCKET, MANAGER_MESSAGING_SENDER_ID} from 'react-native-dotenv'

class AppManager extends Component {

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
        // 2nd arg {} is for any additional state we want to pass to our redux application. e.g. email/pw flag for our auth reducer. more for server-side rendering
        // 3rd arg is a Store Enhancer (additional functionalities to our store)
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        return (
            <Provider store={store}>
                <View style={ { flex: 1 } }>
                    <Header headerText="Manager Stack App"/>
                    <LoginForm/>
                </View>
            </Provider>
        )
    }
}

export default AppManager