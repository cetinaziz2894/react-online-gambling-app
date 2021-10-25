import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
  } from "../actions/types";
  
const user = JSON.parse(localStorage.getItem("user"));
const username = localStorage.getItem("username");
  
const initialState = user
? { isLoggedIn: true, user, username }
: { isLoggedIn: false, user: null, username:null };

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          user: payload.user,
          username:payload.username
        };
      case LOGIN_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
          username:null
        };
      case LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
          username:null
        };
      default:
        return state;
    }
  }