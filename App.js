import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <Image source={require('./assets/splash2.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
