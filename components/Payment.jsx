import { useContext, useState } from "react";

import { View, Text, Image, SafeAreaView, ImageBackground, StyleSheet, TextInput, Pressable } from 'react-native'
import { DashboardContent } from './DashboardContent';




export default function Payment({navigation}){
    
    const { number, expiry,cvv, setNumber, setExpiry , setCvv} = useContext(DashboardContent);

    return (
        <>
            
            <ImageBackground style={{flex: 1 ,backgroundColor: '#F2F3F7'}}>
                <SafeAreaView style={{height: '90%'}}>
                    <View style={{backgroundColor: 'rgba(0, 0, 0, 0.05)', alignItems: 'center', borderRadius: '20%', height: '120%'}}>
                        <Text style={styles.head}>S | F Deliveries</Text>
                        
                        <Text style={{fontSize: '28%', color: 'black'}}>Enter Payment Details</Text>
                        <View style={{width: '50%', marginTop: '40%'}}>
                            <TextInput placeholder="Credit card number [16 digits]" placeholderTextColor={'gray'} style={styles.text} value={number} onChangeText={setNumber}/>
                            <TextInput placeholder="Expiration date[year/month]" placeholderTextColor={'gray'} style={styles.text} value={expiry} onChangeText={setExpiry}/>
                            <TextInput placeholder="Enter CVV [3 digits]" placeholderTextColor={'gray'} style={styles.text} value={cvv} onChangeText={setCvv}/>
                            <Pressable style={styles.button} onPress={()=> {if(number.length===5&&cvv.length===3&&expiry.length>5)
                                {navigation.navigate('Tabs')}
                                else 
                                alert('Please fill in all required details!')
                            }}>
                                <Text style={styles.buttonText}>Continue</Text>
                            </Pressable> 
                            <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%', height: '5%', margin: 'auto', alignItems: 'center'}}>
                                <View style={{backgroundColor:'green', width: 8, height: 8, borderRadius: '100%'}}></View>
                                <View style={{backgroundColor:'green', width: 8, height: 8, borderRadius: '100%'}}></View>
                                <View style={{backgroundColor:'black', width: 15, height: 8, borderRadius: '100%'}}></View>
                            </View>   
                        </View>
                        
                    </View>
                </SafeAreaView>
            </ImageBackground>
            
            
            
        </>
    )
}


const styles=StyleSheet.create({
    head:{
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: 'center',
        marginBottom: '20%'
    },
    text:{
        textAlign: 'center',
        marginBottom: '20%',
        borderColor: 'gray',
        borderWidth: 0.5,
        width: '100%',
        color: 'black',
        borderRadius: '20%',
        height: '7%'
    },
    buttonText:{
        
        textAlign: 'center',
        
    },
    button:{
        backgroundColor: '#FEEBE2',
        padding: '8%',
        borderRadius: '20%',
        marginTop: '65%',
       
    },
    image:{
        width: '90%',
        height: '50%',
        resizeMode: 'cover',
        borderRadius: '10%',
        marginBottom: '5%',
        marginTop: '5%',
        
    }
})