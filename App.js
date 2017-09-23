import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 300, height: 300 }}
          source={{ uri: 'https://imgflip.com/s/meme/Philosoraptor.jpg' }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('hey!')}>
          <Text style={styles.buttonText}>take a picture!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
