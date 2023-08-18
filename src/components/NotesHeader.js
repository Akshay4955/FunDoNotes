import {Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import * as Constant from '../utilities/Constant';
import {scaleHeight, scaleWidth, scaleSize} from '../utilities/ScaleComponent';
import GlobalStyleSheet from '../utilities/GlobalStyleSheet';

const NotesHeader = () => {
  const styles = GlobalStyleSheet();
  const [text, onChangeText] = useState('');
  return (
    <View style = {styles.notes_header}>
      <TextInput
        style={styles.notes_header_text}
        onChangeText={onChangeText}
        placeholder='Search your notes'
        value={text}
      />
    </View>
  );
};

export default NotesHeader;
