import React, { useState } from "react";
import Navbar from './Navbar'
import {login} from '../utils/index'

import { useHistory } from "react-router-dom";
import axios from 'axios';
import './Login.scss'

// import { UserContext } from 'react';



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();



  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

 
  const handleSubmit = async (e) => {
    //  do stuff
    e.preventDefault();
    


    const data = {
      auth: {
        email: email,
        password: password,
      }
    }




   axios
    .post("http://localhost:3000/auth/signin", data)
    .then(
      (response) => {
        
        login(response.data.jwt)
        // localStorage.setItem("token", JSON.stringify(response.data.jwt));
        // localStorage.setItem("user", response.data)
        // console.log(response)
       
        history.push("/dashboard");
        
      },
      (error) => {
        console.log(error);
      
      }
    );

   };
  

  return (
    <>
      <Navbar/>
  
   

      <form onSubmit={handleSubmit} className="panel">
          <div className="state">
          <i className="fa fa-unlock-alt"></i>
          <h1>Log in</h1>
          </div>
          <div className="form">
          <input placeholder='Email' type="text" value={email}
                onChange={handleEmail} required/>
            <input placeholder='Password' type="text" value={password}
                onChange={handlePassword}
                required/>
            <button type="submit" className="login">Login</button>
          </div>
          <div className="fack"><a href="#">
            <i className="fa fa-question-circle">
              </i>Forgot password?</a></div>
        </form>
    </>
  )
};

export default Login;



   



