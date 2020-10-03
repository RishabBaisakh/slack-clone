import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <h1>Let's start cloning slack</h1>

      <Header />

      <div className="app_body">
        {/* Sidebar */}
        <Sidebar />
      </div>
      {/* React router -> Chat screen */}
    </div>
  );
}

export default App;
