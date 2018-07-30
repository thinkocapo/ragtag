import React, { Component } from 'react'
import _ from 'lodash'
import { ListView, View, Modal } from 'react-native'
// import { connect } from 'react-redux'
import { Card, CardSection, ButtonCustom } from '../common'

// * PASS TEXT * "children" so can pass text to it. destructure props.children
const ModalConfirm = ({ children, visible, onAccept, onDecline }) => {
    // onRequestClose prop required by Android
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={() => {}}
        >

            <View>

                <CardSection>
                    <Text>{children}</Text>
                </CardSection>

                <CardSection>
                    <ButtonCustom onMyPress={onAccept}>Yes</ButtonCustom>
                    <ButtonCustom onMyPress={onDecline}>No</ButtonCustom>
                </CardSection>

            </View>

        </Modal>
    )
}

export { Confirm }