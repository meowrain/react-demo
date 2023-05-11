import "./style.css";
import { useState, useEffect, createContext } from "react";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
export const todoContext = createContext("");
function App() {
  // 从 LocalStorage 中读取 todos 初始值，或设置为一个空数组
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });
  // 将 todos 存入 LocalStorage
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  // 将 todos 存入 LocalStorage
  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  // 将 todos 存入 LocalStorage
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  // 删除一个 todo
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <div className="App">
      <NewTodoForm addTodo={addTodo} />
      <todoContext.Provider value={{ todos, toggleTodo, deleteTodo }}>
        <TodoList />
      </todoContext.Provider>
    </div>
  );
}

export default App;
