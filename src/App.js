import React, { Component } from 'react'
import LandingPage from './Components/LandingPage'
import Registration from './Components/Registration'
import Login from './Components/Login';
import Dashboard from './Components/Dashboard/Dashboard'

import {
  BrowserRouter  as Router,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute  from './Components/PrivateRoute';




export default class App extends Component {
  render() {
    return (
     <div className="App">
      
   
           <Router >
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <PrivateRoute component={Dashboard} path="/dashboard" />
            <Route path="/register" component={Registration} />
            <Route path="/login" component={Login} />
            
          </Switch>
          
      
       </Router>  
     </div>
       
        
    
    )
  }
}
