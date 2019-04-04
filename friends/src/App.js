import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Friends from "./components/friends";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  updateFriends = newFriends => {
    this.setState({ friends: newFriends });
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/friends`).then(res => {
      const friends = res.data;
      this.setState({ friends });
    });
  }

  render() {
    return( 
    <div className='App'>
    <Route exact path='/' render={props=> (<Friends {...props} friends={this.state.friends} />)}/>
    </div>
    )}
}

export default App;
