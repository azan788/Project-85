import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class PostCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.route.params) {
      this.props.navigation.navigate('Home');
    } else {
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
            <View style={styles.authorContainer}>
              <View style={styles.authorImageContainer}>
                <Image
                  source={require('../assets/profile_img.png')}
                  style={styles.profileImage}
                />
              </View>
              <View style={styles.authorNameContainer}>
                <Text style={styles.authorNameText}>
                  {this.props.route.params.post.author}
                </Text>
              </View>
            </View>
            <Image
              source={require('../assets/post.jpeg')}
              style={styles.postImage}
            />
            <View style={styles.captionContainer}>
              <Text style={styles.captionText}>
                {this.props.route.params.post.caption}
              </Text>
            </View>
            <View style={styles.actionContainer}>
              <View style={styles.likeButton}>
                <Ionicons name={'heart'} size={RFValue(30)} color={'white'} />
                <Text style={styles.likeText}>12k</Text>
              </View>
            </View>
          </View>
        </View>
      );
    }
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
    flex: 0.08,
    flexDirection: 'row',
    marginTop: 20,
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
    margin: RFValue(13),
    backgroundColor: '#404040',
    borderRadius: RFValue(20),
    flex: 0.86
  },
  authorContainer: {
    flex: 0.1,
    flexDirection: 'row',
    marginVertical: 10,
  },
  authorImageContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: RFValue(35),
    height: RFValue(35),
    resizeMode: 'contain',
    borderRadius: 100,
  },
  authorNameContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  authorNameText: {
    color: 'white',
    fontSize: RFValue(18),
  },
  postImage: {
    resizeMode: 'contain',
    width: '95%',
    alignSelf: 'center',
    height: RFValue(250),
    flex: 0.7
  },
  captionContainer: {
    flex: 0.1,
    paddingLeft: 10,
    marginTop: 10,
  },
  captionText: {
    color: 'white',
    fontSize: RFValue(15),
  },
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFValue(10),
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#eb3948',
    borderRadius: RFValue(30),
  },
  likeText: {
    color: 'white',
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(25),
    marginLeft: RFValue(5),
  },
});
