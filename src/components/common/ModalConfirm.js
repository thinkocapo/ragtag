import React, { Component } from 'react'
import _ from 'lodash'
import { ListView, View, Modal, Text } from 'react-native'
// import { connect } from 'react-redux'
import { Card, CardSection, ButtonCustom } from '../common'

// * PASS TEXT * "children" so can pass text to it. destructure props.children
const ModalConfirm = ({ children, visible, onAccept, onDecline }) => {

    const {containerStyle, textStyle, cardSectionStyle} = styles


    // onRequestClose prop required by Android
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={() => {}}
        >

            <View style={containerStyle}>

                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>{children}</Text>
                </CardSection>

                <CardSection>
                    <ButtonCustom onMyPress={onAccept}>Yes</ButtonCustom>
                    <ButtonCustom onMyPress={onDecline}>No</ButtonCustom>
                </CardSection>

            </View>

        </Modal>
    )
}

const styles = {
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40

    },
    containerStyle: { // dark background user can see through and see content behind
        backgroundColor: 'rgba(0, 0, 0, 0.75)', // 0,0,0 is black and 0.75 means opacity of three-quarters
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
}

export { ModalConfirm }