import React, { useState, useRef } from "react";
import "./LeftPanel.css";

const tabs = [
  {
    className: "item active",
    value: "all",
  },
  {
    className: "item",
    value: "active",
  },
  {
    className: "item",
    value: "completed",
  },
];

const LeftPanel = ({ handleTodosToShow }) => {
  const tabsRefs = useRef([]);
  tabsRefs.current = [];

  const addToRefs = (el) => {
    if (el && !tabsRefs.current.includes(el)) {
      tabsRefs.current.push(el);
    }
  };

  return (
    <div className="left-panel">
      <div className="logo">.todo</div>
      <div className="items">
        {tabs.map((tab) => (
          <button key={tab.value} ref={addToRefs} className={tab.className} value={tab.value} onClick={handleTodosToShow}>
            {tab.value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeftPanel;
