import { useSelector } from "react-redux";
import Todo from "./Todo";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      <Todo />
    </div>
  );
}

export default TodoList;