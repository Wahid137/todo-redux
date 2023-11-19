import { combineReducers } from "redux";
import filterReducer from "./filters/reducer";
import filterReducer from "./todos/reducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filterReducer,
});
