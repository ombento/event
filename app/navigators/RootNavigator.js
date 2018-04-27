import React, { Component } from 'react';
import {  } from 'react-native';
import { NavigationActions,StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import {Icon,Text,Button} from 'native-base';

import Login from '../screens/Login';
import Register from '../screens/Register';
import LoginSuccess from '../screens/LoginSuccess';
import Todos from '../screens/Todos';
import TodoDetail from '../screens/TodoDetail';
import TodoCreate from '../screens/TodoCreate';
import Users from '../screens/Users';
import UsersCreate from '../screens/UsersCreate';
import Splash from '../screens/Splash';

handleLogout = () => {
  alert('masuk');

    // const logout = NavigationActions.reset({
    //   index: 0,
    //   actions: [
    //     NavigationActions.navigate({ routeName: 'Login' })
    //   ]
    // });
    // this.props.dispatch(logout);

 
}



const SearchStack = StackNavigator({
  Users: { 
    screen: Users,
    navigationOptions: {
      header: null,
      title: 'Search',
      headerStyle:{backgroundColor:'#25CCF7'},
      headerTintColor:'white'
    } 
  },
  UsersCreate: {
    screen: UsersCreate,
    navigationOptions: {
      header: null,
      title: 'Create Acara',
      headerStyle:{backgroundColor:'#25CCF7'},
      headerTintColor:'white'
    }
  },
});

const HomeStack = StackNavigator({
  Todos: { 
    screen: Todos,
    navigationOptions: {
      title: 'Todos',
      headerStyle:{backgroundColor:'#25CCF7'},
      headerTintColor:'white' 
    } 
  },
  TodoCreate: {
    screen: TodoCreate,
    navigationOptions: {
      title: 'Create',
      headerStyle:{backgroundColor:'#25CCF7'},
      headerTintColor:'white' 
    }
  },
}
);

const LoginStack = StackNavigator({
  Login: { 
    screen: Login,
    navigationOptions: {
      title: 'Login',
      headerStyle:{backgroundColor:'#25CCF7'},
      headerTintColor:'white' 
    } 
  },
  LoginSuccess: { 
    screen: LoginSuccess,
    navigationOptions: {
      title: 'Favorite',
      headerRight: <Button transparent><Text>Logout</Text></Button> ,
      
      headerStyle:{backgroundColor:'#25CCF7'},
      headerTintColor:'white' 
    } 
  },
  Register: { 
    screen: Register,
    navigationOptions: {
      title: 'Register',
      headerStyle:{backgroundColor:'#25CCF7'},
      headerTintColor:'white' 
    } 
  }
});



const TabNav = TabNavigator(
  { 
    HomeTab: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    SeacrchTab: {
      screen: SearchStack,
      navigationOptions: {
        tabBarLabel: 'Search',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'ios-search' : 'ios-search-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    LoginTab: {
      screen: LoginStack,
      navigationOptions: {
        tabBarLabel: 'Account',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'ios-person' : 'ios-person-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: true,
      style:{backgroundColor:'white'} 
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled : false,
  }
);

const RootNavigator = StackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {
      header: null
    }
  },
  Main: {
    screen: TabNav,
    navigationOptions: {
      header: null
    }
  },
});


export default RootNavigator;
