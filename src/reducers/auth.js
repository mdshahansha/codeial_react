import { LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS } from "../actions/actionTypes";

const initalAuthState = {
  user: {},
  error: null,
  isLoggedin: false,
  inProgress: false,
};

export default function auth(state = initalAuthState, action) 
{
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        inProgress: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user:action.user,
        isLoggedin: true,
        inProgress:true,
        error:null
      };
    case LOGIN_FAILED:
      return {
        ...state,
        inProgress: false,
        error:action.error
      };
    default:
        return state;
  }
}
