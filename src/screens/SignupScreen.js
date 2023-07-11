import React from "react";

import { View, StyleSheet } from "react-native";
import {Text , Button,Input} from "react-native-elements";
import Spacer from "../Components/Spacer";
import { useState } from "react";

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <View style={styles.container}>


            <Spacer>
            <Text h3>Sign Up for Tracker</Text>
            </Spacer>

            <Spacer>
            <Input label="Email" value="email" onChangeText={(newEmail) => setEmail(newEmail)} autoCapitalize="none" autoCorrect={false} />
            </Spacer>

            <Spacer>
            <Input label="Password" value="password" onChangeText={(newPassword) => setPassword(newPassword)} autoCapitalize="none" autoCorrect={false} secureTextEntry />
            </Spacer>
            
            <Spacer>
            <Button title="Sign Up" />
            </Spacer>
        


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 250
    }

});
export default SignupScreen;
