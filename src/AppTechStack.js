import React, {Component} from 'react'
import { Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

import { Header } from './components/common'
import LibraryList from './components/techstack/LibraryList'

// Redux
// (state = [], action)
// return [ ...state, action.payload] instead of state.push(action.payload)

// Hard code the list items into redux, for purpose of this app
class AppTechStack extends Component {
    state = { loggedIn: null }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View style={ { flex: 1 } }>
                    <Header headerText="Tech Stack App"/>
                    <LibraryList />
                </View>
            </Provider>
        )
    }
    
}
{/* <Provider store={createStore(reducers)}>
<View style={ { flex: 1 } }>
    <Header headerText="Tech Stack App"/>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>I am centered because i'm flexing to my parent, over the header, which shares same parent</Text>
    </View>
</View>
</Provider> */}

export default AppTechStack