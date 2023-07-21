import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "../Components/Map";
import MapView from "react-native-maps";
import { requestForegroundPermissionsAsync , watchPositionAsync , Accuracy } from "expo-location";

import { useEffect , useState } from "react";
import { useContext } from "react";
import { Context as LocationContext } from "../context/LocationContext";
import "../mockLocation";
import useLocation from "../hooks/useLocation";
import TrackForm from "../Components/TrackForm";
import Spacer from "../Components/Spacer";
import { useIsFocused } from "@react-navigation/native";


const TrackCreateScreen = () => {

    

    const { state, addLocation } = useContext(LocationContext);
    
    const [err] = useLocation( (location) => {
        addLocation(location, state.recording);
    });




    return (
        <View>





            <SafeAreaView forceInset={{ top: "always" }} />

            <Text style={{ fontSize: 48 }}>Create a Track</Text>

            <Map />

            {err ? <Text>Please enable location services</Text> : null}

            <Spacer >

            <TrackForm />

            </Spacer>

         

            




        </View>
    );
        
}


const styles = StyleSheet.create({});

export default TrackCreateScreen;

