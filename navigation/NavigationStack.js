import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator } from "@react-navigation/stack";
import HomeStack from "./HomeStack";

export default function NavigationStack(){
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <HomeStack/>
        </NavigationContainer>
    )
}