import React from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, Image, View } from 'react-native';

function Home(props) {
    return (
        <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
      
    );
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 150,
      height: 150,
      top:10,
      left:10,
      borderRadius: 180,
    },
    
    
  

})

export default Home;