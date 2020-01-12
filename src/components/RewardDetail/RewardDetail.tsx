import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert, ImageBackground } from 'react-native';
import RewardModel from 'src/models/RewardModel';
import Icon from 'react-native-vector-icons/FontAwesome';

interface MyProps {
    handleClose: any,
    show: boolean,
    reward: RewardModel
}

const RewardDetail = ({ handleClose, show, reward } : MyProps) => {
    return (
        <View style={{marginTop: 100}}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={show}>
                <View style={{marginTop: 50}}>
                    <View>
                        <ImageBackground source={{ uri: reward.imgUri}} style={{width: '100%', height: 200}}>
                            <TouchableHighlight
                            onPress={() => handleClose()}>
                                <Icon name="times" size={20} color="#fff" style={{padding: 10}} />
                            </TouchableHighlight>
                        </ImageBackground>
                        <View style={{padding: 20}}>
                            <Text style={{fontSize: 25, marginBottom: 20}}>{reward.title}</Text>
                            <Text style={{fontSize: 14}}>{reward.description}</Text>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default RewardDetail