import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert, ImageBackground } from 'react-native';

interface MyState {}

const RewardDetail = ({ handleClose, show, rewardId }) => {
    return (
        <View style={{marginTop: 100}}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={show}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                }}>
                <View style={{marginTop: 50}}>
                    <View>
                        <ImageBackground source={{ uri: "http://lorempixel.com/500/300/"}} style={{width: '100%', height: 200}}>
                            <TouchableHighlight
                            onPress={() => handleClose()}>
                                <Text style={{color: "white"}}>Hide Modal</Text>
                            </TouchableHighlight>
                        </ImageBackground>
                        <View style={{padding: 20}}>
                            <Text style={{fontSize: 25}}>Hello World! Reward {rewardId}</Text>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default RewardDetail