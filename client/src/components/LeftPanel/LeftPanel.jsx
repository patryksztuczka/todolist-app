import React, { useState } from "react";
import "./LeftPanel.css";

const LeftPanel = ({ handleTodosToShow }) => {
  const [active, setActive] = useState();

  const handleActiveClass = () => {};

  return (
    <div className="left-panel">
      <div className="logo">.todo</div>
      <div className="items">
        <button className="item active" value="all" onClick={handleTodosToShow}>
          all
        </button>
        <button className="item" value="active" onClick={handleTodosToShow}>
          active
        </button>
        <button className="item" value="completed" onClick={handleTodosToShow}>
          complete
        </button>
      </div>
    </div>
  );
};

export default LeftPanel;
