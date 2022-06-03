import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import Dashboard from './screens/Dashboard';
import Adventure from './screens/Advencture';
import Comic from './screens/Comic';
import Mystery from './screens/Mystery';
import Short_Stories from './screens/Short_Stories';
import Profile from './screens/Profile';
import Classics from './screens/Classics';
import Fantasy from './screens/Fantasy';
import Romance from './screens/Romance';
import Paperback from './screens/Paperback';
import Musketeers from './screens/Musketeers';
import TheCall from './screens/TheCall';
import Vintage from './screens/Vintage';
import Little from './screens/Little';
import Mockingbird from './screens/Mockingbird';
import Cart from './screens/Cart';
import Sign from './screens/Sign';
import Register from './screens/Register';





const Stack = createNativeStackNavigator()

export default function App() {
  return (

    
  
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={HomeScreen} />
          <Stack.Screen name="DashBoard" component={Dashboard} />
          <Stack.Screen name="Advencture" component={Adventure} />
          <Stack.Screen name="Classics" component={Classics} />
          <Stack.Screen name="Comic" component={Comic} />
          <Stack.Screen name="Mystery" component={Mystery} />
          <Stack.Screen name="Fantasy" component={Fantasy} />
          <Stack.Screen name="Romance" component={Romance} />
          <Stack.Screen name="Short_Stories" component={Short_Stories} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Paperback" component={Paperback} />
          <Stack.Screen name="Musketeers" component={Musketeers} />
          <Stack.Screen name="TheCall" component={TheCall} />
          <Stack.Screen name="Vintage" component={Vintage} />
          <Stack.Screen name="Little" component={Little} />
          <Stack.Screen name="Mockingbird" component={Mockingbird} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Sign" component={Sign} />
          <Stack.Screen name="Register" component={Register} />
          
          
          
          
        </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
   
  );
}
