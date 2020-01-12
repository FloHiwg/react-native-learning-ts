import styles from './styles';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import RewardCarousel from '../../components/RewardCarousel';
import RewardDetail from '../../components/RewardDetail';
import RewardModel from 'src/models/RewardModel';

class RewardsScreen extends Component {
  state = { 
    show: false,
    rewardId: -1
  };

  rewards: RewardModel[] = [
    {
      rewardId: 0,
      title: 'Erster Gutschein 20%',
      imgUri: 'http://lorempixel.com/50/50/'
    },
    {
      rewardId: 1,
      title: 'Zweiter Gutschein 20%',
      imgUri: 'http://lorempixel.com/50/50/'
    },
    {
      rewardId: 2,
      title: 'Dritter Gutschein 20%',
      imgUri: 'http://lorempixel.com/50/50/'
    },
    {
      rewardId: 3,
      title: 'Vierter Gutschein 20%',
      imgUri: 'http://lorempixel.com/50/50/'
    },
    {
      rewardId: 4,
      title: 'Vierter Gutschein 20%',
      imgUri: 'http://lorempixel.com/50/50/'
    }
  ]

  showModal = (rewardId: number) => {
    this.setState({ show: true, rewardId: rewardId });
  };

  hideModal = () => {
    this.setState({ show: false, rewardId: -1 });
  };
  
  render() {
    return (
      <View>
        <RewardCarousel category="Health" show={this.showModal} rewards={this.rewards}></RewardCarousel>
        <RewardDetail rewardId={this.state.rewardId} show={this.state.show} handleClose={this.hideModal}></RewardDetail>
      </View>
    );
  }
}

export default RewardsScreen;