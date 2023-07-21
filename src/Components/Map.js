import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import MapView from 'react-native-maps';
import { Polyline , Circle } from 'react-native-maps';
import { Context as LocationContext } from "../context/LocationContext";
import mockLocation from "../mockLocation";
import {ActivityIndicator } from "react-native";



const Map = () => {

    const { state } = React.useContext(LocationContext);

    if (!state.currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 100 }} />;
    }


    return (
        <MapView
            style={styles.map}
            initialRegion={{
                ...state.currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01

            }}
            region={{

                ...state.currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01

            }}
                
        

        >
            <Circle

                center={state.currentLocation.coords}
                radius={30}
                strokeColor="rgba(158,158,255,1.0)"
                fillColor="rgba(158,158,255,0.3)"

            />
            <Polyline coordinates={state.locations.map(loc => loc.coords)} />


           
        </MapView>
    );
            





  


    
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }

});
export default Map;
