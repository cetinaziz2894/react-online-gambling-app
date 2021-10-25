import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import modal from "./modal";
import content from "./content";

export default combineReducers({
  auth,
  message,
  modal,
  content
});