
import { View, Text, Image, SafeAreaView, ImageBackground, StyleSheet, TextInput, Pressable, ScrollView } from 'react-native'
import { DashboardContent } from './DashboardContent';
import { useContext, useState } from 'react';




export default function Profile({navigation}){
    const {name, phone, email, address, zipcode, state, city, number, cvv, expiry, back, setBack ,font, setFont} = useContext(DashboardContent);
    const [theme, setTheme] = useState('light');
    // const [back, setBack] = useState('#F2F3F7')
    const styles=StyleSheet.create({

        label: {
            color: 'gray',
            fontWeight: 'light',
            fontStyle: 'italic',
            
        },
        
     
    });
    return (
      <>
        <ImageBackground style={{flex: 1 ,backgroundColor: back}}>
            <SafeAreaView style={{flex : 1}}>
            <ScrollView>
              <View style={{ alignItems: "center", marginTop: "5%" }}>
                <Image
                  source={require("../images/user.jpg")}
                  style={{ width: "15%", height: 50, borderRadius: "100%" }}
                />
                <Text style={{fontSize: '30%', color: font}}>Welcome {name}</Text>
                
              </View>
              <View style={{margin: '5%'}}>
                <View style={{backgroundColor:'#E9E6F9',padding: '5%',marginBottom: '3%', borderRadius: '20%'}}>
                    <Text style={{fontSize: '18%', textAlign: 'center',marginBottom: '5%'}}>Personal Details</Text>
                    <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}
                    >
                    <View>
                        <Text style={styles.label}>Email</Text>
                    </View>
                    <View style={styles.detail}>
                        <Text>{email}</Text></View>
                    </View>
                    <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                    >
                    <View>
                        <Text style={styles.label}>Phone</Text>
                    </View>
                    <View style={styles.detail}><Text>{phone}</Text></View>
                    </View>
                </View>
                <View style={{backgroundColor: '#DBF1F2',padding: '5%',marginBottom: '3%', borderRadius: '20%'}}>
                    <Text style={{fontSize: '18%', textAlign: 'center',marginBottom: '5%'}}>Address Information</Text>
                    <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                    >
                    <View>
                        <Text style={styles.label}>Address</Text>
                    </View>
                    <View style={styles.detail}><Text>{address}</Text></View>
                    </View>
                    <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                    >
                    <View>
                        <Text style={styles.label}>City</Text>
                    </View>
                    <View style={styles.detail}><Text>{city}</Text></View>
                    </View>
                    <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                    >
                    <View>
                        <Text style={styles.label}>State</Text>
                    </View>
                    <View style={styles.detail}><Text>{state}</Text></View>
                    </View>
                    <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                    >
                    <View>
                        <Text style={styles.label}>ZipCode</Text>
                    </View>
                    <View style={styles.detail}><Text>{zipcode}</Text></View>
                    </View>
                </View>
                <View style={{backgroundColor:'#E3F1E1',padding: '5%',marginBottom: '3%', borderRadius: '20%'}}>
                    <Text style={{fontSize: '18%', textAlign: 'center',marginBottom: '5%'}}>Payment Details</Text>
                    <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                    >
                    <View>
                        <Text style={styles.label}>Card number</Text>
                    </View>
                    <View style={styles.detail}><Text>{number}</Text></View>
                    </View>
                    <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                    >
                    <View>
                        <Text style={styles.label}>Expiration date</Text>
                    </View>
                    <View style={styles.detail}><Text>{expiry}</Text></View>
                    </View>
                    <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                    >
                    <View>
                        <Text style={styles.label}>CVV</Text>
                    </View>
                    <View style={styles.detail}><Text>{cvv}</Text></View>
                    </View>
                </View>
                <View>
                    <Text style={{fontSize: '18%', textAlign: 'center',marginBottom: '5%', color: font}}>Themes</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: '5%'}}>
                        <View>
                            <Pressable
                            style={{ backgroundColor: '#E3F1E1', padding: '10%', borderRadius: '10%', margin: '2%' }}
                            onPress={()=> {setTheme('light');setBack('back: rgba(0,0,0,0),font: black'); setFont('black')}}
                            >
                                <Text style={{ color: 'black', fontWeight: 'bold' }}>Light Mode</Text>
                            </Pressable>
                        </View>
                        <View>
                            <Pressable
                            style={{ backgroundColor: 'rgba(0,0,0,0.7)', padding: '10%', borderRadius: '10%', margin: '2%' }}
                            onPress={()=> { setTheme('dark'); setBack('rgba(0,0,0,0.8)'); setFont('white')}}
                            >
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>Dark Mode</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={{alignItems: 'centre' , marginTop: '10%'}}>
                        <Pressable
                        style={{ backgroundColor: '#E9E6F9', padding: '5%', borderRadius: '20%', marginLeft: '38%'}}
                        onPress={()=> {alert("Click OK to confirm logging out!");navigation.navigate('Landing'); }}
                        >
                            <Text style={{ color: 'black', fontWeight: 'bold', textAlign: 'centre' }}>Logout</Text>
                        </Pressable>
                    </View>
                </View>
              </View>
              
            </ScrollView>
          </SafeAreaView>
        </ImageBackground>
      </>
    );
    
}

