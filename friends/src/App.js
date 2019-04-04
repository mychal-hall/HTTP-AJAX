import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Friends from "./components/friends";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/friends`).then(res => {
      const friends = res.data;
      this.setState({ friends });
    });
  }

  render() {
    return <Friends friends={this.state.friends} />;
  }
}

export default App;
