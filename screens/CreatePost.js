import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import AppLoading from 'expo-app-loading';
import { RFValue } from 'react-native-responsive-fontsize';
import DropDownPicker from 'react-native-dropdown-picker';

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewImage: 'image_1',
      dropdownHeight: 40,
    };
  }

  render() {
    let preview_images = {
      image_1: require('../assets/image_1.jpg'),
      image_2: require('../assets/image_2.jpg'),
      image_3: require('../assets/image_3.jpg'),
      image_4: require('../assets/image_4.jpg'),
      image_5: require('../assets/image_5.jpg'),
      image_6: require('../assets/image_6.jpg'),
      image_7: require('../assets/image_7.jpg'),
    };
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
        <Image
          source={preview_images[this.state.previewImage]}
          style={styles.previewImage}
        />
        <View style={{ height: RFValue(this.state.dropdownHeight) }}>
          <DropDownPicker
            items={[
              { label: 'Image 1', value: 'image_1' },
              { label: 'Image 2', value: 'image_2' },
              { label: 'Image 3', value: 'image_3' },
              { label: 'Image 4', value: 'image_4' },
              { label: 'Image 5', value: 'image_5' },
            ]}
            defaultValue={this.state.previewImage}
            open={this.state.dropdownHeight === 170}
            onOpen={() => {
              this.setState({
                dropdownHeight: 170,
              });
            }}
            onClose={() => {
              this.setState({
                dropdownHeight: 40,
              });
            }}
            style={{
              backgroundColor: '#d0a0b0',
              borderWidth: 1,
              borderColor: 'white',
              marginBottom: RFValue(25),
              width: '95%',
              alignSelf: 'center',
            }}
            textStyle={{
              color: this.state.dropdownHeight === 170 ? 'black' : 'white',
            }}
            onSelectItem={(item) => this.setState({ previewImage: item.value })}
          />
        </View>
        <ScrollView>
          <TextInput
            style={styles.inputFont}
            onChangeText={(caption) => this.setState({ caption })}
            placeholder={'Caption'}
            placeholderTextColor={'white'}
            multiline={true}
            numberOfLines={3}
          />
        </ScrollView>
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
    flex: 0.2,
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
  previewImage: {
    width: '95%',
    height: RFValue(250),
    alignSelf: 'center',
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: 'contain',
    flex: 0.5,
  },
  inputFont: {
    borderColor: 'white',
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    marginTop: RFValue(25),
    color: 'white',
    fontFamily: 'Bubblegum-Sans',
    width: '95%',
    alignSelf: 'center',
  },
});
