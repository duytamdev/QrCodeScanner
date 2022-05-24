import {Dimensions} from 'react-native';

export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const typeScan = {
  WIFI: 'WIFI',
  EMAIL: 'EMAIL',
  TEXT: 'TEXT',
  URL: 'URL',
  SMS: 'SMS',
};
export const HISTORIES_KEY = 'HISTORIES_KEY';
