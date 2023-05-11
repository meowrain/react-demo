export function TodoItem({completed,id,title,toggleTodo,deleteTodo}){
    return (
        <li key={id}>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />{" "}
        </label>
        {title}
        <button
          className="btn btn-danger"
          onClick={() => deleteTodo(id)}
        >
          Delete
        </button>
      </li>
    )
}