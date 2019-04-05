import React from "react";

function Home(props) {
  return (
    <div className='landing'>
      <h1>Welcome to your FriendsList!</h1>
      <a className="start" href="/friends">
        Let's Go!
      </a>
    </div>
  );
}

export default Home;
