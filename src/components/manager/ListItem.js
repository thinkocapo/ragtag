import React, { Component } from 'react'
import { ListView, View, TouchableWithoutFeedback } from 'react-native'
import { Text } from 'react-native'
import { CardSection } from '../common'

import { Actions } from 'react-native-router-flux'

// import { connect } from 'react-redux'?

class ListItem extends Component {

    onRowPress() {
        Actions.employeeCreate({ employee: this.props.employee }) // **HOPE WORKS...
    }

    render() {
        const { name } = this.props.employee

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

export default ListItem