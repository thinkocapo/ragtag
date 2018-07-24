import React, {Component} from 'react'
import { Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// import { Header, ButtonCustom, SpinnerCustom } from '../components/common'

// (state = [], action)
// return [ ...state, action.payload] instead of state.push(action.payload)
class AppTechStack extends Component {
    state = { loggedIn: null }

    async componentWillMount () {

    }

    render() {
        return (
            <Provider store={createStore}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>This is the app tech stack</Text>
                </View>
            </Provider>
        )
    }

}

export default AppTechStack