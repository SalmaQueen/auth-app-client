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
      <nav className="navbar navbar-expand-lg  navbar-dark navbar-custom bg-dark fixed-top">
    <div className="container ">
      <Link className="navbar-brand text-white" to="/">One Power</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">


        <Link className="btn btn-secondary bg-dark text-white edit" 
         to="/dashboard/request"

        >Make a request</Link>



            <li className="nav-item">
            <Link className="nav-link text-white" to="/dashboard/map">Map</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/dashboard/activities">Activities</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/messages">Messages</Link>
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

