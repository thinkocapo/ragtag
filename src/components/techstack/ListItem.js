import React, {Component} from 'react'
import { 
    Text, View, 
    TouchableWithoutFeedback, 
    LayoutAnimation
} from 'react-native'
import { connect } from 'react-redux'
import { CardSection } from '../common'
import * as actions from '../../actions'

// * GOOD *
// TouchableWithouTFeedback - onPress event, and not give any feedback
// we don't nee to opacity change or highlight, because we're Expanding the row

// Even if no state, still want Functional Componenet, because using redux
class ListItem extends Component {
    // not componentWillMount
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { library, expanded } = this.props

        if (expanded) {
            return (
                <CardSection>
                    <Text>{library.description}</Text>
                </CardSection>
            )
        }
    }

    render() {
        const { titleStyle } = styles
        const { id, title } = this.props.library

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
        flex: 1, // prevents text from running off the screen left-to-right. but that wasn't happening on mine...
        fontSize: 18,
        paddingLeft: 15
    }
}

// * IMPORTANT *
// "ownProps are the props passed to the component we're wrapping" i.e. child props. equal to this.props inside of component
// e.g. library={library} testme={'ya'} will show on ownProps
const mapStateToProps = (state, ownProps) => { // { selectedLibraryId }
    const expanded = state.selectedLibraryId === ownProps.library.id
    return { expanded }
}

export default connect(mapStateToProps, actions)(ListItem)