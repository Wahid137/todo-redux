import { ADDED, TOGGLED } from "./actionTypes";

import initialState from "./initialState";

const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextTodoId(state),
        },
      ];

      case TOGGLED:
        return state.map((todo)=> {
            if(todo.id !== action.payload){
                return todo
            }
            else{
                ...todo,
                completed: !todo.completed
            }
        })

    default:
      return state;
  }
};

export default reducer;
