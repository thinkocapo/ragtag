import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk' // middleware
import firebase from 'firebase'

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { markers } from './markers'

import reducers from './reducers'
import { Header } from './components/common'
import Router from './Router'

// 2nd arg {} is for any additional state we want to pass to our redux application. e.g. email/pw flag for our auth reducer. more for server-side rendering
// 3rd arg is a Store Enhancer (additional functionalities to our store)
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

// https://facebook.github.io/react-native/docs/linking-libraries-ios

class AppRagTag extends Component {

    state = {
        markers: markers,
        region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    }

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

    onRegionChange(region) {
        // this.setState({ region }); // keeps re-firing re-focusing
        // so do nothing...for now...nothing needed
    }
    handleOnPress(nativeEvent) {
        console.log('handleOnPress...', nativeEvent)
        /*
            action:"marker-press"
            coordinate:{longitude: -122.4324, latitude: 37.78825}
            id:"100"
            target:2
        */
       // Firebase call(sender, receiver)
    }

    render() {
    
        // Could make header with menu/buttons for Nav in Rag Tag
        // <Header headerText="Manager Stack App"/>

        return (
            <Provider store={store}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={this.state.region}
                    onRegionChange={this.onRegionChange.bind(this)}
                >
                    {this.state.markers.map((marker, idx) => (
                        <Marker
                            identifier={marker.id}
                            key={idx}
                            coordinate={marker.latlng}
                            title={marker.title}
                            description={marker.description}
                            onPress={e => this.handleOnPress(e.nativeEvent)}
                        />
                    ))}
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
})

export default AppRagTag
