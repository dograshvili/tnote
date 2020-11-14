/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/components/App';
import {name as appName} from './app.json';
import AsyncStorage from '@react-native-community/async-storage';
import CustomHelper from './src/static/CustomHelper';

initStorageTheme = async () => {}

initStorageNotes = async () => {}

AppRegistry.registerComponent(appName, () => {
    initStorageTheme();
    initStorageNotes();
    return App;
});
