import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HistoryScreen from '../screens/bottomtabs/HistoryScreen';
import QrScanScreen from '../screens/bottomtabs/QrScanScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {routes} from './routes';
const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => (
  <Tab.Navigator
    initialRouteName="QrScan"
    activeColor="#fff"
    barStyle={styles.barStyle}>
    <Tab.Screen
      options={{
        tabBarLabel: 'QR Scan',
        tabBarIcon: ({color}) => <Icon name="qrcode" color={color} size={24} />,
      }}
      name={routes.QR_SCAN}
      component={QrScanScreen}
    />
    <Tab.Screen
      options={{
        tabBarLabel: 'History',
        tabBarIcon: ({color}) => (
          <Icon name="history" color={color} size={24} />
        ),
      }}
      name={routes.HISTORY}
      component={HistoryScreen}
    />
  </Tab.Navigator>
);
const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: '#2c3e50',
  },
});
export default BottomTab;
