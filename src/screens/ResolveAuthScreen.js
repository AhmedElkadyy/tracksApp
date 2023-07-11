import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

const ResolveAuthScreen = () => {
    const { tryLocalSignin } = React.useContext(AuthContext);

    React.useEffect(() => {
        tryLocalSignin();
    }, []);

    return null;
}

const styles = StyleSheet.create({});
export default ResolveAuthScreen;