import React, {Component} from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux'
import { CardSection } from '../common'
import * as actions from '../../actions'

// * GOOD *
// TouchableWithouTFeedback - onPress event, and not give any feedback
// we don't nee to opacity change or highlight, because we're Expanding the row

// Even if no state, still want Functional Componenet, because using redux
class ListItem extends Component {
    render() {
        const { titleStyle } = styles
        const { id, title } = this.props.library.item
        console.log("ACTIONS props", this.props)
        return (
            <TouchableWithoutFeedback
                onPress={() => actions.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                </View>
            </ TouchableWithoutFeedback>
        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

const mapStateToProps = state => {
    return {
        selectedLibraryId: state.selectedLibraryId
    }
}
// theactions = {
//     selectLibrary: actions.selectLibrary
// }
export default connect(mapStateToProps, actions)(ListItem)