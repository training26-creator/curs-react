// import "./users.css";
import { useLocaleStorage } from "../33/use-locale-storage";
import { usePosts } from "../33/use-posts";
import styles from "./users.module.css";

export function Users() {
  const posts = usePosts();
  const [inputValue, setInputValue] = useLocaleStorage("inputValue", "buna");

  console.log(posts, "posts users");

  function onChange(event) {
    // event.target.value
    // console.log(event.target.value)
    setInputValue(event.target.value);
  }

  return (
    <div className="todo-container">
      <h1 className={styles.todoTitle}>Componenta - Users</h1>
      <input
        value={inputValue}
        type="text"
        className={styles.input}
        onChange={onChange}
      />
    </div>
  );
}
