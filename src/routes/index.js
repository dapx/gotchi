
import * as React from 'react';
import { createStackNavigator } from 'react-navigation';

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
  Home: {
    screen: CharPage,
    navigationOptions: {
      title: 'Character Status',
    },
  },
});