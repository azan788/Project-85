import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
    labeled={false}
    barStyle={styles.bottomTabStyle}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Feed') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Create Post') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          }
          return <Ionicons name={iconName} size={RFValue(25)} color={color} style={styles.icon} />;
        },
      })}
      activeColor={'tomato'}
      inactiveColor={'gray'}>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Create Post" component={CreatePost} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: '#404040',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
    position: 'absolute',
    height: '8%',
  },
  icon: {
    width: RFValue(30),
    height: RFValue(30),
  },
});