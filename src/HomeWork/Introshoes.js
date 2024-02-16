import { FlatList, Image, StatusBar, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Images from '../Constants/Images'
import color from '../LinkdlnClass/src/utils/color'

const Introshoes = () => {
    const shoeDta = [
        {
            img: Images.shoe,
            nameOfshoe: 'Nike Air Max',
            price: '$ 180.00'
        },
        {
            img: Images.shoe5,
            colorHeart: true,
            nameOfshoe: 'Nike Air Max',
            price: '$ 180.00'
        },
        {
            img: Images.shoe3,
            nameOfshoe: 'Nike Air Max',
            price: '$ 180.00'
        },
        {
            img: Images.shoe4,
            nameOfshoe: 'Nike Air Max',
            price: '$ 180.00'
        },
    ]
    const shoeDtaa = [
        {
            data: "New Release",
            dataa:true,
        },
        {
            data:"Men"
         },
         {
            data:"Women"
         },
         {
            data:"Kid"
         },  
    ]
    const rendershoe = ({ item }) => {
        return (
            <View style={styles.mainView}>
                <View style={styles.listView}>
                    <View>
                        <Image source={item.colorHeart ? Images.fillheart : Images.heart} style={styles.iconInsideList} />
                    </View>
                    <Image source={item.img} style={styles.listshoe} />
                </View>

                <View style={{ flexDirection: 'row', marginHorizontal: 12 ,marginTop:5}}>
                    <Text style={[styles.commoncss, { flex: 1 }]}>{item.nameOfshoe}</Text>
                    <Image source={Images.adddd} style={{ width: 10, height: 10 }} />
                </View>
                {/* <Text style={[styles.commoncss, { textAlign: "right" }]}>{item.price}</Text> */}
            </View>
        )
    }

    const rendershoeUpper = ({ item }) => {
        return (
            <View style={item.dataa ? styles.viewUpperfii : styles.viewUpper}>
                <Text style={item.dataa ? styles.dataNamee : styles.dataName}>{item.data}</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.headeView}>
                <Image source={Images.drawer} style={styles.icon} />
                <Text style={styles.title}>Discover</Text>
                <Image source={Images.bag} style={styles.icon} />
            </View>

            <View style={styles.inputView}>
                <Image source={Images.search} style={[styles.icon, { tintColor: "gray" }]} />
                <TextInput placeholder='looking for shoes'
                    placeholderTextColor={'gray'}
                    style={styles.input} />
            </View>

            <View style={styles.bannerView}>
                <ImageBackground source={Images.bannershoe} imageStyle={{ borderRadius: 6 }}
                    style={styles.banner} resizeMode='stretch'>
                    <Text style={styles.upperImgTxt}>Summer</Text>
                    <Text style={styles.upperImgTxt}>Collection</Text>
                </ImageBackground>
            </View>
            
            <View style={{marginTop:10,height:40,marginHorizontal:20}}>
            <FlatList data={shoeDtaa}
                renderItem={rendershoeUpper} 
                horizontal
            />
            </View>
            

            <FlatList data={shoeDta} 
                      renderItem={rendershoe} 
                      numColumns={2}
                      style={{alignSelf:'center'}}
                      />

            <View style={{backgroundColor:"gray",height:50,width:'90%',borderRadius:18,marginBottom:20,flexDirection:"row",justifyContent:'space-evenly',alignSelf:"center",alignItems:"center"}}>
            <Image source={Images.home} style={styles.icon} />
            <Image source={Images.search} style={styles.icon} />
            <Image source={Images.add} style={styles.icon} />
            <Image source={Images.heart} style={styles.icon} />
            <Image source={Images.user} style={styles.icon} />
            </View>          

        </View>
    )
}

export default Introshoes

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    headeView: {
        width: '100%',
        flexDirection: "row",
        padding: 20,
        justifyContent: "space-between",
        backgroundColor: "#fff"
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
    inputView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        marginTop: 30,
        borderRadius: 8,
        alignSelf: 'center',
        width: '90%'
    },
    input: {
        width: '90%',
        color: '#424242',
    },
    banner: {
        height: 180,
        justifyContent: 'center'
    },
    bannerView: {
        width: '90%',
        alignSelf: "center",
        marginTop: 20,
    },
    upperImgTxt: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: "900",
        fontSize: 22
    },
    listView: {
        backgroundColor: "#E8E8E8",
        justifyContent: 'center',
        alignItems: 'center',
        height: 130,
        // marginLeft:10,
        width: '90%',
        borderRadius: 10
    },
    mainView: {
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
        height: 180,
        marginHorizontal:5,
        width: '45%',
        borderRadius: 10,
        marginTop:10
    },
    listshoe: {
        width: 120,
        height: 100,
        resizeMode: 'center'
    },
    iconInsideList: {
        width: 15,
        height: 15,
        position: 'absolute',
        left: 45,
    },
    commoncss: {
        color: "#000",
        fontWeight: '900',
        fontSize: 12,
        // textAlign:'right',
        // backgroundColor:'red'
    },
    viewUpper: {
        backgroundColor: '#E8E8E8',
        borderRadius: 15,
        justifyContent:'center',
        alignItems:"center",
        padding: 6,
        marginLeft:5  
    },
    viewUpperfii:{
        backgroundColor: '#000',
        borderRadius: 15,
        justifyContent:'center',
        alignItems:"center",
        padding: 6,
        marginLeft:5,
    },
    dataName: {
        color: '#000',
        fontSize:12,
        marginHorizontal:12
    },
    dataNamee: {
        color: '#fff',
        fontSize:12,
        marginHorizontal:12
    }
})