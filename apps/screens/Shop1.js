import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, View } from 'react-native';


const Shop1 = ({navigation}) => {
    const [ownername, setOwnername] = useState("");
    const [shopname, setShopname] = useState("");
    const [number, setNumber] = useState("");
    const [emailid, setEmailid] = useState("");
    console.log(ownername,shopname,number,emailid);
    const submit = () => {
        if(ownername!="" && shopname!="" && number!="" && emailid!="")
        {
        navigation.navigate("Profile"); 
        }
        else{
         Alert.alert('Please fill all details');
        }
    }
// }

// function Shop1(props) {
    return (
        <View style={styles.container}>
        <Text style={{fontSize: 30 }}>Signup</Text>
        <Text style={{fontSize: 15, top: 3}}>Please fill basic details to get onboard.</Text>
        <TextInput style={styles.input} value={ownername} onChangeText={ (actualdata) => setOwnername(actualdata)} placeholder="Enter Owner Name"/>
        <TextInput style={styles.input} value={shopname} onChangeText={ (actualdata) => setShopname(actualdata)}placeholder="Enter Shop Name"/>
        <TextInput style={styles.input} value={number} onChangeText={ (actualdata) => setNumber(actualdata)}placeholder="Enter Contact Number" keyboardType="numeric"/>
        <TextInput style={styles.input} value={emailid} onChangeText={ (actualdata) => setEmailid   (actualdata)}placeholder="Enter Email Id"/>
        <Button
        title="Proceed"
        onPress={() => submit()}
        // onPress={() => Alert.alert('Simple Button pressed')}


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

export default Shop1;