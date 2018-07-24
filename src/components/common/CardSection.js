import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CardSection = (props) => (
    <View style={styles.containerStyle}>
        {props.children}
    </View>
)

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',

        justifyContent: 'flex-start',
        flexDirection: 'row', // Left-to-right for <View> components contained inside * IMPORTANT *
        borderColor: '#ddd',
        position: 'relative'
    }
}
export { CardSection }