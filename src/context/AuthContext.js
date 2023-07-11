import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { navigate } from "../navigationRef";

const authReducer = (state, action) => {

    switch (action.type) {
        default :
        return state ;
        case "add_error":
            return { ...state, errorMessage: action.payload };
        case "signup":
            return { errorMessage: "", token: action.payload };
        case "signin":
            return { errorMessage: "", token: action.payload };

        case "signout":
            return { errorMessage: "", token: null };


      
            
            

    }
};

 const tryLocalSignin = (dispatch) => {
    return async () => {
        const token = await AsyncStorage.getItem("token");
        if (token) {
            dispatch({ type: "signin", payload: token });
            navigate("Main");
        }
        else {
            navigate("Auth");
        }
    };
};

const signup = (dispatch) => {
    return async ({ email, password }) => {

        try {
            const response = await trackerApi.post("/signup", { email, password });
            await AsyncStorage.setItem("token", response.data.token);
            dispatch({ type: "signup", payload: response.data.token });
            navigate("Main");
           
            
            
        }
        catch (err) {
            dispatch({ type: "add_error", payload: "Something went wrong with sign up" });
            console.log("catch block");
            console.log(err.message);

        }
        
    };

};

const signin = (dispatch) => {

    return async ({ email, password }) => {
        
        try {
            const response = await trackerApi.post("/signin", { email, password });
            await AsyncStorage.setItem("token", response.data.token);

            dispatch({ type: "signin", payload: response.data.token });
            navigate("Main");

        }
        catch (err) {
            dispatch({ type: "add_error", payload: "Something went wrong with sign in" });
            console.log("catch block");
            console.log(err.message);

        }


      





    };
};


const signout = (dispatch) => {

    return async () => {
        await AsyncStorage.removeItem("token");
        dispatch({ type: "signout" });
        navigate("Auth");
    };
};










export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup , tryLocalSignin },
    { errorMessage:"" , token: null }
);
