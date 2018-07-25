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
        const { expanded } = this.props
        const library = this.props.library.item

        if (expanded) {
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
// e.g. library={library} testme={'ya'} will show on ownProps
const mapStateToProps = (state, ownProps) => { // { selectedLibraryId }
    console.log('ownProps', ownProps)
    const expanded = state.selectedLibraryId === ownProps.library.id
    return { expanded }
}

export default connect(mapStateToProps, actions)(ListItem)