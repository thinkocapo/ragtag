import React, {Component} from 'react'
import { Text, View } from 'react-native'

import { Header } from './components/common';
import AlbumList from './components/album/AlbumList';

const AppAlbums = () => (
      <View style={{ flex: 1 }}>
        <Header headerText={'AlbumsHeader'} />
        <AlbumList/>
      </View>
)
export default AppAlbums