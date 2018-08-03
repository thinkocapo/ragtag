import React, {Component} from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk' // middleware
import firebase from 'firebase'

import reducers from './reducers'
import { Header } from './components/common'
import Router from './Router'
import Map from './components/ragtag/map'

// 2nd arg {} is for any additional state we want to pass to our redux application. e.g. email/pw flag for our auth reducer. more for server-side rendering
// 3rd arg is a Store Enhancer (additional functionalities to our store)
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

// https://facebook.github.io/react-native/docs/linking-libraries-ios

class AppRagTag extends Component {

    async componentWillMount() {
        // const firebaseInitialized = await firebase.initializeApp({
        //     apiKey: MANAGER_API_KEY,
        //     authDomain: MANAGER_AUTH_DOMAIN,
        //     databaseURL: MANAGER_DATABASE_URL,
        //     projectId: MANAGER_PROJECT_ID,
        //     storageBucket: MANAGER_STORAGE_BUCKET,
        //     messagingSenderId: MANAGER_MESSAGING_SENDER_ID
        // }) 
        // console.log('firebase initialized:', firebaseInitialized) //shows config values

    }

    render() {
    
        // Could make header with menu/buttons for Nav in Rag Tag
        // <Header headerText="Manager Stack App"/>

        return (
            <Provider store={store}>
                <Map />
            </Provider>
        )
    }
}



export default AppRagTag
