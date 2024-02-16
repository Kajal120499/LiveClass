import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Dashboard = () => {
  return (
    <View style={styles.container}>
        <FlatList data={[1,1,1,1]} renderItem={({item,index})=>{
            return(
              <View style={{width:'100%',marginTop:20,}}>
                {index==0 &&(
                <View style={{width:'90%',backgroundColor:'#939393',height:150,alignSelf:'center',borderRadius:12}}></View>
                )}
                {index == 1 && <Text style={styles.txt}>Categories</Text>}
                {index == 1 && (
                           <FlatList style={{marginTop:15}} data={[1,2,3,4]} horizontal renderItem={(data1) =>{
                            return <View style={styles.secondFlat}></View>
                           }}/>
                       )}
                 {index == 2 && <Text style={styles.txt}>Trendy Item</Text>}
                 {index == 2 && (
                           <FlatList style={{marginTop:15}} data={[1,2,3,4]} horizontal renderItem={(data1) =>{
                            return <View style={styles.thirdFlat}></View> }}/>)}  

                  {index == 3 && <Text style={styles.txt}>New Arrival</Text>}
                 {index == 3 && (
                           <FlatList style={{marginVertical:15}} data={[1,2,3,4]} renderItem={(data1) =>{
                            return <View style={styles.fourthFlat}></View> }}/>)}                
              </View>
            )
        }}/>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    txt:{
        fontSize:20,
        fontWeight:'600',
        marginLeft:15,
        color:"#000"
    },
    secondFlat:{
        width:100,
        height:100,
        marginLeft:10,
        backgroundColor:'brown',
        marginTop:10,
        borderRadius:10
    },
    thirdFlat:{
        width:200,
        height:150,
        marginLeft:10,
        backgroundColor:'brown',
        marginTop:10,
        borderRadius:10
    },
    fourthFlat:{
        width:'94%',
        height:150,
        backgroundColor:'brown',
        marginTop:10,
        borderRadius:10,
        alignSelf:"center"
    }
})