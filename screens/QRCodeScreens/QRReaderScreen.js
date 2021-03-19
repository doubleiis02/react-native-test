import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>This is our QR Reader Screen!</Text>
      <QRCode 
        value="https://lahacks.com"
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
});