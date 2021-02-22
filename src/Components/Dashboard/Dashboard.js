import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import MapDemo from './Map'
import Request from './Requests/Request'
import {
    BrowserRouter  as Router,
    Switch,
    Route
  } from "react-router-dom";
import Navbar from './NavbarTwo'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                  <Navbar/>

<Router >
<Switch>
<Redirect from="/dashboard" to="/dashboard/map" />
  <Route path="/dashboard/request" component={Request} />
  <Route path="/dashboard/map" component={MapDemo} />

</Switch>
</Router> 
{/* <MapDemo/> */}        
            </div>
        )
    }
}
