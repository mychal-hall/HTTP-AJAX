import React from "react";
import axios from "axios";

export default class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: {
        age: "",
        email: "",
        name: ""
      }
    };
  }
  changeHandler = event => {
    event.persist();
    let value = event.target.value;
    this.setState(prevState => ({
      friend: { ...prevState.friend, [event.target.name]: value }
    }));
  };
  submitHandler = event => {
    event.preventDefault();
    axios
      .post("http://localhost/5000/friends", this.state.item)
      .then(response => {
        this.props.updateFriends(response.data);
        this.props.history.push("/friends");
      })
      .catch(error => console.log(error));
  };
  putHandler = event => {
    event.preventDefault();
    axios.put("http://localhost:5000/friends/${id}", this.state.friend);
  };
}
