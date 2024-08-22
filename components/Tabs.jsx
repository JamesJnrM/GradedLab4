import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile';
import Menu from './Menu';
import Cart from './Cart';
import { ImageBackground } from 'react-native';
import { useContext } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { DashboardContent } from './DashboardContent'; 


const Tab = createBottomTabNavigator();

export default function Tabs(){
    const {back}=useContext(DashboardContent)
    return(
        <Tab.Navigator screenOptions={{tabBarStyle:{backgroundColor: back, height: 65}}}>
            <Tab.Screen name="Menu" component={Menu} options={{headerShown: false ,tabBarIcon: ({ focused, color, size }) => (
                <Ionicons
                name={focused ? 'restaurant' : 'restaurant-outline'}  
                size={20} 
                color={color} 
                />), 
            }} 
            />
            <Tab.Screen name="Cart" component={Cart} options={{headerShown: false ,tabBarIcon: ({ focused, color, size }) => (
                <Ionicons
                name={focused ? 'cart' : 'cart-outline'}  
                size={20} 
                color={color} 
                />), 
            }} 
            />
            <Tab.Screen name="Profile" component={Profile} options={{headerShown: false,tabBarIcon: ({ focused, color, size }) => (
                <Ionicons
                name={focused ? 'person' : 'person-outline'}  
                size={20} 
                color={color} 
                />), 
            }} 
            />
        </Tab.Navigator>
    )
 
}