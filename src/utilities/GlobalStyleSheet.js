import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import * as Constant from '../utilities/Constant';

const GlobalStyleSheet = () => {
  return StyleSheet.create({
    screen_container: {
      flex: 1,
      backgroundColor: Constant.color.backgroundColor,
    },
    auth_screen: {
      flex: 1,
      backgroundColor: Constant.color.whiteColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
    auth_input: {
      backgroundColor: Constant.color.activeTintColor,
      color: 'black',
      width: Constant.width.extralarge,
      height: Constant.height.small,
      borderWidth: Constant.borderWidth.medium,
      borderRadius: Constant.borderRadius.medium,
      paddingLeft: Constant.padding.medium,
      marginTop: Constant.margin.large,
    },
    auth_button: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Constant.color.lightColor,
      width: Constant.width.large,
      height: Constant.height.small,
      borderWidth: Constant.borderWidth.medium,
      borderRadius: Constant.borderRadius.large,
      marginTop: Constant.margin.large,
    },
    auth_button_text: {
      fontSize: Constant.fontSize.large,
      fontWeight: 'bold',
      color: Constant.color.whiteColor,
    },
  });
};

export default GlobalStyleSheet;
