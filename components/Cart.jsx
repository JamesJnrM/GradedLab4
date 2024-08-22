import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  FlatList,
} from "react-native";
import { DashboardContent } from "./DashboardContent";

export default function Cart() {
  const { name, surname, cart, address, city, back, font , setCart} = useContext(DashboardContent);
  
const styles = StyleSheet.create({
    text: {
      fontSize: "14%",
      fontWeight: "light",
      color: font
    },
    meal: {
      width: 60,
      height: 60,
      resizeMode: "cover",
      borderRadius: "20%",
    },
  });
    
    const total = cart.reduce((balance, item) => balance + item.price, 0).toFixed(2);
  return (
    <>
      <ImageBackground style={{ flex: 1, backgroundColor:back }}>
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{flexDirection: 'row',marginBottom: '4%', justifyContent: 'space-between', marginLeft: '5%', marginRight: '5%', alignItems: 'center'}}>
                <Text style={styles.text}>Hello, {name} !</Text>
                <Image source={require('../images/user.jpg')} style={{width: '15%', height:50, borderRadius:'50%'}}/>
            </View>
          <View style={{backgroundColor: '#FEEBE2', margin: '5%', padding: '5%', borderRadius: '20%'}}>
            <Text>Deliver to</Text>
            <Text style={{marginTop: '1%', fontWeight: 'bold'}}>{address}, {city}</Text>
          </View>
          <FlatList
            data={cart}
            renderItem={({ item }) => (
              <View>
                <View style={{flexDirection: "row", margin: "5%", justifyContent: "space-evenly", alignItems: "center"}} key={item.id}>
                    <View>
                    <Image source={{ uri: item.image }} style={styles.meal} />
                    </View>
                    <View>
                    <Text style={{color: font}}>{item.name}</Text>
                    </View>
                    <View>
                    <Text style={{color: font}}>R{item.price}</Text>
                    </View>
                    <View>
                        <Pressable onPress={()=> setCart(prevCart => prevCart.filter(Ritem => Ritem.id !== item.id))}>
                            <Image source={require('../images/delete.png')} style={{width: 10, height: 20,color: font}}/>
                        </Pressable>
                        
                    </View>
                </View>
                    
                    
                    
                
              </View>
            )}
            
          />
            <View style={{alignItems: 'center'}}>
                <View style={{backgroundColor: '#E9E6F9', padding: '3%',borderRadius: '20%',marginBottom: '5%'}}>
                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <View>
                            <Text style={{color: 'gray'}}>Item total</Text>
                        </View>
                        <View>
                            <Text>R{total}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', justifyContent: 'space-between', }}>
                        <View>
                            <Text style={{marginRight: '40%',color: 'gray'}}>Discount</Text>
                        </View>
                        <View>
                            <Text>R0</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', justifyContent: 'space-between', marginBottom: '3%'}}>
                        <View>
                            <Text style={{fontSize: '18%', fontWeight: 'bold'}}>Total</Text>
                        </View>
                        <View>
                            <Text style={{fontSize: '18%', fontWeight: 'bold'}}>R{total}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{alignItems: 'center', marginBottom: '2%'}}>
                <Pressable style={{backgroundColor: '#FEEBE2', padding: '3%', borderRadius: '20%', width:'40%'}} onPress={()=> {alert('Payment successful. Your order is on the way.'); setCart([])}}>
                    <Text style={{ textAlign:'center'}}>Proceed to Pay</Text>
                </Pressable>
            </View>
          
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}

