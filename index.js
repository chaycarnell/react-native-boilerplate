import './src/translations';

import { AppRegistry } from 'react-native';

import { displayName as appName } from './app.json';
import App from './src/App';

AppRegistry.registerComponent(appName, () => App);
