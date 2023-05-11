import { TodoItem } from "./TodoItem";
import { useContext } from "react";
import { todoContext } from "./App";
export function TodoList() {
    const {todos,toggleTodo,deleteTodo} = useContext(todoContext);
  return (
    <>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => {
          return (
            <>
              <TodoItem
                {...todo}
                key={todo.id}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            </>
          );
        })}
      </ul>
    </>
  );
}
