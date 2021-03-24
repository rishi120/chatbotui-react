import React, { Component } from "react";
import "./App.scss";
import Triggerchatbody from "./components/Chatbot-body";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Triggerchatbody />
      </div>
    );
  }
}

export default App;
