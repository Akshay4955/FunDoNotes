import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NotesHeader from '../components/NotesHeader';
import GlobalStyleSheet from '../utilities/GlobalStyleSheet';
import NotesFooter from '../components/NotesFooter';

const HomeScreen = ({navigation}) => {
  const styles = GlobalStyleSheet();
  const onPressHandler = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.screen_container}>
      <NotesHeader onPressHandler={onPressHandler} />
      <Text style= {{flex: 1}}></Text>
      <NotesFooter />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
