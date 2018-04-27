const initialState = {
  user: [],
  isLoading: false,
  isSaved: false,
  isError: false
}

const loginReducer = function (state = initialState, action) {
  switch (action.type) {
    case "FAV_USER_PENDING":
      return { ...state, isLoading: true }
    case "FAV_USER_FULFILLED":
      return { ...state, user: action.payload.data, isLoading: false }
    case "LOGIN_USER_FULFILLED":
      return { ...state, isSaved: true }
    case "LOGIN_USER_REJECTED":
      return { ...state, isError: true }
    case "REG_USER_FULFILLED":
      return { ...state, isSaved: true }
    case "REG_USER_REJECTED":
      return { ...state, isError: true }
    default:
      return state
  }
}

export default loginReducer