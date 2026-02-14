import { TodoItem } from "./todo-item";

export function TodoList({ list, name, handleComplete, handleDelete }) {
  return (
    <ul className="todo-list">
      {list.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            name={name}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
          />
        );
      })}
    </ul>
  );
}
