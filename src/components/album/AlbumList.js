import React, {Component} from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import axios from 'axios'
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
    state = { albums: []}

    componentWillMount() {
        // console.log('BEFORE....');
        // debugger;
        // console.log('AFTER....');
        axios.get('https:rallycoding.herokuapp.com/api/music_albums')
            .then(response => {
                this.setState({ albums: response.data })
            })

    }

    renderAlbums () {
        return this.state.albums.map((album, idx) => <AlbumDetail key={idx} album={album} />)
    }
    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }

}

export default AlbumList;
