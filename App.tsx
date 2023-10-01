import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DataProvider } from './src/contexts/DataContext';
import { Routes } from './src/routes';

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </DataProvider>
  );
}
