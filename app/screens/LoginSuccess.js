import React, { Component } from 'react'
import { Image } from 'react-native';
import {
    Header, Card, CardItem, Thumbnail,
    Button, Icon, Left, Body, Right,
    Container, Content, List,
    ListItem, Text, Spinner, Fab, Footer, Title
} from 'native-base'
import { connect } from 'react-redux'

import { allUsers } from '../actions/users'

class Users extends Component {

    componentWillMount() {
        // store.dispatch
        // this.props.dispatch({type: 'ALL_USERS', payload: []})
        this.props.dispatch(allUsers())
    }

    componentDidMount() {
        // console.log(this.props.usersReducer);
    }

    render() {
        return (
            // <Container>
            //   <Content>
            //     {this.props.usersReducer.isLoading? (
            //       <Spinner/>
            //     ): (
            //       <List>
            //         {this.props.usersReducer.users.map((user)=>(
            //           <ListItem key={user.id}>
            //             <Text>{user.username}</Text>
            //           </ListItem>
            //         ))}
            //       </List>
            //     )}

            //   </Content>
            //   <Fab
            //     style={{ backgroundColor: '#5067FF' }}
            //     position="bottomRight"
            //     onPress={()=> this.props.navigation.navigate('UsersCreate')}
            //   >
            //     <Icon name="add" />
            //   </Fab>
            // </Container>


            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: 'Image URL' }} />
                                <Body>
                                    <Text>NativeBase</Text>
                                    <Text note>GeekyAnts</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{ uri: 'https://gallery101.files.wordpress.com/2018/03/jadwal-agenda-event-semarang-april-2018.jpg' }} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon active name="thumbs-up" />
                                    <Text>12 Likes</Text>
                                </Button>
                            </Left>
                            <Body>
                                <Button transparent>
                                    <Icon active name="chatbubbles" />
                                    <Text>4 Comments</Text>
                                </Button>
                            </Body>
                            <Right>
                                <Text>11h ago</Text>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
                {/* <Footer>
                    <Title>Footer</Title>
                </Footer> */}
            </Container>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        usersReducer: state.usersReducer
    }
}

export default connect(mapStateToProps)(Users)
