import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import GlobalStyleSheet from '../utilities/GlobalStyleSheet';
import auth from '@react-native-firebase/auth';

const Login = () => {
  const styles = GlobalStyleSheet();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const createUser = () => {
    auth()
      .createUserWithEmailAndPassword(
        email,
        password,
      )
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  return (
    <View style={styles.auth_screen}>
      <TextInput
        placeholder="Enter Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.auth_input}></TextInput>
      <TextInput
        placeholder="Enter Password"
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.auth_input}></TextInput>
      <TouchableOpacity style={styles.auth_button} onPress={createUser()}>
        <Text style={styles.auth_button_text}>Crete User</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
