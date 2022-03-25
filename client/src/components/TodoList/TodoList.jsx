import React, { useState } from "react";
import TodoForm from "./TodoForm/TodoForm";
import Todo from "./Todo/Todo";
import LeftPanel from "../LeftPanel/LeftPanel";
import "./TodoList.css";

const TodoList = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [todosToShow, setTodosToShow] = useState("all");

  const addTodo = (todo) => {
    setTodoItems([todo, ...todoItems]);
  };

  const toggleComplete = (id) => {
    setTodoItems(
      todoItems.map((todoItem) => {
        if (todoItem.id === id) {
          return {
            id: todoItem.id,
            text: todoItem.text,
            complete: !todoItem.complete,
          };
        } else {
          return todoItem;
        }
      })
    );
  };

  const handleDelete = (id) => {
    setTodoItems(todoItems.filter((todoItem) => todoItem.id !== id));
  };

  const handleTodosToShow = (e) => {
    setTodosToShow(e.target.value);
  };

  let todosToRender = [];

  if (todosToShow === "all") {
    todosToRender = todoItems;
  } else if (todosToShow === "active") {
    todosToRender = todoItems.filter((todoItem) => todoItem.complete === false);
  } else if (todosToShow === "completed") {
    todosToRender = todoItems.filter((todoItem) => todoItem.complete === true);
  }

  return (
    <div className="container">
      <LeftPanel handleTodosToShow={handleTodosToShow} />
      <div className="todo-list">
        {todosToRender.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            todo={todo}
            toggleComplete={() => toggleComplete(todo.id)}
            onDelete={() => handleDelete(todo.id)}
          />
        ))}
      </div>
      <TodoForm onSubmit={addTodo} />
    </div>
  );
};

export default TodoList;
