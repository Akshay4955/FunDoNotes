import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GlobalStyleSheet from '../utilities/GlobalStyleSheet';

const Reminders = () => {
  const styles = GlobalStyleSheet();
  return (
    <View style={styles.screen_container}>
      <Text>Reminders</Text>
    </View>
  );
};

export default Reminders;

const styles = StyleSheet.create({});
