import React from 'react'
import {Image, Text, View, Linking} from 'react-native'
import Card from './common/Card'
import CardSection from '../common/CardSection'
import ButtonCustom from '../common/Button'

// * <Text> gets passed into Cards and rendered in their via its {props.children}

// * IMPORTANT *
// <CardSection> here has flex-direction:row so anything you pass into it will be left-to-right row'd
// <CardSection> has props.children

// View style={styles.headerContentStyle} <-- i think by defualt these <Text>'s would line up vertically, No?
const AlbumDetail = ({ album: { artist, image, title, thumbnail_image, url } }) => {
    const { thumbnailStyle, thumbnailContainerStyle, headerContentStyle, headerTextStyle, imageStyle } = styles
    
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle} 
                        source={{uri: thumbnail_image }}/>
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                    <Image 
                        source={{uri: image }}
                        style={imageStyle}/>
            </CardSection>
            <CardSection>
                <ButtonCustom onMyPress={() => {Linking.openURL(url)}}>
                    Buy Now
                </ButtonCustom>
            </CardSection>
        </Card>
    )
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },

    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}
export default AlbumDetail

/**
 * 
 * View
 *  View
 * 
 * vs
 * 
 * Card
 *  CardItem
 */