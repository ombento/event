import React, { Component } from 'react';
import { Button, StyleSheet, View, ImageBackground, BackHandler,Platform } from 'react-native';
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



class Splash extends Component {

 
  constructor(props) {
    super(props)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
}

componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
}


handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
}

  componentDidMount() {  



    setTimeout(() => {
      const reset = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Main' })
        ]
      });
      this.props.dispatch(reset);
  } , 2000)
  }


  render() {
    return (
      <Container style={styles.container} >


        <ImageBackground source={require('../assets/img/tes.jpg')} style={styles.BackgroundImage}>
          <H1 style={styles.title}>MAMPIR JATENG</H1>
          <View style={styles.content}>
          
          </View>
          
        </ImageBackground>


        
      </Container>
    )
  }
}

export default connect()(Splash);

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
