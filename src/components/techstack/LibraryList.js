import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Text, View, FlatList } from 'react-native'
import ListItem from './ListItem'

class LibraryList extends Component {
    renderItem(library) {
        // library has { index, item, separators} and we only need item
        return <ListItem library={library.item}/>
    }
    
    // We want a Component that should take however many it can fit on the screen, so we use FlatList
    render() {
        // * INTERESTING *
        //console.log('LibraryList...', this.props) // { id, title, description } on each
        return (
            <FlatList
                data={this.props.libraries} // adds { index, item, separators} where 'item' has your library from this.props.libraries
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