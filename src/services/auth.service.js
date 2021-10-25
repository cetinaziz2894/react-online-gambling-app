import { useDispatch } from "react-redux";
import { setMessage } from "../actions/message";

const API_URL = "http://localhost:3001/";

const login = (username, password) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password
      })
    };
    
    return fetch(API_URL + "login", requestOptions)
      .then(response => response.json())
      .then((data) => {
        if (data.status === "success") {
          localStorage.setItem("user", JSON.stringify(data.player));
          localStorage.setItem("username", username);
        }
        return data;
      })
      .catch((error) => {
        console.error('Error:', error);
        useDispatch(setMessage(error));
      })
  };
  
  const logout = (username) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "username":username
      })
    };
    return fetch(API_URL + "logout", requestOptions)
      .then((data) => {
        if (data.status === 200) {
          localStorage.removeItem("user");
          localStorage.removeItem("username");
        }
        return data;
      });
  };

  // eslint-disable-next-line import/no-anonymous-default-export
  export default {
    login,
    logout,
  };