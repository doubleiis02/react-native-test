import React, {useState, useContext, useEffect} from 'react';
import {AuthContext} from "../navigation/AuthProvider";
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function HomeScreen() {
  const {user, setUser, logout, } = useContext(AuthContext);
  const [userName, setUserName] = useState(null);
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    setUserName(user.displayName);
    setProfilePic(user.photoURL);

  }, []); //ComponentDidMount
  return (
    <View style={styles.container}>

      <Text>This is our Home Screen!</Text>
      <Text>Welcome {userName}</Text> 
      <Image style ={styles.image} source = {{uri: profilePic}}/>
      <QRCode 
        value = {user.uid}
      />
      <Button
        onPress = {logout}
        title = "Log Out"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 250,
    width: 250
  }
});