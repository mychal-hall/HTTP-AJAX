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
      .post("http://localhost:5000/friends", this.state.friend)
      .then(response => {
        this.props.updateFriends(response.data);
        this.props.history.push("/friends");
        event.persist();
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <h2>Have a New Friend?</h2>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="age"
            onChange={this.changeHandler}
            placeholder="Age"
            value={this.state.friend.age}
          />
          <input
            type="text"
            name="email"
            onChange={this.changeHandler}
            placeholder="Email"
            value={this.state.friend.email}
          />
          <input
            type="text"
            name="name"
            onChange={this.changeHandler}
            placeholder="Name"
            value={this.state.friend.name}
          />
          <button type="submit">Add your new friend!</button>
        </form>
      </div>
    );
  }
}
