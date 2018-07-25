import React, {Component} from 'react'
import { Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

import { Header } from './components/common'

class AppEmployees extends Component {

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