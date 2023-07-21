import React from "react";

import { StyleSheet, Text, View } from "react-native";

import { Input, Button } from "react-native-elements";

import Spacer from "../Components/Spacer";

const TrackForm = () => {

    return (
        <View>
            <Spacer>
            <Input placeholder="Enter Name" />
            </Spacer>
            <Spacer>
            <Button title="Start Recording" />
            </Spacer>
        </View>
    );


}

const styles = StyleSheet.create({});
export default TrackForm;