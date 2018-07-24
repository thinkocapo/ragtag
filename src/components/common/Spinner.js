import React, { Component } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

const Spinner = ({ size }) => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    )
}

const styles = {
    spinnerStyle: {
        flex: 1, // so View takes up whole screen
        justifyContent: 'center', // so A.I. inside is centered
        alignItems: 'center'
    }
}
export { Spinner }