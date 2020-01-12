import { Platform } from "react-native";
import DetailScreen from '../screens/Detail';
import HomeScreen from '../screens/Home';
import LoadingScreen from '../screens/Loading';
import OptionsScreen from '../screens/Options';
import SettingsScreen from '../screens/Settings';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

const HomeStack = createStackNavigator(
    { HomeScreen, DetailScreen, OptionsScreen},
    { initialRouteName: "HomeScreen" }
  );

const MainNavigator = Platform.select({
    ios: createBottomTabNavigator({ HomeStack, SettingsScreen }),
    android: createDrawerNavigator({ HomeStack, SettingsScreen })
  });


const RootSwitch = createSwitchNavigator(
    { LoadingScreen, MainNavigator },
    { initialRouteName: "MainNavigator" }
  );

export default RootSwitch;
