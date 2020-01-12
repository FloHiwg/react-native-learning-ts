import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import RewardModel from 'src/models/RewardModel';

interface MyProps {
    reward: RewardModel,
    showModal: any
}

const Reward = ({reward, showModal} : MyProps) => {
        return (
            <TouchableOpacity onPress={() => showModal(reward.rewardId)}>
                <View style={{marginRight: 15}}>
                    <ImageBackground source={{ uri: reward.imgUri }} style={styles.card}>
                        <Text style={{color: "#fff"}}>Hello World</Text>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
        );
}

const styles = StyleSheet.create({
    card: {
        width: 100,
        height: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        padding: 10
    }
});

export default Reward;