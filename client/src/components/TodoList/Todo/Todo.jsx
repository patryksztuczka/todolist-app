import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Todo.css";

const Todo = ({ text, todo, toggleComplete, onDelete }) => {
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="buttons">
        <button onClick={toggleComplete}>
          <CheckIcon fontSize="small" />
        </button>
        <button onClick={onDelete}>
          <DeleteIcon fontSize="small" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
