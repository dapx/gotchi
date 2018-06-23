/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import * as React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Character from './scenes/Character';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Character />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
