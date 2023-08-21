import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GlobalStyleSheet from '../utilities/GlobalStyleSheet';

const Archive = () => {
  const styles = GlobalStyleSheet();
  return (
    <View style={styles.screen_container}>
      <Text>Archive</Text>
    </View>
  );
};

export default Archive;

const styles = StyleSheet.create({});
