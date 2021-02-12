import React, { Component } from "react";
import axios from "axios";






export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      
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
    const { email, password } = this.state;
    

    axios
      .post(
        "http://localhost:3000/api/v1/login",
        {
          
            email: email,
            password: password
          
        }
        
      )
      .then(
        (response) => {
          setUserData({
            token: response.data.jwt,
            isLoggedIn: true,
            user: user,
          });
          localStorage.setItem("token", JSON.stringify(response.data.jwt));
          localStorage.setItem("user", JSON.stringify(data));
         
        },
       
      )
      // .then(response => {
        
      //   console.log(response)
      // })
      .catch(error => {
        console.log("login error", error);
      });
    event.preventDefault();
  }
  render() {
   

    return (
      <div className="wrapped">

        <form onSubmit={this.handleSubmit} className="form-edit">
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

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}





// import React, { useState, useContext } from "react";
// import '../Components/css/Registration.css'

// import { Link, useHistory } from "react-router-dom";
// import axios from 'axios';

// import { UserContext,  ErrorContext } from './ContextFile';


// const Login = (props) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");


//     const [open, setOpen] = React.useState(false);

//   const handleClick = () => {
//     setOpen(true);
//   };

//   const handleClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }

//     setOpen(false);
//   };


 


//   const history = useHistory();

//   const setUserData  = useContext(UserContext);


//   let setError  = useContext(ErrorContext);
//   const [loading, setLoading] = useState(false);

  
  
//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//   };

  
  

  

//   const handleSubmit = async (e) => {
//     //  do stuff
//     e.preventDefault();
//     setLoading(true);


//     const data = {
//       email: email,
//       password: password
//     }




//   let res = await axios
//     .post("http://localhost:3000/auth/signin", {
      
//         email: email,
//         password: password
    
//     })
//     .then(
//       (response) => {
//         setUserData({
//           token: response.data.jwt,
//           isLoggedIn: true,
//           user: data,
//         });
//         localStorage.setItem("token", JSON.stringify(response.data.jwt));
//         localStorage.setItem("user", JSON.stringify(data));
//         setTimeout(() => {
//           window.location.reload();
//         }, 3500);
//         history.push("/feed");
//         setError(false);
//         setLoading(false);
//       },
//       (error) => {
//         // console.log(error.message);
//         handleClick();
//         setLoading(false);
//       }
//     );

//     return res
    

//   };
  

//   return (
//     <>
//              <form onSubmit={handleSubmit} className="form-edit">
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={email}
//             onChange={handleEmail}
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={password}
//             onChange={handlePassword}
//             required
//           />

//           <button type="submit">Login</button>
//         </form>
//     </>
//   );
// };

// export default Login;