import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PracticeWelcome from '../Dec25/PracticeWelcome'
import Responsive from '../Dec27/Responsive'
import InputFieldValidate from '../Dec26/InputFieldValidate'

const Stack=createNativeStackNavigator()

const Jan25Navigator = () => {
  return (
   <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Responsive" component={Responsive} />*/}
        <Stack.Screen name="InputFieldValidate" component={InputFieldValidate} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Jan25Navigator

const styles = StyleSheet.create({})