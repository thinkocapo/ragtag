import { AppRegistry } from 'react-native';
import React from 'react';
import { View } from 'react-native'



// import AppRagTag from './AppRagTag'
// import AppAlbums from './AppAlbums'
import AppAuth from './src/AppAuth'
import AppTechStack from './src/AppTechStack'
import AppEmployees from './src/AppEmployees'

// import Header from './src/components/common/Header';
// import AlbumList from './src/components/album/AlbumList';
// const AnApp = () => (
//       <View style={{ flex: 1 }}>
//             <Header headerText={'AlbumsHeader'} />
//             <AlbumList/>
//       </View>
// )

/* WARNING
"WARNING: YellowBox.js:80 
Remote debugger is in a background tab which may cause apps to perform slowly
Fix this by foregrounding the tab (or opening it in a separate window)"
*/
// this suppresses the above warning that renders in the simulated device
console.ignoredYellowBox = ['Remote debugger'];

// ReactNative.AppRegistry
AppRegistry.registerComponent('ragtag', () => AppTechStack);

