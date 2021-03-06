import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, AsyncStorage } from 'react-native';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class LoginScreen extends Component<Props, object> {
  state = {
    username: '',
    password: ''
  }
  
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }

  onLogin() {
    const { username, password } = this.state;
    Alert.alert('Credentials', `${username} + ${password}`);
    this._signInAsync;
  }


  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          onPress={() => navigate('App')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});


export default LoginScreen;