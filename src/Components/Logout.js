import { Button } from 'semantic-ui-react';
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class Logout extends Component {
    state={
        navigate:false
    };
    logout=()=>{
        localStorage.removeItem("token");
        this.setState({navigate:true});
    }
    
    render() {
        const {navigate}=this.state;
        if (navigate){
            return <Redirect to='/' push={true}/>
        }
        return <Redirect to='/' push={true}/>
           
        
    }
}
