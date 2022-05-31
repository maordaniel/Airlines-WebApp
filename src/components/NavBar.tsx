import React from 'react';
import { Link } from "react-router-dom";
import '../styles/NavBarStyle.css';

function NavBar(){
  return(
      <div className="navbar-container">
        <img src="https://blackrabbit-frontend-assignment.azurewebsites.net/blackrabbit-black-logo.cc2311f3.svg" alt=""/>
        <Link to="/">Home</Link>
      </div>
    )
}

export default NavBar
