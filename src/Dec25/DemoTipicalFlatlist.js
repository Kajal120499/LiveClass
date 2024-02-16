import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DemoTipicalFlatlist = () => {
    return (
        <View style={styles.container}>

            <View style={styles.firstView} />

            <ScrollView style={styles.secondView} horizontal={true}>
                <View style={{flexDirection:"row"}}>
                <Text style={{color:"white",fontSize:14,flex:1}}>yyyy</Text>
                <Text style={{color:"white",fontSize:14,justifyContent:'flex-end'}}>yyyy</Text>
                </View>
                <Text style={{color:"white",fontSize:14}}>dddd</Text>
                <Text style={{color:"white",fontSize:14}}>eeee</Text>
                <Text style={{color:"white",fontSize:14}}>bbb</Text>
                <Text style={{color:"white",fontSize:14}}>qqq</Text>
                <Text style={{color:"white",fontSize:14}}>nnnn</Text>
                <Text style={{color:"white",fontSize:14}}>aaa</Text>
                <Text style={{color:"white",fontSize:14}}>mmmm</Text>
                <Text style={{color:"white",fontSize:14}}>nnnn</Text>
                <Text style={{color:"white",fontSize:14}}>aaa</Text>
                <Text style={{color:"white",fontSize:14}}>mmmm</Text> <Text style={{color:"white",fontSize:14}}>nnnn</Text>
                <Text style={{color:"white",fontSize:14}}>aaa</Text>
                <Text style={{color:"white",fontSize:14}}>mmmm</Text> <Text style={{color:"white",fontSize:14}}>nnnn</Text>
                <Text style={{color:"white",fontSize:14}}>aaa</Text>
                <Text style={{color:"white",fontSize:14}}>mmmm</Text>
            </ScrollView>
        </View>
    )
}

export default DemoTipicalFlatlist

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        flexDirection:'row'
    },
    firstView: {
        // width: "30%",
        flex: 0.5,
        height: '100%',
        backgroundColor: "purple"
    },
    secondView: {
        flex: 3,
        backgroundColor: "blue",
        // flexDirection:'row',
        margin:10
        // justifyContent:'space-around'
    }

})