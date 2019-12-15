import React, { Component } from 'react';
import { Button, View, Text, TextInput, StyleSheet } from 'react-native';

import axios from 'axios';


class LoginOrCreateForm extends Component {
  state = {
    username: '',
    password: '',
    firstName: '',
    lastName: ''
  }

 
  render() {
    const {
      formContainerStyle,
      fieldStyle,
      textInputStyle,
      buttonContainerStyle,
      accountCreateContainerStyle
    } = style;

    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={formContainerStyle}>
          <View style={fieldStyle}>
            <TextInput
              placeholder="username"
              autoCorrect={false}
              autoCapitalize="none"
              style={textInputStyle}
            />
          </View>
          <View style={fieldStyle}>
            <TextInput
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="password"
              style={textInputStyle}
            />
          </View>
        </View>
       
      </View>
    );
  }
}


const style = StyleSheet.create({
  formContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyle: {
    flex: 1,
    padding: 15
  },
  fieldStyle: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    padding: 25
  },
  accountCreateTextStyle: {
    color: 'black'
  },
  accountCreateContainerStyle: {
    padding: 25,
    alignItems: 'center'
  }
});


export default LoginOrCreateForm;
