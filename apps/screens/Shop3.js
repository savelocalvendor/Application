import React from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, View } from 'react-native';

function Shop3(props) {
    return (
        <View style={styles.container}>
        <Text style={{fontSize: 30 }}>Signup</Text>
        <Text style={{fontSize: 15, top: 3}}>Please fill basic details to get onboard.</Text>
        <TextInput style={styles.input} placeholder="Select Item Gender"/>
        <TextInput style={styles.input} placeholder="Select Category"/>
        <TextInput style={styles.input} placeholder="Select sub Category"/>
        <TextInput style={styles.input} placeholder="Enter shop timing"/>
        <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
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

export default Shop3;