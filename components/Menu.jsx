import React, { useContext, useState } from 'react';
import { View, Text, Image, SafeAreaView, ImageBackground, StyleSheet, TextInput, Pressable, ScrollView, FlatList } from 'react-native'
import { DashboardContent } from './DashboardContent'; 




export default function Menu() {
    const { name, meals, cart, setCart, back ,font} = useContext(DashboardContent);

    const styles = StyleSheet.create({
   
        text: {
            fontSize: '14%',
            fontWeight: 'light',
            color: font
        },
        meal:{
            height: 200,
            width: '100%',
            borderRadius: '10%',
            marginBottom: '5%'
        },
        button:{
            backgroundColor: '#FEEBE2',
            
            borderRadius: '10%',
            padding: '2%',
            marginBottom: '5%',
            marginTop: '5%',
            marginLeft:'25%',
            width: '50%',
            alignItems: 'center',
            marginLeft:'25%'
        }
        ,
        buttonText: {
            
            fontSize: '15%',
            padding: '5%',
            textAlign: 'center',
            fontWeight: 'bold',
            textTransform: 'uppercase',
        },
    });
    
    return (
        <>
            
                
            
            <ImageBackground style={{flex: 1 ,backgroundColor: back}}>
                <SafeAreaView style={{flex : 1}}>
                    <View style={{flexDirection: 'row',marginBottom: '4%', justifyContent: 'space-between', marginLeft: '5%', marginRight: '5%', alignItems: 'center'}}>
                        <Text style={styles.text}>Hello, {name} !</Text>
                        <Image source={require('../images/user.jpg')} style={{width: '15%', height:50, borderRadius:'50%'}}/>
                    </View>
                    
                    <View style={{ marginBottom: '5%'}}>
                        <FlatList 
                        data={meals}
                        renderItem={({item})=>
                            <View style={{marginLeft: '2%' ,marginRight: '2%', backgroundColor: '#E9E6F9' , padding: '2%', borderRadius: '20%', marginBottom: '7%'}}>
                                <View style={{alignItems: 'center'}}>
                                    <Image source={{uri : item.image}} style={styles.meal}/>
                                </View>
                                <Text style={{fontSize: '20%', marginBottom: '2%'}}>{item.name}</Text>
                                <Text style={{marginBottom: '2%'}}>{item.price}</Text>
                                <Text style={{marginBottom: '2%'}}>{item.description}</Text>
                                <Pressable style={styles.button} onPress={()=>{alert("Added to cart"); setCart(prevCart=>[...prevCart, {id: cart.length+1,image: item.image, name:item.name, price: item.price}])}}>
                                    <Text style={styles.buttonText}>Add to Cart</Text>
                                </Pressable>
                            </View>
        
                        
                        }
                        />
                    </View>
                    
                    
                </SafeAreaView>
                
            </ImageBackground>
        </>
        
        
    );
}


