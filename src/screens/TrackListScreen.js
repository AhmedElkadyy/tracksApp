import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TrackListScreen = ({navigation}) => {
    return (
        <View>
            <SafeAreaView forceInset={{ top: "always" }} />

            <Text style={{ fontSize: 48 }}>TrackList Screen</Text>
            <Button title="Go to Track Detail" onPress={() => navigation.navigate('TrackDetail')} />
            
        </View>
    );
}


const styles = StyleSheet.create({});
export default TrackListScreen;

