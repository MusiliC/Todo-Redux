import { combineReducers } from "redux";
import { todoReducers } from "../redux/reducers/todoReducers";

export const reducers = combineReducers({
  allTodos: todoReducers,
});
