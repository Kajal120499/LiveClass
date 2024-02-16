import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import Images from '../Constants/Images'

const Welcome = ({ navigation }) => {
  // const [data, setData] = useState
  // ([1,1,1,1,1]) 

  const data = [
    {
      img: Images.Banner1,
      title: "Optimize Field Management Check-in/Check-out",
      subTitle: "Facilitate both manual and automatic check-in/out processes, with comprehensive reporting and field force tracking for greater operational control.",
      colorkey: 'red'
    },
    {
      img: Images.Banner2,
      title: "Convert more with Revolutionized Lead Management",
      subTitle: "Add leads in seconds, record voice notes, and efficiently follow up with students, turning every inquiry into an opportunity for enrollment.",
      colorkey: 'yellow'
    },
    {
      img: Images.Banner3,
      title: "Enhance Student Communication with In-App Calling",
      subTitle: "Make and track calls directly from the app, integrating seamlessly into your productivity reports for unmatched communication efficiency.",
      colorkey: 'green'
    },
  ]
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef()

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View>
        <FlatList data={data}
          ref={ref}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 50 }}
          onScroll={(e) => {
            // console.log(e.nativeEvent.contentOffset.x)
            const ind = (e.nativeEvent.contentOffset.x / Dimensions.get('window').width).toFixed(0)
            // console.warn(ind)
            setCurrentIndex(ind)
          }}
          renderItem={({ item, index }) => {
            // const[item,index]=x;
            // console.log(x)
            return (
              <View style={{
                width: Dimensions.get('window').width,
                height: 600, justifyContent: 'center', alignItems: 'center',
              }}>

                <View style={{
                  width: '90%', height: '100%', marginTop: 30
                  // backgroundColor: x.index % 2 == 0 ? 'pink' : 'blue'
                  // backgroundColor:"red"
                }}>
                  <Image source={item.img} style={{ width: '80%', height: 250, resizeMode: "center", alignSelf: "center" }} />
                  <Text style={{ color: "blue", fontWeight: "700", marginTop: 50, fontSize: 24 }}>{item.title}</Text>
                  <View style={{}}>
                    <Text style={{ color: "#000", fontWeight: "600", marginTop: 30, fontSize: 14, lineHeight: 20 }}>{item.subTitle}</Text>
                  </View>
                </View>
              </View>
            )
          }}
        />
      </View>

      <View style={{
        flex: 1,
        height: 70,
        marginTop: 5,
        // backgroundColor: "lightgrey",
        padding: 30,
        flexDirection: 'row',
      }}>
        <View style={{
          flex: 2,
          alignItems: 'center',
          //  backgroundColor:"red",
          flexDirection: "row"

        }}>
          {
            data.map((item, index) => {
              return (
                <View style={{
                  
                  width: 10, height: 10,
                  // backgroundColor: currentIndex == index ? 'red' : 'lightgray',
                  backgroundColor: currentIndex == index ? item.colorkey : 'lightgray',
                  borderRadius: 10, marginLeft: 10, justifyContent: "center"
                }}>
                  <Text style={{ color: "red", fontSize: 20 }}>{item.colorkey}</Text>
                  {/* {
                  currentIndex == index &&(
                    <View style={{
                        backgroundColor: currentIndex == index ? item.colorkey : 'lightgray',
                        width: 10, height: 10,borderRadius: 5,
                    }}>
                    </View>
                  )
                } */}
                  {/* {
                  currentIndex == 0 &&(
                    <View style={{
                        backgroundColor: currentIndex == index ? 'red' : 'lightgray',
                        width: 10, height: 10,borderRadius: 5,
                    }}>
                    </View>
                  )
                }
                 {
                  currentIndex == 1 &&(
                    <View style={{
                        backgroundColor: currentIndex == index ? 'yellow' : 'lightgray',
                        width: 10, height: 10,borderRadius: 5,
                    }}>
                    </View>
                  )
                }
                 {
                  currentIndex == 2 &&(
                    <View style={{
                        backgroundColor: currentIndex == index ? 'green' : 'lightgray',
                        width: 10, height: 10,borderRadius: 5,
                    }}>
                    </View>
                  )
                } */}
                </View>
              )
            })
          }
        </View>

        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 40
        }}>
          <TouchableOpacity style={styles.btn} onPress={() => {
            ref.current.scrollToIndex({
              animated: true, index: parseInt(currentIndex) - 1
            });
            setCurrentIndex(currentIndex - 1)
          }}>
            <Text style={styles.txt}>Get Started</Text>
            <Image source={Images.arrow} style={{ width: 25, height: 25, tintColor: '#fff', marginLeft: 20 }} />
          </TouchableOpacity>
        </View>
      </View>

      {/* <View style={styles.btnView}>

        {
          currentIndex > 0 && (
            <TouchableOpacity style={styles.btn} onPress={()=>{ 
              ref.current.scrollToIndex({animated:true,index:parseInt(currentIndex)-1
              });
              setCurrentIndex(currentIndex-1) 
              }}>
              <Text style={styles.txt}>Previous</Text>
            </TouchableOpacity>
          )}

        {
          currentIndex == data.length - 1 && (
            <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate("InputTextDemo")}}>              
              <Text style={styles.txt}>Go to Home</Text>
            </TouchableOpacity>
          )}

{
          currentIndex < data.length - 1 && (
            <TouchableOpacity style={styles.btn} onPress={()=>{ 
              ref.current.scrollToIndex({animated:true,index:parseInt(currentIndex)+1
              });
              setCurrentIndex(currentIndex+1) 
              }}>              
              <Text style={styles.txt}>Next</Text>
            </TouchableOpacity>
          )}


      </View> */}

    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  btnView: {
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row'
  },
  btn: {
    width: 180,
    height: 50,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "blue",
    borderRadius: 30,
    flexDirection: "row"
  },
  txt: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 20
  }
})