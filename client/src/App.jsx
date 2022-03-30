import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/todos");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div className="app">Helloo</div>;
};

export default App;
