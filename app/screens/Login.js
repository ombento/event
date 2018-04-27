import React, { Component } from 'react';
import { Button, StyleSheet, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {
  Container,
  Text,
  Form,
  Item,
  Input,
  H1, Label
} from 'native-base';
import { connect } from 'react-redux';

import {loginUser, favUsers} from '../actions/login'

class Login extends Component {

  handleLogin = () => {
    state = {
      email: "",
      password: ""
    }
  
   // alert('tes');
    this.props.dispatch(loginUser(this.state))
    .then((res)=>{
    //  console.log(res.value.data);
      if(res.value.data == 'OK'){
      const resetToFavorite = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'LoginSuccess' })
        ]
      });
      this.props.dispatch(resetToFavorite);
    }else{
      alert('Email / Password salah !');
    }
    })
  }



  render() {
    return (
      <Container style={styles.container} >


        <ImageBackground source={require('../assets/img/tes.jpg')} style={styles.BackgroundImage}>
          <H1 style={styles.title}>MAMPIR JATENG</H1>
          <View style={styles.content}>
            <View style={styles.inputContainer}>
              <TextInput placeholder='Email' underlineColorAndroid={'transparent'}
                style={styles.input}
                onChangeText={(email) => this.setState({ email })}>

              </TextInput>
              <TextInput placeholder='Password' secureTextEntry={true} underlineColorAndroid={'transparent'}
                style={styles.input}
                onChangeText={(password) => this.setState({ password })}>
              </TextInput>
            </View>
          </View>
          
          {/* BUTTON LOGIN */}
          <TouchableOpacity onPress={()=> this.handleLogin()} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>

          {/* BUTTON REGISTER */}
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('Register')} style={styles.buttonRegister}>
                <Text style={styles.registerText}>Register / Sign up</Text>
          </TouchableOpacity>
        </ImageBackground>


        {/* <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input onChangeText={(username)=>this.setState({username})}/>
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input onChangeText={(password)=>this.setState({password})}/>
            </Item>
            <Button
            onPress={this.handleLogin}
            title="Login" />
        </Form> */}
      </Container>
    )
  }
}

export default connect()(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  title: {
    margin: 40,
    alignSelf: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    textShadowColor: '#252525',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    marginBottom: 10,

  },
  BackgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
  },
  inputContainer: {
    margin: 20,
    marginBottom: 0,
    padding: 20,
    paddingBottom: 10,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(255,255,255,0.2)'
  },
  input: {
    fontSize: 16,
    height: 40,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,1)'
  },
  buttonContainer:{
    margin:10,
    padding:10,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(255,255,255,0.7)'
  },
  buttonText:{
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:'center'
  },
  buttonRegister:{
    margin:10,
    marginLeft: 100,
    marginRight: 100,
    padding:10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(255,255,255,0.7)'
  },
  registerText:{
    fontSize: 12,
    fontStyle: 'italic',
    textAlign:'center'
  }
})
