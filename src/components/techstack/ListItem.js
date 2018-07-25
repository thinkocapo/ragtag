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

    renderDescription() {
        const { selectedLibraryId } = this.props
        const library = this.props.library.item

        if (library.id === selectedLibraryId) {
            return (
                <Text>{library.description}</Text>
            )
        }
    }

    render() {
        const { titleStyle } = styles
        const { id, title } = this.props.library.item

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
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

// * IMPORTANT *
// "ownProps are the props passed to the component we're wrapping" i.e. child props. equal to this.props inside of component
const mapStateToProps = (state, ownProps) => { // { selectedLibraryId }
    console.log('ownProps', ownProps)
    return {
        selectedLibraryId: state.selectedLibraryId
    }
}

export default connect(mapStateToProps, actions)(ListItem)