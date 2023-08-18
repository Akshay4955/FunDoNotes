import React from 'react';
import { View, Text } from 'react-native';
import AppDrawer from './navigation/AppDrawer';
import HomeScreen from './screens/Notes';

const App = () => {
  // <AppDrawer/>
  return (
  // <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
  //     <Text style= {{color: 'red'}}>Akshay Shedge</Text>
  // </View>
  <AppDrawer/>
  )  
};

export default App;