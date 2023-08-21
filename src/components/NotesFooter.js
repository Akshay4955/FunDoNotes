import {View, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import IconTwo from 'react-native-vector-icons/FontAwesome';
import IconThree from 'react-native-vector-icons/Feather';
import IconFour from 'react-native-vector-icons/Ionicons';
import * as Constant from '../utilities/Constant';

const NotesFooter = () => {
  return (
    <View style={styles.notes_footer}>
      <TouchableOpacity>
        <Icon name="checksquareo" size={25} style={styles.footer_Content} />
      </TouchableOpacity>
      <TouchableOpacity>
        <IconTwo name="paint-brush" size={25} style={styles.footer_Content} />
      </TouchableOpacity>
      <TouchableOpacity>
        <IconThree name="mic" size={25} style={styles.footer_Content} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="picture" size={25} style={styles.footer_Content} />
      </TouchableOpacity>
      <TouchableOpacity>
        <IconFour
          name="add"
          size={70}
          style={styles.add_icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  notes_footer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: Constant.height.large,
    backgroundColor: Constant.color.lightColor,
  },
  footer_Content: {
    height: Constant.height.verysmall,
    width: Constant.width.verSmall,
    margin: Constant.margin.medium,
    borderRadius: Constant.borderRadius.small,
  },
  add_icon: {
      marginLeft: Constant.margin.extralarge,
      marginBottom: Constant.margin.large,
  },
});

export default NotesFooter;
