import styles from './styles';
import React, { Component } from 'react';
import { Text, View, Button, AsyncStorage } from 'react-native';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class ProfileScreen extends Component<Props, object> {

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>This is the ProfileScreen.</Text>
        <Button
          title={'Logout'}
          onPress={() => navigate('Auth')}
        />
      </View>
    );
  }
}

export default ProfileScreen;