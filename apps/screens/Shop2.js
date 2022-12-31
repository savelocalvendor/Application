import React from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

function Shop2(props) {

    const [seleted, setSelected]= React.useState("");

    const data = [
        {key:'1',value:'Gujrat'},
        {key:'2',value:'Maharashtra'},
        {key:'3',value:'Delhi'}
    ]
    return (
        <View style={styles.container}>
        <Text style={{fontSize: 30 }}>Signup</Text>
        <Text style={{fontSize: 15, top: 3}}>Please fill basic details to get onboard.</Text>
        <TextInput style={styles.input} placeholder="Enter Address"/>
        <TextInput style={styles.input} placeholder="Enter City"/>
        <TextInput style={styles.input} placeholder="Enter State"/>
        {/* <SelectList data={data} setSelected={setSelected}/>   this is for dropdown */}
        <TextInput style={styles.input} placeholder="Enter Pincode" keyboardType='numeric'/>
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

export default Shop2;
