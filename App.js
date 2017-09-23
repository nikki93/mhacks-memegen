import Expo from 'expo';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class App extends React.Component {
  state = {
    imgUri: 'https://imgflip.com/s/meme/Philosoraptor.jpg',
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={{ width: 300, height: 300 }}
            source={{ uri: this.state.imgUri }}
          />
          <Text style={[styles.text, { top: 5 }]}>
            hello, world
          </Text>
          <Text style={[styles.text, { bottom: 5 }]}>
            hello, world
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={this._onTakePic}>
          <Text style={styles.buttonText}>take a pic!</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _onTakePic = async () => {
    const {
      cancelled,
      uri,
    } = await Expo.ImagePicker.launchCameraAsync({});
    if (!cancelled) {
      this.setState({ imgUri: uri });
    }
  }
}

const styles = StyleSheet.create({
  text: {
    position: 'absolute',
    left: 5, right: 5,
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: '900',
    textAlign: 'center',
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  buttonText: {
    fontSize: 21,
  },
  button: {
    padding: 5,
    margin: 5,
    backgroundColor: '#ddd',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
