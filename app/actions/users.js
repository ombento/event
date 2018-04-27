import axios from 'axios'

// export function allUsers(){
//   return {
//     type: "ALL_USERS",
//     payload: [
//       {id: 1, username: "beni_cool"},
//       {id: 2, username: "bryan_cool"},
//       {id: 3, username: "gofur_cool"},
//     ]
//   }
// }

export function allUsers(){
  return {
    type: "ALL_USERS",
    payload: axios.get('http://10.0.3.2:8989/api/user/allUser')
  }
}

export function getUser(){
  return {}
}

export function createUser(data){
  return {
    type: "CREATE_USER",
    payload: axios.post('http://10.0.3.2:8989/api/user/createUser', data)
  }
}
