

import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Images from '../Constants/Images';

const Dashboardshoes = () => {
  return (
    <ImageBackground
      source={Images.bannershoe}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.introText}>
          <Text style={styles.title}>Follow Latest</Text>
          <Text style={styles.title}>Style Shoes</Text>
          <Text style={styles.description}>find your perfect pair of shoes with ease</Text>

          <TouchableOpacity style={styles.btn}>
           <Text style={styles.btnTxt}>Get Started</Text>
          </TouchableOpacity>
        </View>
       
       
      </View>

     
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  introText: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    // backgroundColor:"red"
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: 'white',
    textAlign: 'justify',
    // width:'60%'
  },
  btn:{
    backgroundColor:"#fff",
    width:"80%",
    height:50,
    alignSelf:"center",
    justifyContent:"center",
    alignItems:'center',
    borderRadius:10,
    marginTop:20,
    marginBottom:20
  },
  btnTxt:{
    fontSize: 12,
    color: '#000',  }
});

export default Dashboardshoes;
