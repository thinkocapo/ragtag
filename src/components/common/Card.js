import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Card = (props) => (
    <View style={styles.containerStyle}>
        {props.children}
    </View>
)

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,

        shadowColor: '#000',
        shadowOffset: { height: 2, width: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 2,

        elevation: 1,

        marginLeft: 5,
        marginRight: 5,
        marginTop: 10

        // flexDirection: 'column',
        // justifyContent: 'space-between'
    }
}
export { Card }
