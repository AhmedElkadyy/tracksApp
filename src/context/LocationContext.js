
import { useReducer } from "react";
import React from 'react'
import CreateDataContext from "./createDataContext";






const locationReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
       
        case 'add_current_location':
            return { ...state, currentLocation: action.payload }

        case 'start_recording': 
            return { ...state, recording: true }

        case 'stop_recording':
            return { ...state, recording: false }

        case 'add_location':
            return { ...state, locations: [...state.locations, action.payload] }

        case 'change_name':
            return { ...state, name: action.payload }





    }
}


const addLocation = dispatch => (location) => {
    dispatch({ type: 'add_current_location', payload: location })
    if (state.recording) {
        dispatch({ type: 'add_location', payload: location })
    }
}

const startRecording = dispatch => () => { 
    dispatch({ type: 'start_recording' })
}


const stopRecording = dispatch => () => { 
    dispatch({ type: 'stop_recording' })
}


const changeName = dispatch => (name) => {
    dispatch({ type: 'change_name', payload: name })
}






export const {Context, Provider} = CreateDataContext( // Context for use in components and Provider for use in App.js
    locationReducer,// reducer
    { startRecording, stopRecording, addLocation }, // actions
    { name: '', recording: false, locations: [], currentLocation: null } // initial state
)



