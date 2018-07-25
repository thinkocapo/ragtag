import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Text, View, FlatList } from 'react-native'
import ListItem from './ListItem'

class LibraryList extends Component {
    renderItem(library) {
        return <ListItem library={library} />
    }
    
    render() {
        // should take however many it can fit on the screen
        console.log('this.props.libraries....', this.props.libraries)
        return (
            <FlatList
                data={this.props.libraries}
                renderItem={this.renderItem}
                keyExtractor={(library) => library.id.toString()}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        libraries: state.libraries
    }
}

export default connect(mapStateToProps)(LibraryList)