import { combineReducers } from 'redux';

import nav from './nav';
import todosReducer from './todos'
import usersReducer from './users'
import loginReducer from './login'
const reducers = combineReducers({
  nav,
  todosReducer,
  usersReducer,
  loginReducer,
});

export default reducers;
