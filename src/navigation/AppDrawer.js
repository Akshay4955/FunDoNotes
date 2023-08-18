import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Notes from '../screens/Notes';
import Reminders from '../screens/Reminders';
import CreateNewLabel from '../screens/CreateNewLabel';
import Archive from '../screens/Archive';
import Deleted from '../screens/Deleted';

const Drawer = createDrawerNavigator();
const AppDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Notes"
      screenOptions={{headerShown: false}}>
        <Drawer.Screen name="Notes" component={Notes} />
        <Drawer.Screen name="Reminders" component={Reminders} />
        <Drawer.Screen name="Create New Label" component={CreateNewLabel} />
        <Drawer.Screen name="Archive" component={Archive} />
        <Drawer.Screen name="Deleted" component={Deleted} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppDrawer;

const styles = StyleSheet.create({});
