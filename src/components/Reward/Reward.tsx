import React, { Component } from 'react';
import { Text, View, Button, ImageBackground, TouchableOpacity } from 'react-native';
import RewardModel from 'src/models/RewardModel';

interface MyProps {
    reward: RewardModel,
    showModal: any
}

const Reward = ({reward, showModal} : MyProps) => {
        return (
            <TouchableOpacity onPress={() => showModal(reward.rewardId)}>
                <View style={{marginRight: 15}}>
                    <ImageBackground source={{ uri: reward.imgUri }} style={{width: 100, height: 100}}>
                        <Text style={{color: "#fff"}}>Hello World</Text>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
        );
}

export default Reward;