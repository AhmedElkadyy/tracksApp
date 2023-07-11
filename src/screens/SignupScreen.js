import React from "react";

import { View, StyleSheet , TouchableOpacity } from "react-native";
import {Text , Button,Input} from "react-native-elements";
import Spacer from "../Components/Spacer";
import { useState } from "react";
import { Context } from "../context/AuthContext";
import { useContext } from "react";
import { useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';



const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  


    


   



    return (
        <View style={styles.container}>


            <Spacer>
            <Text h3>Sign Up for Tracker</Text>
            </Spacer>

            <Spacer>
            <Input label="Email"  onChangeText={(newEmail) => setEmail(newEmail)} autoCapitalize="none" autoCorrect={false} />
            </Spacer>

            <Spacer>
            <Input label="Password"  onChangeText={(newPassword) => setPassword(newPassword)} autoCapitalize="none" autoCorrect={false} secureTextEntry />
            </Spacer>
            {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}

            
            <Spacer>
            <Button title="Sign Up" onPress={() => signup({ email, password })} />
            </Spacer>
            <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
                <Spacer>
                <Text style={styles.link}>Already have an account? Sign in instead</Text>
                </Spacer>
            </TouchableOpacity>

        


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 250
    }
    , errorMessage: {
        fontSize: 16,
        color: "red",
        marginLeft: 15,
        marginTop: 15
    }
    , link: {
        color: "blue"
    }



});
export default SignupScreen;
