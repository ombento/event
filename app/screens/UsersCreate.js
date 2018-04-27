import React, {Component} from 'react'
import {Container, Content, Form, Label, Item, Input, Button, Text} from 'native-base'
import {connect} from 'react-redux'

import {createUser, allUsers} from '../actions/users'

class UsersCreate extends Component{

  state = {
    username: "",
    email: ""
  }

  handleSubmit(){
    this.props.dispatch(createUser(this.state))
    .then(()=>{
      this.props.dispatch(allUsers())
      this.props.navigation.goBack()
    })
  }

  render(){
    return (
      <Container>
        <Content>
          <Form>
            <Item fixedLabel>
              <Label>Nama Event</Label>
              <Input  placeholder="SPA Masal" onChangeText={(username)=>this.setState({username})}/>
            </Item>
            <Item fixedLabel>
              <Label>Alamat</Label>
              <Input  placeholder="Jl.Maju Mundur enak" onChangeText={(email)=>this.setState({email})}/>
            </Item>
            <Button block style={{marginTop: 30}}onPress={()=> this.handleSubmit()}>
              <Text>Submit</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
}


export default connect()(UsersCreate)
