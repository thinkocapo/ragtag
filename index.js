import { AppRegistry } from 'react-native';
import React from 'react';
import { View } from 'react-native'

// ANDROID INSTRUCTIONS
// Terminal 1
// /Users/WillsHome/Library/Android/sdk/tools/emulator -avd Nexus_6_Marshmallow
// opens a Mac Terminal log showing React Package Manager builds (for every save), keeps original terminal blocked

// Terminal 2
// react-native run-android; react-native log-android

// IOS INSTRUCTIONS
// Terminal 1
// react-native run-ios

// 3 DIFFERENT APPS YOU CAN PLUG AND PLAY

// import AppRagTag from './AppRagTag' TODO

import AuthApp from './src/App'

// import Header from './src/components/common/Header';
// import AlbumList from './src/components/AlbumList';
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
AppRegistry.registerComponent('ragtag', () => AuthApp);

