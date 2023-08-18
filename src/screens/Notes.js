import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NotesHeader from '../components/NotesHeader';
import GlobalStyleSheet from '../utilities/GlobalStyleSheet';

const HomeScreen = () => {
  const styles = GlobalStyleSheet();
  return (
    <View style = {styles.screen_container}>
      <NotesHeader/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});