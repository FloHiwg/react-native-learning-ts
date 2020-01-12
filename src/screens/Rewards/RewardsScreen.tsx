import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import RewardCarousel from '../../components/RewardCarousel';
import RewardDetail from '../../components/RewardDetail';
import RewardModel from 'src/models/RewardModel';

class RewardsScreen extends Component {
  state = { 
    show: false,
    reward: {
      rewardId: -1,
      title: '',
      imgUri: '',
      description: '',
      tags: []
    }
  };

  rewards: RewardModel[] = [
    {
      rewardId: 0,
      title: 'Erster Gutschein 20%',
      imgUri: 'https://picsum.photos/200/300',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis vel ipsum at facilisis. Nulla justo nunc, commodo vel pretium faucibus, fermentum vitae tellus. Donec viverra sem a metus mattis accumsan. Aenean sapien diam, accumsan ut consectetur sed, aliquet sed dui. Aenean a ipsum placerat tortor malesuada sagittis. Vivamus ornare porttitor lorem, id condimentum dolor mollis non. Integer commodo, leo at mollis condimentum, lacus libero consequat nulla, vel pulvinar purus elit et massa. Sed nec dolor in libero blandit pulvinar. Suspendisse imperdiet velit ligula, nec aliquam est vehicula vitae. Fusce quis tellus sed purus molestie dictum et at libero. Praesent volutpat aliquam egestas.',
      tags: [
        "test1",
        "test2"
      ]
    },
    {
      rewardId: 1,
      title: 'Zweiter Gutschein 20%',
      imgUri: 'https://picsum.photos/200/300',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis vel ipsum at facilisis. Nulla justo nunc, commodo vel pretium faucibus, fermentum vitae tellus. Donec viverra sem a metus mattis accumsan. Aenean sapien diam, accumsan ut consectetur sed, aliquet sed dui. Aenean a ipsum placerat tortor malesuada sagittis. Vivamus ornare porttitor lorem, id condimentum dolor mollis non. Integer commodo, leo at mollis condimentum, lacus libero consequat nulla, vel pulvinar purus elit et massa. Sed nec dolor in libero blandit pulvinar. Suspendisse imperdiet velit ligula, nec aliquam est vehicula vitae. Fusce quis tellus sed purus molestie dictum et at libero. Praesent volutpat aliquam egestas.',
      tags: [
        "test1",
        "test2"
      ]
    },
    {
      rewardId: 2,
      title: 'Dritter Gutschein 20%',
      imgUri: 'https://picsum.photos/200/300',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis vel ipsum at facilisis. Nulla justo nunc, commodo vel pretium faucibus, fermentum vitae tellus. Donec viverra sem a metus mattis accumsan. Aenean sapien diam, accumsan ut consectetur sed, aliquet sed dui. Aenean a ipsum placerat tortor malesuada sagittis. Vivamus ornare porttitor lorem, id condimentum dolor mollis non. Integer commodo, leo at mollis condimentum, lacus libero consequat nulla, vel pulvinar purus elit et massa. Sed nec dolor in libero blandit pulvinar. Suspendisse imperdiet velit ligula, nec aliquam est vehicula vitae. Fusce quis tellus sed purus molestie dictum et at libero. Praesent volutpat aliquam egestas.',
      tags: [
        "test1",
        "test2"
      ]
    },
    {
      rewardId: 3,
      title: 'Vierter Gutschein 20%',
      imgUri: 'https://picsum.photos/200/300',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis vel ipsum at facilisis. Nulla justo nunc, commodo vel pretium faucibus, fermentum vitae tellus. Donec viverra sem a metus mattis accumsan. Aenean sapien diam, accumsan ut consectetur sed, aliquet sed dui. Aenean a ipsum placerat tortor malesuada sagittis. Vivamus ornare porttitor lorem, id condimentum dolor mollis non. Integer commodo, leo at mollis condimentum, lacus libero consequat nulla, vel pulvinar purus elit et massa. Sed nec dolor in libero blandit pulvinar. Suspendisse imperdiet velit ligula, nec aliquam est vehicula vitae. Fusce quis tellus sed purus molestie dictum et at libero. Praesent volutpat aliquam egestas.',
      tags: [
        "test1",
        "test2"
      ]
    },
    {
      rewardId: 4,
      title: 'Vierter Gutschein 20%',
      imgUri: 'https://picsum.photos/200/300',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis vel ipsum at facilisis. Nulla justo nunc, commodo vel pretium faucibus, fermentum vitae tellus. Donec viverra sem a metus mattis accumsan. Aenean sapien diam, accumsan ut consectetur sed, aliquet sed dui. Aenean a ipsum placerat tortor malesuada sagittis. Vivamus ornare porttitor lorem, id condimentum dolor mollis non. Integer commodo, leo at mollis condimentum, lacus libero consequat nulla, vel pulvinar purus elit et massa. Sed nec dolor in libero blandit pulvinar. Suspendisse imperdiet velit ligula, nec aliquam est vehicula vitae. Fusce quis tellus sed purus molestie dictum et at libero. Praesent volutpat aliquam egestas.',
      tags: [
        "test1",
        "test2"
      ]
    }
  ]

  showModal = (reward: RewardModel) => {
    this.setState({ show: true, reward: reward });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  
  render() {
    return (
      <ScrollView>
        <RewardCarousel category="Health" show={this.showModal} rewards={this.rewards}></RewardCarousel>
        <RewardCarousel category="Fashion" show={this.showModal} rewards={this.rewards}></RewardCarousel>
        <RewardCarousel category="Food" show={this.showModal} rewards={this.rewards}></RewardCarousel>
        <RewardCarousel category="Events" show={this.showModal} rewards={this.rewards}></RewardCarousel>
        <RewardCarousel category="Fun" show={this.showModal} rewards={this.rewards}></RewardCarousel>
        <RewardCarousel category="IDK" show={this.showModal} rewards={this.rewards}></RewardCarousel>
        <RewardDetail reward={this.state.reward} show={this.state.show} handleClose={this.hideModal}></RewardDetail>
      </ScrollView>
    );
  }
}

export default RewardsScreen;