import React, {Component} from 'react'
import { View, Text } from 'react-native'
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
// import firebase from 'firebase'
// const firebase = require("firebase"); **TODO** const might work better than import?
// or...
// import firebase from '@firebase/app'
// or...
// downgrade https://stackoverflow.com/questions/50555275/react-native-objects-are-not-valid-as-a-react-child-found-object-with-keys

// https://github.com/cht8687/react-listview-sticky-header/issues/6
import {
    RAGTAG_API_KEY, RAGTAG_AUTH_DOMAIN, RAGTAG_DATABASE_URL, RAGTAG_PROJECT_ID, RAGTAG_STORAGE_BUCKET, RAGTAG_MESSAGING_SENDER_ID,
} from 'react-native-dotenv'
import reducers from './reducers'
import { Header, SpinnerCustom } from './components/common'
// import Router from './Router'
// import Map from './components/ragtag/map'

// import firebase from 'firebase'
// const firebase = require("firebase");

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

// TODO
// pop-up prompt for signup?
class AppRagTag extends Component {

    async componentWillMount() {

        // const firebaseInitialized = await firebase.initializeApp({
        //     apiKey: RAGTAG_API_KEY,
        //     authDomain: RAGTAG_AUTH_DOMAIN,
        //     databaseURL: RAGTAG_DATABASE_URL,
        //     projectId: RAGTAG_PROJECT_ID,
        //     storageBucket: RAGTAG_STORAGE_BUCKET,
        //     messagingSenderId: RAGTAG_MESSAGING_SENDER_ID
        // }) 
        // console.log('firebase initialized:::', firebaseInitialized)
        
    }

    // Could replace Header/Map with <Router> if need more screens
    render() {
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <Header headerText="RAG TAG"/>
                </View>
            </Provider>
        )
    }
}
// <Map />

export default AppRagTag
