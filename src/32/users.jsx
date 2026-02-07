// import "./users.css";
import styles from './users.modules.css'

export function Users() {
    console.log(styles, 'styles')
  return (
    <div className='todo-container'>
      <h1 className={styles.todoTitle}>Componenta - Users</h1>
    </div>
  );
}
