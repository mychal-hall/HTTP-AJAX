import React, { Component } from "react";
import "./components.css";

function Friends(props) {
  function routeToFriend(event, friend) {
    event.preventDefault();
    props.history.push(`/friends/${friend.id}`);
  }
  return (
    <div className="friend-container">
      {props.friends.map(friend => (
        <div
          className="friend-deets"
          onClick={event => routeToFriend(event, friend)}
          key={friend.id}
        >
          <h2>{friend.name}</h2>
          <p>{friend.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Friends;
