import React from "react";
import "./components.css";
import logo11 from './img/logo11.png';

function NavBar(props) {
  return (
    <div className='nav-wrapper'>
          <img className='homeLogo' src={logo11} alt='FriendList Logo'></img>
      <a className="nav" href="/friends">
        Home
      </a>
    </div>
  );
}

export default NavBar;
