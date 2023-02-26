import { HomeScreen } from '@./feat-home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ParamList, Screen, linking } from '@./data-navigation';

const Stack = createNativeStackNavigator<ParamList>();

export function RootNavigator() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name={Screen.HOME} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
