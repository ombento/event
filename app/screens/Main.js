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

class Main extends Component {



  render() {
    return (
      <Container style={styles.container} >


  
      </Container>
    )
  }
}

export default connect()(Main);
