import { useContext, useState } from "react";

import { View, Text, Image, SafeAreaView, ImageBackground, StyleSheet, TextInput, Pressable } from 'react-native'
import { DashboardContent } from './DashboardContent';




export default function Address({navigation}){
    
    const { address, city,state, zipcode, setAddress, setCity , setState, setZipcode} = useContext(DashboardContent);

    return (
        <>
            
            <ImageBackground style={{flex: 1 ,backgroundColor: '#F2F3F7'}}>
                <SafeAreaView style={{height: '90%'}}>
                    <View style={{backgroundColor: 'rgba(0, 0, 0, 0.05)', alignItems: 'center', borderRadius: '20%', height: '120%'}}>
                        <Text style={styles.head}>S | F Deliveries</Text>
                        
                        <Text style={{fontSize: '28%', color: 'black'}}>Enter Address Details</Text>
                        <View style={{width: '50%', marginTop: '10%'}}>
                            <TextInput placeholder="Enter address" placeholderTextColor={'gray'} style={styles.text} value={address} onChangeText={setAddress}/>
                            <TextInput placeholder="Enter city" placeholderTextColor={'gray'} style={styles.text} value={city} onChangeText={setCity}/>
                            <TextInput placeholder="Enter state" placeholderTextColor={'gray'} style={styles.text} value={state} onChangeText={setState}/>
                            <TextInput placeholder="Enter ZIP code" placeholderTextColor={'gray'} style={styles.text} value={zipcode} onChangeText={setZipcode}/>
                            
                            <Pressable style={styles.button} onPress={()=> {if(city&&address&&zipcode&&state)
                                {navigation.navigate('Payment')}
                                else 
                                alert('Please fill in all required details!')
                            }}>
                                <Text style={styles.buttonText}>Continue</Text>
                            </Pressable> 
                            <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%', height: '5%', margin: 'auto', alignItems: 'center'}}>
                                <View style={{backgroundColor:'green', width: 8, height: 8, borderRadius: '100%'}}></View>
                                <View style={{backgroundColor:'black', width: 15, height: 8, borderRadius: '100%'}}></View>
                                <View style={{backgroundColor:'green', width: 8, height: 8, borderRadius: '100%'}}></View>
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
        color: 'black',
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