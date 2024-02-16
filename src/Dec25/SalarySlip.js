import { StyleSheet, Text, View, Image,FlatList, StatusBar } from 'react-native'
import React from 'react'
import Images from '../Constants/Images'

const SalarySlip = () => {
    const dataList=[
        {
            time:"Sunday, Nov 26  •  11.13 AM",
            msg:"A/c XX1604 debited INR 1200.00 Dt 26-11-23 11:13:05 thru Up1:224202261726.Bal INR 3631.76 Not u ? Fwd this SMS to 9264092640 to block UPI.Download PNB ONE-PNB"
        },
        {
            time:"Thursday, Nov 30 • 1:25 PM",
            msg:"Ac XXXXXXXX1604 Credited With Rs 32000.00,30-Nov-23 13:25:05 thru NEFT from ABIRAS SOFTECH. Aval 35631.76 CR Helpline 18001802222-PNB ONE-PNB"
        },
        {
            time:"Monday, Dec 11  •  5.13 PM",
            msg:"A/c XX1604 debited INR 11000.00 Dt 11-12-23 17:13:13 thru Up1:224202261726.Bal INR 24631.76 Not u?Fwd this SMS to 9264092640 to block UPI.Download PNB ONE-PNB"
        },
        {
            time:"Monday, Dec 25  •  8.13 PM",
            msg:"A/c XX1604 debited INR 6000.00 Dt 25-12-23 20:13:46 thru Up1:224202261726.Bal INR 18631.76 Not u?Fwd this SMS to 9264092640 to block UPI.Download PNB ONE-PNB"
        },
        {
            time:"Tuesday, Dec 26  •  10.16 AM",
            msg:"A/c XX1604 debited INR 950.00 Dt 26-12-23 10:16:46 thru Up1:224202261726.Bal INR 17681.76 Not u?Fwd this SMS to 9264092640 to block UPI.Download PNB ONE-PNB"
        },
        {
            time:"Sunday, Dec 31  •  4.13 PM",
            msg:"Ac XXXXXXXX1604 Credited With Rs 30933.33,30-Dec-23 16:13:19 thru NEFT from ABIRAS SOFTECH. Aval 48615.09 CR Helpline 18001802222-PNB ONE-PNB"
        },
        {
            time:"Monday, Jan 8  •  11.13 AM",
            msg:"A/c XX1604 debited INR 25000.00 Dt 8-Jan-24 11:13:55 thru Up1:224202261726.Bal INR 23615.09 Not u?Fwd this SMS to 9264092640 to block UPI.Download PNB ONE-PNB"
        },
    ]

    const renderList=({item})=>{
        return(
            <View>
            <View style={styles.listOfTime}>
               <Text style={styles.time}>{item.time}</Text>
            </View>
            <View style={{flexDirection:'row',marginHorizontal:12,marginLeft:12}}>
            <Image source={Images.human} style={{width:35,height:35,marginTop:80}}/>
            <View style={styles.msgView}>
                <Text style={{color:'#fff',fontSize:14}}>{item.msg}</Text>
            </View>
            </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#00A36C'}/>
            <View style={styles.headerView}>
            <View style={[styles.viewww]}>
                <Image source={Images.backk} style={styles.icon} />
                <Text style={[styles.bankName,{marginLeft:20}]}>AD-PNBSMS</Text>
                </View>
                <View style={styles.viewww}>
                <Image source={Images.search} style={[styles.icon,{}]} />
                <Image source={Images.dots} style={[styles.icon,{marginLeft:20}]} />
                </View>
            </View>

            <FlatList data={dataList} renderItem={renderList}showsVerticalScrollIndicator={false} />

            <View style={styles.bottomMsg}>
            <Text style={styles.msgInfo}>Can't reply to this short code</Text>
            <Text style={{fontSize:15,color:"#0047AB",fontWeight:"900"}}>Learn more</Text>
            </View>
        </View>
    )
}

export default SalarySlip

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#28282B"
    },
    headerView: {
        backgroundColor: "#28282B",
        height: 40,
        // elevation: 10,
        flexDirection: 'row',
        marginTop:10,
        // alignItems: "center",
        justifyContent: "space-between"
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: '#fff',
        marginLeft:10
    },
    bankName: {
        color: "#fff",
        fontSize:16
    },
    viewww:{
        flexDirection:'row',
        marginRight:10
    },
    listOfTime:{
        // backgroundColor:"red",
        alignItems:'center',
        justifyContent:'center',
        height:30,
        marginTop:15
    },
    time:{
        color:"#fff",
        fontSize:10
    },
    msgView:{
        backgroundColor:"blue",
        width:"80%",
        marginLeft:15,
        padding:12,
        // height:100,
        alignSelf:"center",
        borderRadius:10,
        backgroundColor: "#353935",
        marginTop:4
    },
    bottomMsg:{
        position:"absolute",
        bottom:8,
        backgroundColor:'#fff',
        width:'95%',
        height:50,
        alignSelf:"center",
        borderRadius:10,
        justifyContent:"space-around",
        alignItems:"center",
        flexDirection:'row'
    },
    msgInfo:{
        color:'gray',
        fontSize:13,fontWeight:'600'
    }
})