import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Shop1 from './apps/screens/Shop1';
import Shop2 from './apps/screens/Shop2';
import Shop3 from './apps/screens/Shop3';
import Login from './apps/screens/Login';
import Home from './apps/screens/Home';
import FetchAPIExample from './apps/screens/FetchAPIExample';
// import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName= "Shop1" >
        <Stack.Screen
          name="Home"
          component= {Shop1}
        />
        <Stack.Screen name="Profile" component={Shop2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


// export default function App() {
//   console.log("App Executed")

//   return (
//      <Shop1/>
//     // <Shop2/>
//     // <Shop3/>,
//     // <Login/>
//     // <FetchAPIExample/>
    
//   );
// }
  