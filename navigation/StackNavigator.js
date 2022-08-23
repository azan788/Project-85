import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PostScreen from '../screens/PostScreen';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="PostScreen" component={PostScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
