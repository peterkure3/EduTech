import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import DetailScreen from './screens/Details';
import ProfilePage from './screens/Profile';
import LoginPage from './screens/Login';
import SignupPage from './screens/Signup';
import FeedScreen from './screens/Feed';


const Stack = createNativeStackNavigator();

function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupPage}
          options={{ title: 'Sign Up' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen} 
          options={{ title: 'Home' }} 
        />
        <Stack.Screen
          name="Profile"
          component={ProfilePage} 
          options={{ title: 'Profile' }} 
        />
        <Stack.Screen
          name="Details"
          component={DetailScreen} 
          options={{ title: 'Details' }} 
        />
        <Stack.Screen
          name="Feed"
          component={FeedScreen} 
          options={{ title: 'Details' }} 
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
