import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { ParamList } from '@./data-navigation';

export function HomeScreen({ navigation }: NativeStackScreenProps<ParamList>) {
  return (
    <View>
      <Text>Welcome to home</Text>
    </View>
  );
}

export default HomeScreen;
