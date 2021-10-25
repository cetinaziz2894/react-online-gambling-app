import React, { useEffect } from "react";
import { Router, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import './App.css';
import Main from './components/Main';
import Login from './components/Login';
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  return (
    <Router history={history}>
    <Route exact path={["/", "/home"]} component={Main} />
    <Route path="/login" component={Login} />
  </Router>
  );
}

export default App;
