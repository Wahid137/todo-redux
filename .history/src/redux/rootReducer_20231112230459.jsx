import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filterReducer,
});
