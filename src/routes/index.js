
import * as React from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from '../scenes/Login';
import Character from '../scenes/Character';
import CharacterProvider, { withCharacter } from '../modules/character';

const CharacterPage = withCharacter(Character);

const CharPage = () => {
  return (
    <CharacterProvider>
      <CharacterPage />
    </CharacterProvider>
  );
}

export default createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    }
  },
  Home: {
    screen: CharPage,
  },
});