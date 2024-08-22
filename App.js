import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useContext, useState } from "react";
import { DashboardContent } from './components/DashboardContent';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './components/Home';
import Tabs from './components/Tabs';
import Address from './components/Address';
import Payment from './components/Payment';
import Landing from './components/Landing';
import Profile from './components/Profile';

const Stack = createStackNavigator();
export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [number, setNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiry, setExpiry] = useState('');
  const [back, setBack] = useState('#F2F3F7');
  const [font, setFont] = useState('blacks');

  const meals=[
    {
    id: 1,
    name: 'Chicken Nuggets',
    image: 'https://www.skinnytaste.com/wp-content/uploads/2023/09/Chicken-Nuggets-10.jpg',
    price: 54.99,
    description: 'Crispy on the outside, tender on the inside, these chicken nuggets are seasoned to perfection. Perfect for a quick snack or meal!'
    }
    ,
    {
      id: 2,
      name: 'Chicken Burger',
      image: 'https://cdn.prod.website-files.com/657a7aac36df076237527e36/658e02cda7939e42519065e9_6584c1ed00a3c9810932e955_airfryerchickensandwich_youtube_dad_2.webp',
      price: 48.99,
      description: 'A juicy chicken patty, topped with fresh lettuce, tomato, and a creamy sauce, all in a toasted bun. Perfectly satisfying!'
    },
    {
      id: 3,
      name: 'Waffle Fries',
      image: 'https://watchlearneat.com/wp-content/uploads/2022/03/Air-Fryer-Waffle-Fries-Final-ft2-e1648051479674.jpg',
      price: 61.99,
      description: "Crispy, golden waffle-cut fries with a perfect blend of seasoning—ideal for snacking or as a side!"
    }
    ,
    {
      id: 4,
      name: 'Bacon Cheeseburger',
      image: 'https://www.seriouseats.com/thmb/MBJZXTROIhiNcn5pylcMswqgrvo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2013__07__20130723-bacon-weave-food-lab-burger-step-by-step-27-4f43a832acb242789dbc4133810a281f.jpg',
      price: 43.99,
      description: "Juicy beef patty topped with crispy bacon, melted cheese, and fresh toppings on a toasted bun."
    }
    ,
    {
      id: 5,
      name: 'Cheesy Gordita Crunch',
      image: 'https://preview.redd.it/random-question-is-a-chalupa-just-the-outer-shell-for-a-v0-p1si3gzzv73a1.jpg?width=640&crop=smart&auto=webp&s=f5ac6c4ad6dcced0639ca4cfb742aa544a3c8ff7',
      price: 98.99,
      description: "Crunchy taco wrapped in a warm, cheesy flatbread, loaded with seasoned beef, fresh veggies, and zesty sauce."
    }
    ,
    {
      id: 6,
      name: 'Animal Style Fries',
      image: 'https://www.allrecipes.com/thmb/Hah7rcVgrA_vwFToFFWbTVKaVzQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8460058-Animal-Style-Fries-ddmfs-4x3-0033-3d60a06638eb46059adb8ea694ddc411.jpg',
      price: 71.75,
      description: "Crispy fries topped with melted cheese, grilled onions, and special spread for an extra kick."
    }
    ,
    {
      id: 7,
      name: 'Honey BBQ Chicken Sandwich',
      image: 'https://lh3.googleusercontent.com/BuDWeabVmWE1jJOFxkD6xYMrYz8ZZl_0A7WB2OsnNwdjLBzQ7OsKccxTpUhOYAi8KnR5tr8tbDF8gT9qXuKJ5siNxFN8nN_A0jBUQia_=w1200-h630-p-rj-l75',
      price: 54.99,
      description: "Juicy chicken breast glazed with honey BBQ sauce, topped with pickles and crisp lettuce on a soft bun."
    },{
      id: 8,
      name: 'Pepperoni Pizza',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHoML_RWrNhS3xbZNeWhpj9jjsyG7Ex-43aw&s',
      price: 99.99,
      description: "Thin crust pizza topped with fresh mozzarella, bell peppers, and pepperoni."
    }
    
  ]
  const [cart, setCart]=useState([])
  
  return (
      <DashboardContent.Provider value={{name, email,phone, setPhone, setName, setEmail, meals, cart, setCart, address, city,state, zipcode, setAddress, setCity , setState, setZipcode, number, expiry,cvv, setNumber, setExpiry , setCvv, back, setBack, font, setFont}}>
        <NavigationContainer>
          
            <Stack.Navigator>
              
              <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />  
              <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
              <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
              <Stack.Screen name="Address" component={Address} options={{ headerShown: false}}/>
              <Stack.Screen name="Payment" component={Payment} options={{ headerShown: false}}/>
            </Stack.Navigator>
          </NavigationContainer>
      </DashboardContent.Provider>

  );
}

