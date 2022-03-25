import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./Todo.css";

const Todo = ({ text, todo, toggleComplete, onDelete }) => {
  return (
    <div className="todo">
      <input type="checkbox" name="" id="" onClick={toggleComplete} />
      <div className="text">{text}</div>
      <div className="buttons">
        <button>
          <EditIcon fontSize="small" />
        </button>
        <button onClick={onDelete}>
          <DeleteIcon fontSize="small" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
