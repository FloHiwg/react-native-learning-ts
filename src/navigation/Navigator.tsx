import React from "react";
import { Platform } from "react-native";
import LoadingScreen from '../screens/Loading';
import LoginScreen from '../screens/Login';
import AddPartnerScreen from '../screens/AddPartner';
import RewardsScreen from '../screens/Rewards';
import ProfileScreen from "../screens/Profile";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeStack = createStackNavigator(
  { 
    Rewards: {
      screen: RewardsScreen,
      path: 'rewards'
    },
    initialRouteName: RewardsScreen
  }
);

const AddStack = createStackNavigator(
  { 
    Add: {
      screen: AddPartnerScreen,
      path: 'addPartner'
    },
    initialRouteName: AddPartnerScreen
  }
);

const MainNavigator = Platform.select({
    ios: createBottomTabNavigator(
      {
        Rewards: {
          screen: HomeStack,
    
          navigationOptions: {
            tabBarLabel:"Rewards",
            tabBarIcon: ({ tintColor }) => (
              <Icon name="home" size={20} color="#000" />
            )
          },
        },
        Profile: {
          screen: ProfileScreen,
          navigationOptions: {
            tabBarLabel:"Profile",
            tabBarIcon: ({ tintColor }) => (
              <Icon name="user" size={20} color="#000" />
            )
          }
        },
        AddPartner: {
          screen: AddStack,
          navigationOptions: {
            tabBarLabel:"Add",
            tabBarIcon: ({ tintColor }) => (
              <Icon name="plus" size={20} color="#000" />
            )
          }
        },
      },
      {
        order: ['Rewards', "AddPartner", 'Profile']
      }
    ),
    android: createDrawerNavigator({ HomeStack, AddStack, ProfileScreen })
  });


const RootSwitch = createSwitchNavigator(
    { LoadingScreen, MainNavigator },
    { initialRouteName: "MainNavigator" }
  );

export default RootSwitch;
