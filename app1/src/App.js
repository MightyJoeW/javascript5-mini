import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myName: "Joe"
    };
    // this.state = this.state.bind(this);
  }

  render() {
    return <div className="App">My name is {this.state.myName}</div>;
  }
}

export default App;
