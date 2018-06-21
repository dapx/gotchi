import { AppRegistry } from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('gotchi', () => App);
AppRegistry.runApplication('gotchi', {
  rootTag: document.getElementById("root")
});
