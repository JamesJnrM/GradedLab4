import { View, Text, Image, SafeAreaView, ImageBackground, StyleSheet, TextInput, Pressable } from 'react-native'

export default function Landing({navigation}){
    return(
        <>
            <ImageBackground source={require('../images/home.jpg')} style={{flex: 1}} >
                <SafeAreaView>
                    <View style={{marginTop: '10%'}}>
                        <Text style={{fontSize: '40%', marginLeft: '40%'}}>Scooters Food</Text>
                        <Text style={{fontSize: '40%', marginLeft: '65%'}}>Delivery</Text>
                    </View>
                    <View style={{marginTop: '100%', marginLeft: '10%', }}>
                        <Pressable style={{width: '50%',backgroundColor: '#FEEBE2', borderRadius: '30%'}} onPress={()=> navigation.navigate('Home')}>
                            <Text style={{fontSize: '25%', color: 'black', padding: '10%', textAlign: 'center'}}>Order Now</Text>
                        </Pressable>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </>
    );
}