import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Friends from "./components/friends";
import FriendForm from "./components/friendForm";
import Friend from "./components/friend";
import Home from "./components/home";
import NavBar from "./components/navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  updateFriends = newFriend => {
    this.setState({ friends: newFriend });
  };

  componentDidMount() {
    axios.get(`http://localhost:5000/friends`).then(res => {
      const friends = res.data;
      this.setState({ friends });
    });
  }

  render() {
    return (
      <div className="App">
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/friends"
          render={props => (
            <FriendForm {...props} updateFriends={this.updateFriends} />
          )}
        />
        <Route
          exact
          path="/friends"
          render={props => <Friends {...props} friends={this.state.friends} />}
        />
        <Route
          path="/friends/:id"
          render={props => (
            <Friend
              {...props}
              friends={this.state.friends}
              updateFriends={this.updateFriends}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
