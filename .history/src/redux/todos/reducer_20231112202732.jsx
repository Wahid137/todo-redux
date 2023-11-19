import { ADDED } from "./actionTypes";

import initialState from "./initialState";

const nextTodoId = (todos) => {
    const maxId = todos.reduce((maxId, todo)=> Math.max(maxId, todo.id), -1)
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
        return[
            ...state,
            {
                id: 
            }
        ]
      

    default:
      return state;
  }
};

export default reducer;
