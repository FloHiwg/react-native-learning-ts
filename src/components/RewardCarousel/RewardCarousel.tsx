import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import RewardCard from '../RewardCard';
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
                <RewardCard reward={reward} showModal={show} key={`${index}_${reward.rewardId}`}></RewardCard>
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