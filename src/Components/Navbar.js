import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
    <nav className="navbar navbar-expand-lg  navbar-dark navbar-custom fixed-top">
    <div className="container ">
      <a className="navbar-brand text-white" href="#">One Power</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link text-white" href="/Register">Register</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/Login">Log In</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white"  href="/Logout">Log out</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
            </div>
        )
    }
}
