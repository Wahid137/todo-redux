import { useSelector } from "react-redux";
import Todo from "./Todo";

function TodoList() {
  const todos = useSelector((state) => state.todos);

  const filterByStatus = (todo) => {};
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos
        .filter(filterByStatus)
        .filter(filterByColors)
        .map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
    </div>
  );
}

export default TodoList;
