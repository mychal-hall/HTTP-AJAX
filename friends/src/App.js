import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';



class App extends Component {
  state = {
    friends: []
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/friends`)
    .then(res => {
      const friends = res.data;
      this.setState({ friends })
    })
  }

  render() {
    return (
      <ul>
        {this.state.friends.map(friend => <li>{friend.name}</li>)}
      </ul>
    );
  }
}

export default App;
