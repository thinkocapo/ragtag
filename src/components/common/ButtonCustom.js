import React from 'react'
import { Image, Text, TouchableOpacity} from 'react-native'

const ButtonCustom = ({ onMyPress, children }) => {
    const {buttonStyle, textStyle} = styles
    return (
        <TouchableOpacity onPress={onMyPress} style={buttonStyle}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch', 
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },

    textStyle: {
        alignSelf: 'center', // centers text inside of button
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',

        paddingTop: 10,
        paddingBottom: 10

    }
}

export { ButtonCustom }