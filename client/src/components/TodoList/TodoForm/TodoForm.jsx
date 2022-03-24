import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./TodoForm.css";

const TodoForm = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      alert("Please enter todo");
    } else {
      onSubmit({
        id: nanoid(),
        text: text,
        complete: false,
      });
      setText("");
    }
  };

  return (
    <div>
      <form action="">
        <input type="text" value={text} onChange={handleInputChange} />
        <button type="submit" onClick={handleSubmit}>
          add todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
