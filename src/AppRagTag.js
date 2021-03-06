import React, {Component} from 'react'
import { View, Text } from 'react-native'
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import {
    RAGTAG_API_KEY, RAGTAG_AUTH_DOMAIN, RAGTAG_DATABASE_URL, RAGTAG_PROJECT_ID, RAGTAG_STORAGE_BUCKET, RAGTAG_MESSAGING_SENDER_ID,
    // RAGTAG_YOUR_EMAIL, RAGTAG_YOUR_PASSWORD
} from 'react-native-dotenv'
import reducers from './reducers'
import { Header, SpinnerCustom } from './components/common'
import Map from './components/ragtag/map'
import firebase from 'firebase'
// import Router from './Router' consider if app complexity grows
// import { loginUserRagTag } from './actions' can't mount this component to Redux...

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

// TODO - pop-up prompt for signup?
class AppRagTag extends Component {

    async componentWillMount() {
        // TODO - where should firebaseInitialization happen, as well as rest of the calls happing in map.js componentWillMount()
        const firebaseInitialized = await firebase.initializeApp({
            apiKey: RAGTAG_API_KEY,
            authDomain: RAGTAG_AUTH_DOMAIN,
            databaseURL: RAGTAG_DATABASE_URL,
            projectId: RAGTAG_PROJECT_ID,
            storageBucket: RAGTAG_STORAGE_BUCKET,
            messagingSenderId: RAGTAG_MESSAGING_SENDER_ID
        }) 
        console.log('FIREBASE INITIALIZED', firebaseInitialized)
        // this.props.loginUserRagTag({ RAGTAG_YOUR_EMAIL, RAGTAG_YOUR_PASSWORD }) didn't work here, unable to call actions/async from this file with <Provider> and so close to root. Can't mount the component to redux
    }

    // Could replace Header/Map with <Router> if need more screens
    render() {
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <Header headerText="RAG TAG"/>
                    <Map />
                </View>
            </Provider>
        )
    }
}

export default AppRagTag
