import {TextInput, View, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Constant from '../utilities/Constant';

const NotesHeader = ({onPressHandler}) => {
  const [text, onChangeText] = useState('');
  return (
    <View style={styles.notes_header}>
      <TouchableOpacity onPress={onPressHandler}>
        <Icon name="menu" size={25} style={styles.header_Content} />
      </TouchableOpacity>
      <TextInput
        style={styles.notes_header_text}
        onChangeText={onChangeText}
        placeholder="Search your notes"
        value={text}
      />
      <TouchableOpacity>
        <MaterialIcon
          name="view-agenda-outline"
          size={25}
          style={styles.header_Content}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../assets/a.png')}
          style={styles.header_Content}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  notes_header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: Constant.margin.medium,
    marginVertical: Constant.margin.medium,
    height: Constant.height.small,
    width: Constant.width.full,
    borderRadius: Constant.borderRadius.large,
    backgroundColor: Constant.color.lightColor,
  },
  notes_header_text: {
    fontSize: Constant.fontSize.small,
    fontWeight: '300',
    color: Constant.color.whiteColor,
    width: Constant.width.extralarge,
    marginLeft: Constant.margin.medium,
  },
  header_Content: {
    height: Constant.height.verysmall,
    width: Constant.width.verSmall,
    marginLeft: Constant.margin.medium,
    borderRadius: Constant.borderRadius.small,
  },
});

export default NotesHeader;
