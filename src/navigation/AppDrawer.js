import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Notes from '../screens/Notes';
import Reminders from '../screens/Reminders';
import CreateNewLabel from '../screens/CreateNewLabel';
import Archive from '../screens/Archive';
import Deleted from '../screens/Deleted';
import Icon from 'react-native-vector-icons/AntDesign';
import ArchiveIcon from 'react-native-vector-icons/Foundation';
import * as Constant from '../utilities/Constant';
import IonIcon from 'react-native-vector-icons/Ionicons'

const Drawer = createDrawerNavigator();
const AppDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Notes"
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: Constant.color.mediumColor,
          },
          drawerContentStyle: {
            borderRadius: 50,
          },
          drawerActiveBackgroundColor: Constant.color.activeBackgorundColor,
          drawerActiveTintColor: Constant.color.activeTintColor,
          drawerInactiveBackgroundColor: Constant.color.mediumColor,
          drawerInactiveTintColor: Constant.color.inActiveTintColor,
        }}>
        <Drawer.Screen
          name="Notes"
          component={Notes}
          options={{
            drawerIcon: focused => (
              <Icon
                name="bulb1"
                size={25}
                color={
                  focused
                    ? Constant.color.activeTintColor
                    : Constant.color.inActiveTintColor
                }
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Reminders"
          component={Reminders}
          options={{
            drawerIcon: (focused) => (
              <Icon
                name="bells"
                size={25}
                color={
                  focused
                    ? Constant.color.activeTintColor
                    : Constant.color.inActiveTintColor
                }
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Create New Label"
          component={CreateNewLabel}
          options={{
            drawerIcon: (focused) => (
              <Icon
                name="plus"
                size={25}
                color={
                  focused
                    ? Constant.color.activeTintColor
                    : Constant.color.inActiveTintColor
                }
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Archive"
          component={Archive}
          options={{
            drawerIcon: (focused) => (
              <ArchiveIcon
                name="archive"
                size={25}
                color={
                  focused
                    ? Constant.color.activeTintColor
                    : Constant.color.inActiveTintColor
                }
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Deleted"
          component={Deleted}
          options={{
            drawerIcon: (focused) => (
              <Icon
                name="delete"
                size={25}
                color={
                  focused
                    ? Constant.color.activeTintColor
                    : Constant.color.inActiveTintColor
                }
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={Deleted}
          options={{
            drawerIcon: (focused) => (
              <Icon
                name="setting"
                size={25}
                color={
                  focused
                    ? Constant.color.activeTintColor
                    : Constant.color.inActiveTintColor
                }
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Help & Feedback"
          component={Deleted}
          options={{
            drawerIcon: (focused) => (
              <IonIcon
                name="help-circle"
                size={25}
                color={
                  focused
                    ? Constant.color.activeTintColor
                    : Constant.color.inActiveTintColor
                }
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppDrawer;

const styles = StyleSheet.create({});
