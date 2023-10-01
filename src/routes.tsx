import React from 'react';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import { List } from './pages/List';
import { Details } from './pages/Details';

export type StackParamList = {
  List: undefined;
  Details: { data: Movie };
};

export type NavigationProps = NativeStackNavigationProp<StackParamList>;

const Stack = createNativeStackNavigator<StackParamList>();

export function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000000',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontSize: 20,
        },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
