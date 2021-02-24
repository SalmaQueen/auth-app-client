import React from 'react'
import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";

export default function Navbar() {
  const history = useHistory();
  const handleLogout =()=> {
    // e.preventDefault();
    localStorage.removeItem("token"); 
    history.push("/");

  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-dark navbar-custom fixed-top">
    <div className="container ">
      <Link className="navbar-brand text-white" to="/">One Power</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
        
          <li className="nav-item">
            <Link className="nav-link text-white" to="/register">Register</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/login">Log In</Link>
          </li>
          {/* <li className="nav-item">
            <button className="nav-link text-white"  onClick={handleLogout}>Log out</button> 
          </li> */}
        </ul>
      </div>
    </div>
  </nav>
      
    </div>
  )
}

