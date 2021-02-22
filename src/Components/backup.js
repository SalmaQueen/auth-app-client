// import React, { useState } from "react";
// import Navbar from './Navbar'
// import {login} from '../utils/index'

// import { useHistory } from "react-router-dom";
// import axios from 'axios';
// import './Login.scss'

// // import { UserContext } from 'react';



// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const history = useHistory();

//   // const setUserData = createContext(UserContext);


//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//   };

 
//   const handleSubmit = async (e) => {
//     //  do stuff
//     e.preventDefault();
    


//     const data = {
//       auth: {
//         email: email,
//         password: password,
//       }
//     }




//    axios
//     .post("http://localhost:3000/auth/signin", data)
//     .then(
//       (response) => {
    
//         login(response.data.jwt)
//         // localStorage.setItem("token", JSON.stringify(response.data.jwt));
//         // localStorage.setItem("user", JSON.stringify(data));
       
//         history.push("/dashboard");
        
//       },
//       (error) => {
//         console.log(error);
      
//       }
//     );

//   //   try {
//   //     const response = await axios.post("http://localhost:3000/auth/signin", data)

    
//   //     localStorage.setItem("token", JSON.stringify(response.data.jwt));
//   //     localStorage.setItem("user", JSON.stringify(data));
     
//   //     history.push("/dashboard");
//   //     // console.log(response);
//   //   }
//   //   catch(err) {
  
      
//   //     console.log(err)
//   //   }
    
    

//    };
  

//   return (
//     <>
//       <Navbar/>
  
   

//       <form onSubmit={handleSubmit}className="panel">
//           <div className="state">
//           <i className="fa fa-unlock-alt"></i>
//           <h1>Log in</h1>
//           </div>
//           <div className="form">
//             <input placeholder='Email' type="text" value={email}
//                 onChange={handleEmail} required/>
//             <input placeholder='Password' type="text" value={password}
//                 onChange={handlePassword}
//                 required/>
//             <div className="login">Login</div>
//           </div>
//           <div className="fack"><a href="#">
//             <i className="fa fa-question-circle">
//               </i>Forgot password?</a></div>
//         </form>
//     </>
//   )
// };

// export default Login;


// import React, { Component } from "react";
// import axios from "axios";
// import Navbar from './Navbar'

// import './Login.scss'

// export default class Registration extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       first_name: "",
//       last_name: "",
//       email: "",
//       password: "",
//       password_confirmation: "",
     
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   }

//   handleSubmit(event) {
//     const {first_name,last_name, email, password, password_confirmation } = this.state;

//     axios
//       .post(
//         "http://localhost:3000/auth/signup",
//         {
         
//             first_name:first_name,
//             last_name:last_name,
//             email: email,
//             password: password,
//             password_confirmation: password_confirmation,
           
          
//         }
//       )
//       .then(response => {
//     //  console.log(response);
//     this.props.history.push("/login");
//       })
//       .catch(error => {
//         console.log("registration error", error);
//       });
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <>
//         <Navbar/>
        
//          <form onSubmit={this.handleSubmit} className="panel">
//           <div className="state">
//           <i className="fa fa-unlock-alt"></i>
//           <h1>Signup</h1>
//           </div>
//           <div className="form">
//           <input
//             type="first_name"
//             name="first_name"
//             placeholder="First Name"
//             value={this.state.first_name}
//             onChange={this.handleChange}
//             required
//           />
//            <input
//             type="last_name"
//             name="last_name"
//             placeholder="Last Name"
//             value={this.state.last_name}
//             onChange={this.handleChange}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={this.state.email}
//             onChange={this.handleChange}
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={this.state.password}
//             onChange={this.handleChange}
//             required
//           />

//           <input
//             type="password"
//             name="password_confirmation"
//             placeholder="Password Confirmation"
//             value={this.state.password_confirmation}
//             onChange={this.handleChange}
//             required
//           />
//             <button type="submit" >Register</button>
//           </div>
//           <div className="fack"><a href="#">
//             <i className="fa fa-question-circle">
//               </i>Already have an account?</a></div>
//         </form>
//       </>
//     );
//   }
// }

import React, { Component } from "react";
import axios from "axios";
import Navbar from './Navbar'
import '../Components/css/Registration.css'

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
     
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const {first_name,last_name, email, password, password_confirmation } = this.state;

    axios
      .post(
        "http://localhost:3000/auth/signup",
        {
         
            first_name:first_name,
            last_name:last_name,
            email: email,
            password: password,
            password_confirmation: password_confirmation,
           
          
        }
      )
      .then(response => {
    //  console.log(response);
    this.props.history.push("/login");
      })
      .catch(error => {
        console.log("registration error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <>
        <Navbar/>
        <form onSubmit={this.handleSubmit} className="form-edit">
        <input
            type="first_name"
            name="first_name"
            placeholder="first_name"
            value={this.state.first_name}
            onChange={this.handleChange}
            required
          />
           <input
            type="last_name"
            name="last_name"
            placeholder="last_name"
            value={this.state.last_name}
            onChange={this.handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password_confirmation"
            placeholder="Password confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Register</button>
        </form>
      </>
    );
  }
}


   


   