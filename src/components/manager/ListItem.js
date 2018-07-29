import React, { Component } from 'react'
import { ListView } from 'react-native'
import { Text } from 'react-native'
import { CardSection } from '../common'
// import { connect } from 'react-redux'

class ListItem extends Component {
    render() {
        const { name } = this.props.employee

        return (
            <CardSection>
                <Text>
                    {name}
                </Text>
            </CardSection>
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