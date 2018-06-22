/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { CharHeader } from './components/CharHeader';
import { StatusBar } from './components/StatusBar';

const character = {
  name: 'Orclord',
  image: 'https://opengameart.org/sites/default/files/Orc_ani_run008.png',
  strength: 0.9,
  defense: 0.7,
  agility: 0.2,
  intelligence: 0.4,
}

export default class App extends React.Component {
  render() {
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
                <StatusBar
                  label="Strength"
                  percentage={character.strength}
                  color="#e53935"
                />
              </View>
              <View style={styles.skill}>
                <StatusBar
                  label="Defense"
                  percentage={character.defense}
                  color="#1E88E5"
                />
              </View>
              <View style={styles.skill}>
                <StatusBar
                  label="Agility"
                  percentage={character.agility}
                  color="#FDD835"
                />
              </View>
              <View style={styles.skill}>
                <StatusBar
                  label="Intelligence"
                  percentage={character.intelligence}
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
    textAlign: 'center',
    textAlignVertical: 'center',
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
