import { AppRegistry } from 'react-native';

import App from './app/app';
import './styles.css';

AppRegistry.registerComponent('Web', () => App);
AppRegistry.runApplication('Web', {
  rootTag: document.querySelector('#root'),
});
