import * as React from 'react';
import * as Progress from 'react-native-progress';
import { View, Text } from 'react-native';

export interface StatusBarProps{
    label?: string,
    percentage?: number,
    color?: string,
    labelColor?: string
}

export class StatusBar extends React.Component<StatusBarProps>{
    render(){
        const {
            color = "#007aff", 
            label = "",
            labelColor = "black", 
            percentage = 0
        } = this.props;

        return (
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text style={{color: labelColor}}>{label}</Text>
            <Progress.Bar progress={percentage} color={color} height={8}/>
            </View>
        )
    }
}