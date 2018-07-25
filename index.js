import { AppRegistry } from 'react-native'; // import ReactNative from 'react-native' --> ReactNative.AppRegistry
import React from 'react';
import { View } from 'react-native'


// import AppRagTag from './AppRagTag'
import AppAlbums from './src/AppAlbums'
import AppAuth from './src/AppAuth'
import AppTechStack from './src/AppTechStack'
import AppEmployees from './src/AppEmployees'

console.ignoredYellowBox = ['Remote debugger']; // see note below

AppRegistry.registerComponent('ragtag', () => AppEmployees);


/* 
"WARNING: YellowBox.js:80 
Remote debugger is in a background tab which may cause apps to perform slowly
Fix this by foregrounding the tab (or opening it in a separate window)"

- this suppresses the above warning that renders in the simulated device
- Since upgrading this suppression isn't working, and need to put Debugger in its own window. not a tab
*/