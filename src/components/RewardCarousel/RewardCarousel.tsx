import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Reward from '../Reward';
import RewardModel from 'src/models/RewardModel';

const RewardCarousel = ({ 
    show, 
    rewards,
    category
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{category}</Text>
            <ScrollView horizontal={true}>
            {rewards.map((reward: RewardModel, index: number) => (
                <Reward reward={reward} showModal={show}></Reward>
            ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      padding: 20
    },
    heading: {
        fontSize: 20,
        marginBottom: 15
    }
  });

export default RewardCarousel