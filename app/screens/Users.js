import React, {Component} from 'react'
import { Image, StyleSheet } from 'react-native';
import { Header, Card, CardItem, Thumbnail,
   Button, Icon, Left, Body, Right,
  Container, Content, List,
  ListItem, Text, Spinner, Fab
} from 'native-base'
import {connect} from 'react-redux'

import {allUsers} from '../actions/users'

class Users extends Component{

  componentWillMount(){
    // store.dispatch
    // this.props.dispatch({type: 'ALL_USERS', payload: []})
    this.props.dispatch(allUsers())
  }

  componentDidMount(){
   // console.log(this.props.usersReducer.users[0]);
  }

  render(){


    return (
      <Container style={styles.container}>
        <Content>
          {this.props.usersReducer.isLoading? (
            <Spinner/>
          ): (



            <List>
          
              {this.props.usersReducer.users.map((item)=>(
     
                <ListItem>
 
                    <Card>
                    <CardItem>
                            <Left>
                               
                                <Body>
                                    <Text>{item.username}</Text>
                              
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{ uri: 'https://asset.kompas.com/crop/0x60:960x540/780x390/data/photo/2018/03/08/3380540716.jpg' }} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            
                            <Body>
                           
                               
                                    <Text>{item.email}</Text>
                               
                            </Body>
                            <Right>
                            <Button >
                                    
                                    <Text>Detail</Text>
                                </Button>
                            </Right>
                        </CardItem>
                    </Card>

                </ListItem>
              ))}
            </List>
          )}

        </Content>
        <Fab
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={()=> this.props.navigation.navigate('UsersCreate')}
        >
          <Icon name="add" />
        </Fab>
      </Container>


      // <Container>
      //   <Content>
      //     <Card>
      //       <CardItem>
      //         {/* <Left>
      //           <Thumbnail source={{uri: 'Image URL'}} />
      //           <Body>
      //             <Text>NativeBase</Text>
      //             <Text note>GeekyAnts</Text>
      //           </Body>
      //         </Left> */}
      //       </CardItem>
      //       <CardItem cardBody>
      //         <Image source={{uri: 'https://asset.kompas.com/crop/0x60:960x540/780x390/data/photo/2018/03/08/3380540716.jpg'}} style={{height: 200, width: null, flex: 1}}/>
      //       </CardItem>
      //       <CardItem>
      //         <Left>
      //           <Button transparent>
      //             <Icon active name="thumbs-up" />
      //             <Text>12 Likes</Text>
      //           </Button>
      //         </Left>
      //         <Body>
      //           <Button transparent>
      //             <Icon active name="chatbubbles" />
      //             <Text>4 Comments</Text>
      //           </Button>
      //         </Body>
      //         <Right>
      //           <Text>11h ago</Text>
      //         </Right>
      //       </CardItem>
      //     </Card>
      //   </Content>
      // </Container>

    )
  }
}

const mapStateToProps = (state)=>{
  return {
    usersReducer: state.usersReducer
  }
}

export default connect(mapStateToProps)(Users)

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