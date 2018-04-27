import React, { Component } from 'react';
import {
  Container, Text, Content, List,
  ListItem, Fab, Body, Right,
  Form, Item, Input, Icon
} from 'native-base';
import { Button, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { allTodos } from '../actions/todos';

class Todos extends Component {

  constructor() {
    super();
  }

componentWillMount(){

}
  componentDidMount() {
    this.props.allTodos();

 
  }

  handleCreate = () => {
    const navigateToTodoCreate = NavigationActions.navigate({
      routeName: 'TodoCreate'
    });
    this.props.navigation.dispatch(navigateToTodoCreate);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <List>
            { this.props.todosReducer.todos.map((item, index) => {
              return (
                <ListItem key={index} >
                  <Body>
                    <Text>{item.name}</Text>
                    <Text note>{item.address}</Text>
                  </Body>
                </ListItem>
              )
            }) }
          </List>
        </Content>

        <Fab onPress={this.handleCreate} >
          <Icon name="add" />
        </Fab>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todosReducer: state.todosReducer
  }
}

export default connect(mapStateToProps, { allTodos })(Todos);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})