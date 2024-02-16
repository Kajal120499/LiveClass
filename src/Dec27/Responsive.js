import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const {width,height} = Dimensions.get('window')
const Responsive = () => {
  return (
    <View style={{width:width-width/20,
                  height:height-height/3,
                  backgroundColor:'purple',
                  alignSelf:'center'}}>
    <Text>Responsive</Text>
    </View>
  )
}

export default Responsive

const styles = StyleSheet.create({

})


