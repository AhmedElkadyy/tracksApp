import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements"
import { Context } from "../context/AuthContext";
import { useContext } from "react";
import Spacer from "../Components/Spacer";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
const AccountScreen = () => {

    const { signout } = useContext(Context);

    return (
    <View>
        <SafeAreaView forceInset={{top:"always"}}/>  
        <Spacer >
        <Text h2>Create Track</Text>
        </Spacer>

       
        <Button title="Sign Out" onPress={signout} style={styles.button} />
        
    </View>

    );

    }

const styles = StyleSheet.create({
    button: {
        marginHorizontal: 10
    }

});
export default AccountScreen;

