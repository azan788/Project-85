import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
} from 'react-native';
import AppLoading from 'expo-app-loading';
import { FlatList } from 'react-native-gesture-handler';
import PostCard from './PostCard';
import { RFValue } from 'react-native-responsive-fontsize';

let posts = require('./temp_posts.json');

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  renderItem = ({ item: post }) => {
    return <PostCard post={post} navigation={this.props.navigation}/>;
  };

  keyExtractor = (item, index) => {
    index.toString();
  };

  componentDidMount() {}
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.safeArea} />
        <View style={styles.titleBar}>
          <View style={styles.appIcon}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.appLogo}
            />
          </View>
          <View style={styles.titleTextContainer}>
            <Text style={styles.titleText}>Spectragram</Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={posts}
            renderItem={this.renderItem}
          />
        </View>
        <View style={{ flex: 0.08 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
  },
  safeArea: {
    marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  titleBar: {
    flex: 0.07,
    flexDirection: 'row',
    marginTop: 20
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appLogo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  titleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: RFValue(30),
  },
  cardContainer: {
    flex: 0.93,
  },
});
