import * as React from 'react';
import * as Progress from 'react-native-progress';
import { StyleSheet, View, Text } from 'react-native';

export interface SkillBarProps{
  label: string,
  value: number,
  total?: number,
  color?: string,
  labelColor?: string
}

export default class SkillBar extends React.Component<SkillBarProps> {
    /**
     * Calculate the percentage from a value.
     * @param value value to calculate percentage
     * @param total a value that represents total percentage
     */
    getPercentage(value: number, total:number):number {
      return (value / total);
    }

    render(){
        const {
          color = "#007aff",
          labelColor = "black",
          label,
          value,
          total = 1,
        } = this.props;
        const percentage = this.getPercentage(value, total);
        return (
            <View style={styles.container}>
              <Text style={[styles.title, { color: labelColor }]}>
                {label}
              </Text>
              <Progress.Bar
                progress={percentage}
                color={color}
                height={8}
              />
              <Text style={[styles.value, { color: labelColor }]}>
                {value}
              </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    maxHeight: 70,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10
  },
  value: {
    textAlign: 'center',
    fontSize: 10
  }
});
