import { AppRoot } from '@./feat-app-root';
import { AppRegistry } from 'react-native';

AppRegistry.registerComponent('Web', () => AppRoot);
AppRegistry.runApplication('Web', {
  rootTag: document.querySelector('#root'),
});
