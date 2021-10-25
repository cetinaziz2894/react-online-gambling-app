import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { Form, Header, Button, Loader, Message, Item } from "semantic-ui-react";
import "../assets/auth.css";
import { login } from "../actions/auth";
import { setMessage } from "../actions/message";

export default function Login(props) {
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
  
    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);
  
    const dispatch = useDispatch();
  
    const onChangeUsername = (e) => {
      dispatch(setMessage(""));
      const username = e.target.value;
      setUsername(username);
    };
  
    const onChangePassword = (e) => {
      dispatch(setMessage(""));
      const password = e.target.value;
      setPassword(password);
    };

    const handleValidation = () => {
      let formIsValid = true;
      if(!password){
        formIsValid = false;
        dispatch(setMessage("Password cannot be empty"));
      }
      if(typeof username !== "undefined"){
        if(!username.match(/^[a-zA-Z]+$/)){
          formIsValid = false;
          dispatch(setMessage("Name contains only letters"));
        }      	
      }
      if(!username){
        formIsValid = false;
        dispatch(setMessage("Name cannot be empty"));
      }
      return formIsValid;
    }
  
    const handleLogin = (e) => {
      e.preventDefault();
      setLoading(true);
      if (handleValidation()) {
          dispatch(login(username, password))
            .then(() => {
              props.history.push("/home");
              window.location.reload();
            })
            .catch(() => {
              setLoading(false);
            });
        } else {
          setLoading(false);
        }
    };
  
    if (isLoggedIn) {
      return <Redirect to="/home" />;
    }
    return (
        <div className="auth-main">
            <div className="auth-content">
                <div className="auth-card">
                    <Item.Image  textalign={'right'} size='medium' src={process.env.PUBLIC_URL +"images/logo.svg"} />
                    <Header as="h2" color="teal" textalign="center">
                        Log in
                    </Header>
                    <Form.Group size="large" className="auth-form" autoComplete="off">
                      <Form.Input
                      fluid
                      icon="user"
                      iconPosition="left"
                      placeholder="Name"
                      className="auth-input-field"
                      name="username"
                      value={username}
                      onChange={onChangeUsername}
                      />
                      <Form.Input
                      fluid
                      icon="lock"
                      iconPosition="left"
                      placeholder="Password"
                      type="password"
                      className="auth-input-field"
                      name="password"
                      value={password}
                      onChange={onChangePassword}
                      />
                      {message && (
                          <Message negative>
                          <Message.Header>{message}</Message.Header>
                        </Message>
                      )}
                      <Button color="teal" fluid size="huge" onClick={(e)=>handleLogin(e)} disabled={loading}>
                      {loading && (
                          <Loader />
                      )}<span>Login</span>
                      </Button>
                    </Form.Group>
                </div>
            </div>
        </div>
    )
}
