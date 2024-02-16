import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React, { useRef, useState } from 'react'

const PracticeWelcome = ({navigation}) => {
    const [data, setData] = useState([1, 1, 1, 1, 1])
    const [currentIndex, setCurrentIndex] = useState(0)
    const ref = useRef();
    return (
        <View style={{ flex: 1 }}>
            <View>
                <FlatList data={data}
                    horizontal
                    ref={ref}
                    onScroll={(e) => {
                        // console.log(e.nativeEvent.contentOffset.x)
                        const ind = (e.nativeEvent.contentOffset.x / Dimensions.get("window").width).toFixed(0)
                        // console.warn(ind)
                        setCurrentIndex(ind)
                    }}
                    style={{ marginTop: 50 }}
                    pagingEnabled
                    renderItem={(x) => {
                        const { item, index } = x;
                        // console.warn(x)
                        return (
                            <View style={[styles.mainView, {}]}>
                                <View style={{ width: '90%', height: "100%", backgroundColor: x.index % 2 == 0 ? 'red' : 'blue' }}></View>
                            </View>
                        )
                    }} />
            </View>

            <View style={{ flexDirection: 'row', alignSelf: "center", marginTop: 30 }}>
                {
                    data.map((item, index) => {
                        return (
                            <View style={{
                                width: 5, height: 5, borderRadius: 2.5, marginLeft: 10,
                                backgroundColor: currentIndex == index ? "red" : "#000"
                            }}>
                            </View>
                        )
                    })
                }
            </View>

            <View style={{
                width: '100%',
                position: "absolute", bottom: 10,
                justifyContent: 'space-evenly',
                alignItems: "center",
                flexDirection: "row"
            }}>
                {
                    currentIndex > 0 && (
                        <TouchableOpacity style={{ width: 100, height: 50, borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => {
                                ref.current.scrollToIndex({
                                    animated: true,
                                    index: parseInt(currentIndex) - 1,
                                });
                                setCurrentIndex(currentIndex - 1)
                            }}>
                            <Text style={{ color: "#000" }}>Previous</Text>
                        </TouchableOpacity>
                    )
                }

                {
                    currentIndex < data.length - 1 && (
                        <TouchableOpacity style={{ width: 100, height: 50, borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => {
                                ref.current.scrollToIndex({
                                    animated: true,
                                    index: parseInt(currentIndex) + 1,
                                });
                                setCurrentIndex(currentIndex + 1)
                            }}>
                            <Text style={{ color: "#000" }}>Next</Text>
                        </TouchableOpacity>
                    )
                }

                {
                    currentIndex == data.length-1 &&(
                        <TouchableOpacity style={{ width: 100, height: 50, borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => {navigation.navigate("Login")}}>
                        <Text style={{ color: "#000" }}>Go To Login</Text>
                    </TouchableOpacity>
                    )
                }



            </View>
        </View>

    )
}

export default PracticeWelcome

const styles = StyleSheet.create({
    mainView: {
        width: Dimensions.get('window').width,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    }
})