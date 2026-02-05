import { TodoItem } from "./todo-item";

export function TodoList({ list, handleComplete, handleDelete }) {
  return (
    <ul className="todo-list">
      {list.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
          />
        );
      })}
    </ul>
  );
}
