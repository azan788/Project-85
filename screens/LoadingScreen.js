import * as React from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

export default class LoadingScreen extends React.Component {
  ifLogin = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate('DashboardScreen');
      } else {
        this.props.navigation.navigate('LoginScreen');
      }
    });
  };

  componentDidMount() {
    this.ifLogin();
  }
  
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }
}
