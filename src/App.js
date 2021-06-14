import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import data from "./db/db.json";

function App() {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    setListData(data.data);
  }, [data.data]);

  return (
    <div className="app">
      <Home data={data.data} />
    </div>
  );
}

export default App;
