import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk' // middleware
import MapView from 'react-native-maps';
import firebase from 'firebase'

import reducers from './reducers'
import { Header } from './components/common'
// // import LoginForm from './components/manager/LoginForm'
import Router from './Router'

// https://facebook.github.io/react-native/docs/linking-libraries-ios
/**
 * 
 * Look at node_modules/react-native-maps/lib/components/MapView and look for AIRMap references, says what to do in iOS setup, XCode, try this
 * and/or
 * See if running on Android works too. run on android first with a <Text> instead of <MapView>, make sure that works... then try the MapView.
 */

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
        // 2nd arg {} is for any additional state we want to pass to our redux application. e.g. email/pw flag for our auth reducer. more for server-side rendering
        // 3rd arg is a Store Enhancer (additional functionalities to our store)
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        // <Header headerText="Manager Stack App"/>
        return (
            <Provider store={store}>
                <MapView
                    style={styles.map}
                    region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                    }}
                >
                </MapView>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   height: 400,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

export default AppRagTag
