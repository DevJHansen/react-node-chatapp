import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Join from "./views/join/Join";
import Chat from "./views/chat/Chat";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" exact component={Chat} />
      </Router>
    </div>
  );
}

export default App;
