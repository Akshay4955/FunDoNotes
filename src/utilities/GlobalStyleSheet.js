import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import * as Constant from '../utilities/Constant'

const GlobalStyleSheet = () => {
  return StyleSheet.create({
    screen_container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: Constant.color.backgroundColor,

    },
    notes_header: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      marginHorizontal: Constant.margin.medium,
      marginVertical: Constant.margin.medium,
      height: Constant.height.small,
      width: Constant.width.full,
      borderRadius: Constant.borderRadius.large,
      backgroundColor: Constant.color.lightColor,
    },
    notes_header_text: {
      fontSize: Constant.fontSize.medium,
      fontWeight:'300',
      color: '#ffffff',
    },
  });
};

export default GlobalStyleSheet;
