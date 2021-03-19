import React from "react";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import QRReaderScreen from "../screens/QRCodeScreens/QRReaderScreen";
import FirebaseDataScreen from "../screens/FirebaseDataScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeStack(){
    const Tab = createMaterialBottomTabNavigator();
    return(
        <Tab.Navigator
            initialRouteName="Home">
            <Tab.Screen 
                name = "QRReader" 
                component = {QRReaderScreen}
                options = {{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="qrcode-edit" color={color} size={26} />
                      )
                }}
            />
            <Tab.Screen 
                name = "Home" 
                component = {HomeScreen}
                options = {{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                      )
                }}
            />

            <Tab.Screen 
                name = "FirebaseData" 
                component = {FirebaseDataScreen}
                options = {{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="firebase" color={color} size={26} />
                      )
                }}
            />
        </Tab.Navigator>
    )
}