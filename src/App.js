import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import TeamList from "./components/TeamList";
import { teams } from "./teams";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <TeamList teams={teams} />
      </div>
    );
  }
}

export default App;
