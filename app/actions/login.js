import axios from 'axios'


export function loginUser(data) {
  return {
    type: "LOGIN_USER",
    payload: axios.post('http://10.0.3.2:8989/api/login', data)
  }
}

export function registerUser(data){
  return {
    type: "REG_USER",
    payload: axios.post('http://10.0.3.2:8989/api/user/registerUser',data)
  }
}

export function favUser() {
  return {
    type: "FAV_USER",
    payload: axios.get('http://rest.learncode.academy/api/bryan_cool/users')
  }
}

