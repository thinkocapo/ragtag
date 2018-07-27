import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

// * STYLE * can accept an ARRAY. style furthest to the right, will override anything on the left
const CardSection = (props) => {
    // style={{ flexDirection: 'column'} from EmployeeCreate.js Picker cardsection
    return (
        <View style={ [styles.containerStyle, props.style] }>
            {props.children}
        </View>
    )
}

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