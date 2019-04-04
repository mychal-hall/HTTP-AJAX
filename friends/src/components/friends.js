import React, { Component } from "react";
import axios from "axios";

export default class Friends extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.friends.map(friend => (
          <li>{friend.name}</li>
        ))}
      </ul>
    );
  }
}
