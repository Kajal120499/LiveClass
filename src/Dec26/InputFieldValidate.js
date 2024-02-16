import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import Images from '../Constants/Images'

const InputFieldValidate = () => {
    const ref=useRef()
    const [display, setDisplay] = useState(false)

    const [name, setName] = useState('')
    const [ph, setPh] = useState('')
    const [mail, setMail] = useState('')
    const [pin, setPin] = useState('')

    const [nameError, setNameError] = useState('')
    const [phError, setPhError] = useState('')
    const [mailError, setMailError] = useState(false)
    const [pinError, setPinError] = useState('')

    function saveData(txt) {
        let rjx = /^[a-zA-Z]+$/;
        let valid = rjx.test(name)
        if (!name || name.length < 2) {
            setNameError('Name field cannot be empty')
        } else if (name.length < 2) {
            setNameError('Enter Valid Name not less than 2')
        } else if (!valid) {
            setNameError('Name only contain alphabet and no space')
        }
        else if (name!= '') {
            setNameError('')
        }
        // let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        // let validMail=rjx.test(mail)
        // if (reg.test(mail)) {
        //     console.warn("Email is Not Correct");
        //     return false;
        //   }
        if (!mail) {
            setMailError('Mail field cannot be empty')
        } else if (mail != '') {
            setMailError('')
        }



        if (!ph) {
            setPhError('Mobile field cannot be empty')
        } else if (ph.length < 10) {
            setPhError('Enter Valid Mobile Number not less than 10')
        } else if (ph != '' && ph.length == 10) {
            setPhError('')
        }

        if (!pin) {
            setPinError('Pincode field cannot be empty')
        } else if (pin.length < 6) {
            setPinError('Enter Valid pincode not less than 6')
        } else if (pin != '' && pin.length == 6) {
            setPinError('')
        }

    }

    return (
        <View style={styles.container}>

            <Text style={{ textAlign: 'center', fontSize: 18, marginTop: 10 }}>Input field with validation</Text>
          <ScrollView>
            <View style={[styles.input,{borderColor:nameError!= '' ? 'red' : '#000'}]}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput placeholder='Enter name'
                        onChangeText={(txt) => setName(txt)}
                        value={name}
                        style={{ flex: 1,color:'black'}}
                        onSubmitEditing={()=>{
                            ref.current.focus()
                        }}
                        returnKeyType='next'
                        placeholderTextColor={'gray'} />
                    {
                        name !== '' && (
                            <TouchableOpacity style={{ justifyContent: 'flex-end' }}
                                onPress={() => {
                                    setName('');
                                }}>
                                <Image source={Images.cro} style={{ width: 20, height: 20 }} />
                            </TouchableOpacity>
                        )}
                </View>
            </View>

            <View>
                {nameError != ' ' && (<Text style={{ color: "red", marginLeft: 20, alignSelf: 'flex-start' }}>{nameError}</Text>)}
            </View>

            <View style={[styles.input,{borderColor:phError!= '' ? 'red' : '#000'}]}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput placeholder='Enter mobile number'
                        placeholderTextColor={'gray'}
                        style={{ flex: 1 }}
                        maxLength={10}
                        keyboardType='numeric'
                        value={ph}
                        ref={ref}
                        onChangeText={(txt) => { setPh(txt) }} />
                    {
                        ph !== '' && (
                            <TouchableOpacity style={{ justifyContent: 'flex-end' }}
                                onPress={() => {
                                    setPh('');
                                }}>
                                <Image source={Images.cro} style={{ width: 16, height: 16 }} />
                            </TouchableOpacity>
                        )}
                </View>
            </View>

            <View>
                {phError != ' ' && (<Text style={{ color: "red", marginLeft: 20, alignSelf: 'flex-start' }}>{phError}</Text>)}
            </View>

            <View style={[styles.input,{borderColor:mailError!= '' ? 'red' : '#000'}]}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput placeholder='Enter Email'
                        placeholderTextColor={'gray'}
                        style={{ flex: 1,color:'black'}}
                        value={mail}
                        onChangeText={(txt) => { setMail(txt) }} />
                    {
                        mail !== '' && (
                            <TouchableOpacity style={{ justifyContent: 'flex-end' }}
                                onPress={() => {
                                    setMail('');
                                }}>
                                <Image source={Images.cro} style={{ width: 16, height: 16 }} />
                            </TouchableOpacity>
                        )}
                </View>
            </View>
            <View>
                {mailError != ' ' && (<Text style={{ color: "red", marginLeft: 20, alignSelf: 'flex-start' }}>{mailError}</Text>)}
            </View>

            <View style={[styles.input,{borderColor:pinError!= '' ? 'red' : '#000'}]}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput placeholder='Enter pincode'
                        placeholderTextColor={'gray'}
                        keyboardType='numeric'
                        style={{ flex: 1 }}
                        maxLength={6}
                        value={pin}
                        onChangeText={(txt) => { setPin(txt) }} />
                    {
                        pin !== '' && (
                            <TouchableOpacity style={{ justifyContent: 'flex-end' }}
                                onPress={() => {
                                    setPin('');
                                }}>
                                <Image source={Images.cro} style={{ width: 16, height: 16 }} />
                            </TouchableOpacity>
                        )}
                </View>
            </View>
            <View>
                {pinError != ' ' && (<Text style={{ color: "red", marginLeft: 20, alignSelf: 'flex-start' }}>{pinError}</Text>)}
            </View>

            <TouchableOpacity style={styles.btn} onPress={() => { saveData() }}>
                <Text style={styles.btnTxt}>Get data</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.btn}>
            <Button title='Print Input Value' onPress={() => setDisplay(true)} color={'green'} />
             </TouchableOpacity>
            <View>
                {
                    display ? <View>
                        <Text style={{ color: 'blue' }}>Name is:{name}</Text>
                        <Text style={{ color: 'blue' }}>Pincode is:{pin}</Text>
                        <Text style={{ color: 'blue' }}>Mail is :{mail}</Text>
                        <Text style={{ color: 'blue' }}>Phone Number is:{ph}</Text>
                    </View> : null
                }
            </View>
            </ScrollView>
        </View>
    )
}

export default InputFieldValidate

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    input: {
        borderColor: 'skyblue',
        borderWidth: 1,
        margin: 20,
        color: '#000',
        marginBottom: 5,
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginTop: 20,
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    btn: {
        width: '90%',
        alignSelf: 'center',
        // marginTop: 20,
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
    errorTxt: {
        color: "red",
        marginLeft: 20
    }
})