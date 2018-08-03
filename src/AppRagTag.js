import React, {Component} from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk' // middleware
import firebase from 'firebase'
import {RAGTAG_API_KEY, RAGTAG_AUTH_DOMAIN, RAGTAG_DATABASE_URL, RAGTAG_PROJECT_ID, RAGTAG_STORAGE_BUCKET, RAGTAG_MESSAGING_SENDER_ID} from 'react-native-dotenv'

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
        const firebaseInitialized = await firebase.initializeApp({
            apiKey: RAGTAG_API_KEY,
            authDomain: RAGTAG_AUTH_DOMAIN,
            databaseURL: RAGTAG_DATABASE_URL,
            projectId: RAGTAG_PROJECT_ID,
            storageBucket: RAGTAG_STORAGE_BUCKET,
            messagingSenderId: RAGTAG_MESSAGING_SENDER_ID
        }) 
        console.log('firebase initialized:::', firebaseInitialized) //shows config values
        
        // don't put uid in redux, its available in firebase.auth() method
        // const { currentUser } = firebase.auth() // or const currentUser 
        // console.log('currentUser:::', currentUser) // blank if no user signed up yet...?
        // pop-up for signup?
    }

    render() {
    
        // Could make header with menu/buttons for Nav in Rag Tag
        // <Header headerText="Manager Stack App"/>

        return (
            <Provider store={store}>
                <View style={ { flex: 1 } }>
                    <Header headerText="RAG TAG"/>
                    <Map />
                </View>
            </Provider>
        )
    }
}



export default AppRagTag
