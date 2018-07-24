import React, {Component} from 'react'
import { Text, View } from 'react-native'

// import { Header, ButtonCustom, SpinnerCustom } from '../components/common'

class AppTechStack extends Component {
    state = { loggedIn: null }

    async componentWillMount () {

    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>This is the app tech stack</Text>
            </View>
        )
    }

}

export default AppTechStack