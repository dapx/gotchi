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
import CharacterProvider, { withCharacter } from './modules/character';

const CharacterPage = withCharacter(Character);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CharacterProvider>
          <CharacterPage />
        </CharacterProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
