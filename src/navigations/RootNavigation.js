import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DataScanDetails from '../screens/DataScanDetailsScreen';
import {routes} from './routes';
import BottomTabs from './BottomTabs';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../utils/navigation';
const Stack = createNativeStackNavigator();
const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={routes.BOTTOM_TABS}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={routes.BOTTOM_TABS} component={BottomTabs} />
        <Stack.Screen
          name={routes.DATA_SCAN_DETAILS}
          component={DataScanDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigation;
