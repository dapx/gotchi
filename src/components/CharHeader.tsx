import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CharImage } from './CharImage';

export interface Props {
  name?: string;
  image?: string;
}

export class CharHeader extends React.Component<Props, {}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.content, { flex: 5 }]}>
          <CharImage
            uri={this.props.image}
            style={{ width: 10, height: 200 }}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>
            {this.props.name}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ddd',
    margin: 10,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
  },
});
