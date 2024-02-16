import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PracticeWelcome from '../Dec25/PracticeWelcome'
import Jan25Navigator from './Jan25Navigator'

const Main = () => {
  return (
    <Jan25Navigator/>
    
  )
}

export default Main

const styles = StyleSheet.create({})