import React, { Component } from 'react'
import LandingPage from './Components/LandingPage'
import Registration from './Components/Registration'
import Login from './Components/Login';
import {
  BrowserRouter ,
  Switch,
  Route,Link
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
     <div className="App">
   
           <BrowserRouter>


         
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
          <li className="nav-item">
            <Link className="nav-link text-white"  to="/logout">Log out</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>


          <Switch>
            <Route exact path={"/"}>
             <LandingPage/>
             </Route>
             <Route  path="/register">
            <Registration/>
          </Route>
          <Route  path="/login">
           <Login/>
          </Route>
          </Switch>
          
      
       </BrowserRouter>  
     </div>
       
        
    
    )
  }
}
