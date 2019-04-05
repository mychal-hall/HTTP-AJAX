import React from "react";
import "./components.css";

function NavBar(props) {
  return (
    <div className='nav-wrapper'>
      <a className="nav" href="/friends">
        View the List
      </a>
    </div>
  );
}

export default NavBar;
