import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, useRef } from 'react'

const Otp = () => {
    const [ip1, setIp1] = useState('')
    const [ip2, setIp2] = useState('')
    const [ip3, setIp3] = useState('')
    const [ip4, setIp4] = useState('')
    
    const [wrongOtp, setWrongOtp] = useState('')

    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();

    const [isFocused1, setisFocused1] = useState('')
    const [isFocused2, setisFocused2] = useState('')
    const [isFocused3, setisFocused3] = useState('')
    const [isFocused4, setisFocused4] = useState('')

    const validateOtp=()=>{
        let otp="1204"
        let currentOtp=ip1+ip2+ip3+ip4
        if(currentOtp==''){
            setWrongOtp("Enter Otp!")}
        else if(currentOtp!=otp 
               && currentOtp.length==4 
               && currentOtp!=otp){
            setWrongOtp("Wrong Otp Entered!")
        }
        else if(currentOtp.length<4){
            setWrongOtp("Enter Valid 4 digit!")
        }
        else if(currentOtp!='' && currentOtp.length==4 && currentOtp==otp){
            setWrongOtp(" ")
        }
    }
    return (
        <View style={{ flex: 1, justifyContent: "center", backgroundColor: '#fff' }}>

            <View style={styles.mainVew}>
                <TextInput style={[styles.input, { borderColor: isFocused1 ? "green" : 'black' }]}
                    maxLength={1}
                    value={ip1}
                    ref={ref1}
                    onFocus={() => {
                        setisFocused1(true)
                    }}
                    onBlur={() => {
                        setisFocused1(false)
                    }}
                    onChangeText={(txt) => {
                        if (txt.length == 1) {
                            ref2.current.focus()
                        }else{
                            setisFocused1(false)
                        }
                        setIp1(txt)
                    }}
                    returnKeyType='next'
                    keyboardType='numeric' onSubmitEditing={() => { }} />

                <TextInput style={[styles.input, { borderColor: isFocused2 ? "green" : 'black' }]}
                    maxLength={1}
                    value={ip2}
                    onChangeText={(txt) => {
                        if (txt.length == 1) {
                            ref3.current.focus()
                        } else {
                            ref1.current.focus()
                        }
                        setIp2(txt)
                    }}
                    onFocus={() => {
                        setisFocused2(true)
                    }}
                    onBlur={() => {
                        setisFocused2(false)
                    }}
                    returnKeyType='next'
                    keyboardType='numeric' ref={ref2} />

                <TextInput style={[styles.input, { borderColor: isFocused3 || ip1.length>0? "green" : 'black' }]}
                    maxLength={1}
                    value={ip3}
                    onChangeText={(txt) => {
                        if (txt.length == 1) {
                            ref4.current.focus()
                        } else {
                            ref2.current.focus()
                        }
                        setIp3(txt)
                    }}
                    onFocus={() => {
                        setisFocused3(true)
                    }}
                    onBlur={() => {
                        setisFocused3(false)
                    }}
                    keyboardType='numeric' ref={ref3} returnKeyType='next'
                />

                <TextInput style={[styles.input, { borderColor: isFocused4 ? "green" : 'black' }]}
                    maxLength={1}
                    value={ip4}
                    onChangeText={(txt) => {
                        if (txt.length < 1) {
                            ref3.current.focus()
                        }
                        setIp4(txt)
                    }}
                    onFocus={() => {
                        setisFocused4(true)
                    }}
                    onBlur={() => {
                        setisFocused4(false)
                    }}
                    returnKeyType='done'
                    keyboardType='numeric' ref={ref4} />
            </View>
            
            <View>
                {wrongOtp != ' ' && (<Text style={{ color: "red", marginLeft: 20, alignSelf: 'flex-start' }}>{wrongOtp}</Text>)}
            </View>

            <TouchableOpacity style={styles.btn} onPress={() => { validateOtp() }}>
                <Text style={styles.btnTxt}>Get Data</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Otp

const styles = StyleSheet.create({
    mainVew: {
        flexDirection: "row",
        alignSelf: "center",
        width: "90%",
        justifyContent: 'space-evenly',
        alignItems: "center",
        backgroundColor: '#fff'
    },
    input: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'center',
        color: '#000'
    },
    btn: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 10,
        height: 50,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: "center",
        marginBottom: 20
    },
    btnTxt: {
        color: '#fff',
        // fontWeight:'800',
        fontSize: 20
    },
})