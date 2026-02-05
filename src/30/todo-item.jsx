export function TodoItem({ todo, handleComplete, handleDelete }) {
  return (
    <li className="todo-item">
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleComplete(todo.id)}
        />
        <span className={todo.completed ? "text-done" : ""}>{todo.title}</span>
      </div>

      <button
        className="delete-btn"
        // 1.folosim daca nu avem nevoie de parametri
        // V1. handleAdd
        // V2. Folosim ori de cate ori vrem sa trimitem un parametru
        // V2. anomima care apeleaza handleDelete
        onClick={() => handleDelete(todo.id)}
      >
        Sterge
      </button>
    </li>
  );
}
