import React, { Component } from 'react'
import MapDemo from './Map'
import Request from './Requests/Request'
import {
    BrowserRouter  as Router,
    Switch,
    Route,Redirect
  } from "react-router-dom";
import Navbar from './NavbarTwo'
import AllRequest from './Requests/AllRequest'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
            
                  <Navbar/>


<Switch>

  <Route path="/dashboard/request" component={Request} />
  <Route path="/dashboard/activities" component={AllRequest} />
  <Route path="/dashboard/map" component={MapDemo} />
  <Redirect  from="/dashboard" to="/dashboard/map" />

</Switch>


            </div>
        )
    }
}
