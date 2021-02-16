import React, { useState } from "react";
import Navbar from './Navbar'
import {login} from '../utils/index'

import { useHistory } from "react-router-dom";
import axios from 'axios';

// import { UserContext } from 'react';



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  // const setUserData = createContext(UserContext);


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
        // localStorage.setItem("user", JSON.stringify(data));
       
        history.push("/dashboard");
        
      },
      (error) => {
        console.log(error);
      
      }
    );

  //   try {
  //     const response = await axios.post("http://localhost:3000/auth/signin", data)

    
  //     localStorage.setItem("token", JSON.stringify(response.data.jwt));
  //     localStorage.setItem("user", JSON.stringify(data));
     
  //     history.push("/dashboard");
  //     // console.log(response);
  //   }
  //   catch(err) {
  
      
  //     console.log(err)
  //   }
    
    

   };
  

  return (
    <div className="wrapped">
      <Navbar/>
  
      <form onSubmit={handleSubmit} className="form-edit">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
          required
        />
  
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
          required
        />
  
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;





