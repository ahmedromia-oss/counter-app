import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import 'react-native-reanimated';
import ModalScreen from './modal';

// Import your screens

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen 
          name="modal" 
          component={ModalScreen}
          options={{ 
            presentation: 'modal', 
            title: 'Modal' 
          }} 
        />
      </Stack.Navigator>
  );
}