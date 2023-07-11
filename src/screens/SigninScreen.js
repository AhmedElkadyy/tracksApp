import React from "react";
import { View, StyleSheet } from "react-native";
import { useState } from "react";
import { Button, Input,Text } from "react-native-elements";
import Spacer from "../Components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { TouchableOpacity } from "react-native";




const SigninScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { state, signin } = useContext(AuthContext);


    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign In for Tracker</Text>
            </Spacer>

            <Spacer>

                <Input label="Email" onChangeText={(newEmail) => setEmail(newEmail)} autoCapitalize="none" autoCorrect={false} />
            </Spacer>

            <Spacer>

                <Input label="Password" onChangeText={(newPassword) => setPassword(newPassword)} autoCapitalize="none" autoCorrect={false} secureTextEntry />

            </Spacer>

            {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}

            <Spacer>

                <Button title="Sign In" onPress={() => signin({ email, password })} />
            </Spacer>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <Spacer>
                    <Text style={styles.link}>Don't have an account? Sign up instead</Text>
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
    },
    link: {
        color: "blue"
    }
});







export default SigninScreen;

