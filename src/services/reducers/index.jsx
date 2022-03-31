import { combineReducers } from "redux";
import homeItems from "./HomeReducer";
import userList from "./UserListReducer";

export default combineReducers({
  homeItems,
  userList,
});
