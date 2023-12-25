import { FaTrashAlt } from "react-icons/fa";
import styles from "./Todo.module.css";

export default function Todo({ todo, onUpdate, onDelete }) {
  const handleDelete = () => {
    onDelete(todo);
  };

  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };

  return (
    <li key={todo.id} className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={`checkbox_${todo.id}`}
        checked={todo.status === "completed"}
        onChange={handleChange}
      />
      <label
        htmlFor={`checkbox_${todo.id}`}
        className={`${styles.text} ${
          todo.status === "completed" ? styles.completed : ""
        }`}
      >
        {todo.text}
      </label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={handleDelete}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
