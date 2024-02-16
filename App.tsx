// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './src/Dec25/Welcome';
import PracticeWelcome from './src/Dec25/PracticeWelcome';
import InputFieldValidate from './src/Dec26/InputFieldValidate';
import Otp from './src/Dec26/Otp';
import Dashboard from './src/Dec25/Dashboard';
import Responsive from './src/Dec27/Responsive';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Responsive" component={Responsive} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;