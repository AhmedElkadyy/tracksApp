import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TrackDetailScreen = () => {
    
    return (
        <View>
            <SafeAreaView forceInset={{ top: "always" }} />

            <Text style={{ fontSize: 48 }}>TrackDetail Screen</Text>
            
        </View>
    );

}


const styles = StyleSheet.create({});
export default TrackDetailScreen;

