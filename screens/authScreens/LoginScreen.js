import React, {useState, useContext} from "react";
import { StyleSheet, Text, View, Button, TextInput, Alert, TouchableOpacity } from 'react-native';
import { AuthContext } from "../../navigation/AuthProvider";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";


export default function LoginRegister(props){

    const {login} = useContext(AuthContext);

    function handleLogin(){
        login();
    }

            
    return (
        <View style = {styles.container}>

            <TouchableOpacity 
            onPress = {handleLogin}
            style= {styles.signinButton}>
            <Text>Sign In or Register With Google</Text>
            </TouchableOpacity>


            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#ffedd9',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: "column"
      },


    signinButton: {
        alignItems: "center",
        backgroundColor: "#b3d0ff",
        padding: 20,
        borderRadius: 20
        
        
    }

  });

