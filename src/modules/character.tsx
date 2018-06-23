import * as React from 'react';

const character = {
  name: 'Orclord',
  image: 'https://opengameart.org/sites/default/files/Orc_ani_run008.png',
  strength: 0.9,
  defense: 0.7,
  agility: 0.2,
  intelligence: 0.4,
}

const { Provider, Consumer } = React.createContext({ character });

export interface Character {
  name: string,
  image: string,
  strength: number,
  defense: number,
  agility: number,
  intelligence: number,
}

interface CharacterState {
  character: Character,
}

export default class CharacterProvider extends React.PureComponent<any, CharacterState> {
  state = {
    character
  }

  getHandlers() {
    return {};
  }

  render() {
    const context = {
      ...this.getHandlers(),
      ...this.state
    };
    return <Provider value={context}>{this.props.children}</Provider>;
  }
}

export function withCharacter<P extends Object>(Component: React.ComponentType<P & CharacterState>) {
  return function CharComponent(props: P) {
    return (
      <Consumer>
        { ({ character }: CharacterState) => <Component {...props} character={character} /> }
      </Consumer>
    )
  }

}