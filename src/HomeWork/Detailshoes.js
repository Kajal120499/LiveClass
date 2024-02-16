import { Dimensions, FlatList, Image,TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import Images from '../Constants/Images'

const Detailshoes = () => {
  const listshoe=[
    {img:Images.shoeGreen},
    {img:Images.shoeGreen},
    {img:Images.shoeGreen},
    {img:Images.shoeGreen},
    {img:Images.shoeGreen}
  ]

  const shoedetail=[
    {circle:'black',num:41,selectsize:true},
    {circle:'pink',num:41},
    {circle:'yellow',tick:true,num:43},
    {circle:'blue',num:44},
    {circle:'purple',num:45},
    {num:46}
  ]
  const [currentIndex, setCurrentIndex] = useState(0)


  const renderLit=({item})=>{
    return(
          <View style={styles.imgView}>
            <View style={styles.imggg}>
            <Image source={item.img} style={{width:200,height:200}}/>
            </View>
          </View>
    )
  }

  const renderr=({item})=>{
    return(
          <View style={[styles.colorstyle,{backgroundColor:item.circle}]}>
            {
              item.tick ? <Image source={Images.tick} style={{width:14,height:14}}/> : null
            }
          </View>
    )
  }

  const renderrsize=({item})=>{
    return(
          <View style={item.selectsize ? styles.colorstyle : styles.colorstyle1}>
            <Text style={item.selectsize ? styles.txt1 : styles.txt}>{item.num}</Text>
          </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={{}}>
      <View style={styles.headerView}>
        <Image source={Images.back} style={styles.icon} />
        <Text style={styles.title}>OrderDetail</Text>
        <Image source={Images.bag} style={styles.icon} />
      </View>

      <View>
        <FlatList data={listshoe} 
                  onScroll={(e)=>{
                    const ind = (e.nativeEvent.contentOffset.x / Dimensions.get('window').width).toFixed(0)
                    // console.warn(ind)
                    setCurrentIndex(ind)
                  }}
                  horizontal pagingEnabled
                  renderItem={renderLit}/>
      </View>
      </View>

      <View style={{flexDirection:"row",alignSelf:"center"}}>
        {
          listshoe.map((item,index)=>{
            return(
              <View style={[styles.indicatorView,{backgroundColor:currentIndex == index ? 'black':'gray'}]}>
                </View>
            )
          })
        }
      </View>

      <View style={styles.secondView}>

          <View style={[styles.topView,{marginTop:20}]}>
            <Text style={styles.common}>Nike AIr Max</Text>
            <Text style={styles.common}>$ 180.00</Text>
          </View>

          <View style={[styles.topView,{marginTop:5}]}>
            <Text style={styles.txt}>Mens shoe </Text>
            <Image source={Images.fillheart} style={{width:15,height:15}} />
          </View>

          <Text style={[styles.common,{fontSize:15,marginLeft:10,marginTop:8}]}>Color</Text>
         
          <View>
          <FlatList data={shoedetail} renderItem={renderr} horizontal/>
          </View>
         
          

          <Text style={[styles.common,{fontSize:15,marginLeft:10,marginTop:18}]}>Select a size<Text style={[styles.txt,{fontWeight:300}]}>  view size guide</Text></Text>
          <View>
          <FlatList data={shoedetail} renderItem={renderrsize} horizontal/>
          </View>

          <View style={{width:'100%',borderWidth:1,borderColor:'lightgray',marginTop:20}}></View>

          <Text style={[styles.common,{fontSize:15,marginLeft:10,marginTop:8}]}>Description</Text>
          <Text style={[{fontSize:12,marginLeft:10,marginTop:8,color:'#000',fontWeight:'500'}]}>Feather you've errol bonnet bred orbs tell with.Who goblet owl trace bott's....<Text style={{fontWeight:"800"}}>Read more</Text></Text>

          <TouchableOpacity style={styles.btn}>
           <Text style={styles.btnTxt}>Add to Cart</Text>
          </TouchableOpacity>

      </View>

    </View>
  )
}

export default Detailshoes

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8E8E8",
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "red",
    // height: 50,
    padding:20
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 8,
    padding: 10
},
title: {
    color: "#000",
    fontSize: 20,
    fontWeight: '900'
},
imgView:{
  justifyContent:"center",
  alignItems:"center",
  width:Dimensions.get('window').width,
  height:200,
},
imggg:{
  // width:'100%',
  // height:'100%',
  justifyContent:"center",
  alignItems:"center",
  // backgroundColor:"red"
},
indicatorView:{
  width:5,
  height:5,
  borderRadius:2.5,
  backgroundColor:'#000',
  marginLeft:10
},
secondView:{
  backgroundColor:'#fff',
  borderTopRightRadius:40,
  borderTopLeftRadius:40,
  flex:2,
  // backgroundColor:"green",
  marginTop:15
},
topView:{
  flexDirection:"row",
  // backgroundColor:"red",
  justifyContent:"space-between",
  marginHorizontal:10,
},
common:{
  fontSize:18,
  fontWeight:'900',
  color:"#000"
},
txt:{
  fontSize:12,
  // fontWeight:'900',
  color:"gray"
},
txt1:{
  fontSize:12,
  // fontWeight:'900',
  color:"#fff"
},
colorstyle:{
  width:30,
  height:30,
  borderRadius:15,
  marginTop:10,
  backgroundColor:"#000",
  marginLeft:10,
  justifyContent:'center',
  alignItems:"center",
  borderColor:'#000',borderWidth:1
},
colorstyle1:{
  width:30,
  height:30,
  borderRadius:15,
  marginTop:10,
  backgroundColor:"#fff",
  marginLeft:10,
  justifyContent:'center',
  alignItems:"center",
  borderColor:'#000',borderWidth:1
},
btn:{
  backgroundColor:"#000",
  width:"80%",
  height:50,
  alignSelf:"center",
  justifyContent:"center",
  alignItems:'center',
  borderRadius:10,
  marginTop:80,
  marginBottom:10
},
btnTxt:{
  fontSize: 12,
  color: '#fff',  }
})