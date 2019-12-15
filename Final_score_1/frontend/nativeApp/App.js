import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import axios from 'axios';



export default class App extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
    
  }

  onUsernameChange = (text) => {
    this.setState({ username: text });
  }

  onEmailChange = (text) => {
    this.setState({ email: text });
  }

  onPasswordChange = (text) => {
    this.setState({ password: text });
  } 

  onConfirmPasswordChange = (text) => {
    this.setState({confirmPassword: text})
  }


  handleRequest = () =>{

    if (this.state.password == this.state.confirmPassword){

    const payload = { username: this.state.username, email: this.state.email, password: this.state.password } 

   

      // axios.post('http://192.168.100.16:8000/api/auth/register/', payload).then(({data}) => {
      //   console.log('Post response body', data)
      // })

      axios
      .post('http://192.168.100.16:8000/api/auth/register/', payload)
      .then(response => {
        const { token, user } = response.data;
        console.log('Post response body', data)
  
        // We set the returned token as the default authorization header
        // axios.defaults.headers.common.Authorization = `Token ${token}`;
        
        // Navigate to the home screen
        // Actions.main();
        alert("User added")
      })
      .catch(error => console.log(error));
  }


    else{
        alert("password don't match")
    }

  }

  render() {
    return (
      <View >

      <View>
          <View style={{alignItems: 'center', marginTop:100, justifyContent: 'center',}}>
            <TextInput
              placeholder="username"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={this.onUsernameChange}
            
            />
          </View>
        
          <View style={{alignItems: 'center', marginTop:10, justifyContent: 'center',}}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Email"
              onChangeText={this.onEmailChange}
            />
          </View>

          <View style={{alignItems: 'center', marginTop:40, justifyContent: 'center',}}>
            <TextInput
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="password"
              onChangeText={this.onPasswordChange}
            />
          </View>

          <View style={{alignItems: 'center', marginTop:40, justifyContent: 'center',}}>
            <TextInput
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="confirm password"
              onChangeText={this.onConfirmPasswordChange}
            />
          </View>
          
          </View>
          <Button
   onPress={this.handleRequest}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>

        </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
