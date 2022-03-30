import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
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

  console.log(todos);

  return (
    <div className="app">
      {todos.map((todo) => (
        <div key={todo._id}>{todo.name}</div>
      ))}
    </div>
  );
};

export default App;
