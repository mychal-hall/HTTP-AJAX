import React from "react";
import "./components.css";
import axios from "axios";



function Friend(props) {
  const friend = props.friends.find(
    person => `${person.id}` === props.match.params.id
  );
  if (!props.friends.length || !friend) {
    return <h2>Loading so many friends...</h2>;
  }

  const deleteFriend = event => {
    console.log("Erasing this friend, forever.");
    axios
      .delete(`http://localhost:5000/friends/${friend.id}`)
      .then(response => {
        props.updateFriends(response.data);
        props.history.push("/friends");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="friend-container">
      <div className="friend-header">
        <div className="friend-deets">
          <h2>{friend.name}</h2>
          <p>{friend.email}</p>
        </div>
        <p className='delete' onClick={deleteFriend}>Delete</p>
        <p className='update' onClick={deleteFriend}>Update</p>
      </div>
    </div>
  );
}

export default Friend;
