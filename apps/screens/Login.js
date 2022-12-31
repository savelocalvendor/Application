import React from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, View } from 'react-native';

function Login(props) {
    return (
        <View style={styles.container}>
        <Text style={{fontSize: 30 }}>Login or Signup</Text>
        <TextInput style={styles.input} placeholder="Enter Contact Number" keyboardType="numeric"/>
        <Text style={{fontSize: 15, top: 3}}>By continuing, I agree to the terms of Use and Privacy Policy</Text>
        <Button
        title="Continue"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Text style={{fontSize: 15, top: 3}}>Welcome !! Get you shop featured online</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        textAlign: "center",
         justifyContent: "center",
         alignItems: "center",

    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 300,
        borderRadius: 10,
      },

})

export default Login;