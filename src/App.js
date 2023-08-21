import React from 'react';
import {View, Text} from 'react-native';
import AppDrawer from './navigation/AppDrawer';
import HomeScreen from './screens/Notes';
import Login from './auth/UserRegistration';
import UserRegistration from './auth/Login';

const App = () => {
  return (
    <UserRegistration/>
  // <AppDrawer />
  );
};

export default App;
