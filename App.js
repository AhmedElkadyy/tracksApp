import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import TrackCreateScreen from './src/TrackCreateScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';




const Stack = createStackNavigator();

export default function App() {


  return (
    <AuthProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
        <Stack.Screen name="TrackList" component={TrackListScreen} />
        <Stack.Screen name="TrackCreate" component={TrackCreateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </AuthProvider>



  );
}





