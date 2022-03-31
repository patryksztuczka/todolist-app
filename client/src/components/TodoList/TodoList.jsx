import React, { useState, useEffect } from "react";
import axios from "axios";
import Todo from "./Todo/Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/todos");
      const data = response.data.todos;
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo key={todo._id} name={todo.name} />
      ))}
    </div>
  );
};

export default TodoList;
