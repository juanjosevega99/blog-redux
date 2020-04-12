import { combineReducers } from "redux";
import usersReducers from "./usersReducers";
import publicationsReducer from "./publicationsReducer";

export default combineReducers({
  usersReducers,
  publicationsReducer
});
