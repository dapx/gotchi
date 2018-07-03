import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { CharHeader } from '../components/CharHeader';
import SkillBar from '../components/SkillBar';
import { Character as CharacterObject } from '../modules/character';

export interface CharacterProps {
  character: CharacterObject,
}

export default class Character extends React.Component<CharacterProps, {}> {
  static navigationOptions = {
    title: 'Character Status'
  }

  render() {
    const { character } = this.props;
    return (
      <View style={styles.container}>
        <CharHeader
          name={character.name}
          image={character.image}
        />
        <View style={styles.skillsContainer}>
          <View style={styles.skillsTitle}>
            <Text style={styles.skillsTitleText}>
              {'Skills'}
            </Text>
          </View>
          <View style={styles.skillsContentBox}>
            <View style={styles.skillsContent}>
              <View style={styles.skill}>
                <SkillBar
                  label="Strength"
                  value={character.strength}
                  color="#e53935"
                />
              </View>
              <View style={styles.skill}>
                <SkillBar
                  label="Defense"
                  value={character.defense}
                  color="#1E88E5"
                />
              </View>
              <View style={styles.skill}>
                <SkillBar
                  label="Agility"
                  value={character.agility}
                  color="#FDD835"
                />
              </View>
              <View style={styles.skill}>
                <SkillBar
                  label="Intelligence"
                  value={character.intelligence}
                  color="#FB8C00"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  skillsContainer: {
    flex: 2,
    margin: 10,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  skillsTitle: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  skillsTitleText: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 10,
  },
  skillsContentBox: { flex: 10 },
  skillsContent: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 20,
    borderColor: '#ddd',
    justifyContent: 'space-around',
  },
  skill: {
    margin: 10,
    minWidth: 100,
    borderColor: '#ddd',
    alignItems: 'flex-start',
  },
  skillName: {
    color: '#ddd'
  },
});
