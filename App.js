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
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Provider as LocationProvider} from './src/context/LocationContext';





const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
  <LocationProvider>
    <AuthProvider>
      <NavigationContainer ref={(navigator) => { setNavigator(navigator) }}>
        <Stack.Navigator initialRouteName="ResolveAuth" headerMode="none">
          <Stack.Screen name="ResolveAuth" component={ResolveAuthScreen} />
          <Stack.Screen name="Auth" component={AuthNavigator} />
          <Stack.Screen name="TrackList" component={TrackListStack} />
          <Stack.Screen name="Main" component={MainTabNavigator} />
       
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  </LocationProvider>
  );
}

const AuthNavigator = () => (
  <Stack.Navigator initialRouteName="Signup" headerMode="none">
    <Stack.Screen name="Signup" component={SignupScreen} />
    <Stack.Screen name="Signin" component={SigninScreen} />
  </Stack.Navigator>
);


const MainTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="TrackList" component={TrackListStack}  options={{ tabBarIcon : () => null , tabBarLabelStyle : { fontSize: 18 } ,headerShown: false }} />
    <Tab.Screen name="TrackCreate" component={TrackCreateScreen}  options={{ tabBarIcon : () => null , tabBarLabelStyle : { fontSize: 18 } ,headerShown: false }} />
    <Tab.Screen name="Account" component={AccountScreen}  options={{ tabBarIcon : () => null , tabBarLabelStyle : { fontSize: 18 } ,headerShown: false }} />
    

  </Tab.Navigator>
);

 const TrackListStack = () => (
    <Stack.Navigator initialRouteName="TrackList" headerMode="none">
      <Stack.Screen name="TrackList" component={TrackListScreen}  options={{ tabBarIcon : () => null , tabBarLabelStyle : { fontSize: 18 } ,headerShown: false }} />
      <Stack.Screen name="TrackDetail" component={TrackDetailScreen}  options={{ tabBarIcon : () => null , tabBarLabelStyle : { fontSize: 18 } ,headerShown: false }} />
    </Stack.Navigator>
  );



