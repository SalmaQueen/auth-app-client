import React, { Component } from "react";
import axios from "axios";

 class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: ""
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
        "https://ancient-caverns-87573.herokuapp.com/login",
        {
          user: {
            email: email,
            password: password
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        // if (response.data.logged_in) {
        //   this.props.handleSuccessfulAuth(response.data);
        // }
        console.log(response.data);
      })
      .catch(error => {
        console.log("login error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
export default Login;
// import React, { Component } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import axios from "axios";

// import Home from "./Home";
// import Dashboard from "./Dashboard";

// export default class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       loggedInStatus: "NOT_LOGGED_IN",
//       user: {}
//     };

//     this.handleLogin = this.handleLogin.bind(this);
//     this.handleLogout = this.handleLogout.bind(this);
//   }

//   checkLoginStatus() {
//     axios
//       .get("http://localhost:3000/logged_in", { withCredentials: true })
//       .then(response => {
//         if (
//           response.data.logged_in &&
//           this.state.loggedInStatus === "NOT_LOGGED_IN"
//         ) {
//           this.setState({
//             loggedInStatus: "LOGGED_IN",
//             user: response.data.user
//           });
//         } else if (
//           !response.data.logged_in &
//           (this.state.loggedInStatus === "LOGGED_IN")
//         ) {
//           this.setState({
//             loggedInStatus: "NOT_LOGGED_IN",
//             user: {}
//           });
//         }
//       })
//       .catch(error => {
//         console.log("check login error", error);
//       });
//   }

//   componentDidMount() {
//     this.checkLoginStatus();
//   }

//   handleLogout() {
//     this.setState({
//       loggedInStatus: "NOT_LOGGED_IN",
//       user: {}
//     });
//   }

//   handleLogin(data) {
//     this.setState({
//       loggedInStatus: "LOGGED_IN",
//       user: data.user
//     });
//   }

//   render() {
//     return (
//       <div className="app">
//         <BrowserRouter>
//           <Switch>
//             <Route
//               exact
//               path={"/"}
//               render={props => (
//                 <Home
//                   {...props}
//                   handleLogin={this.handleLogin}
//                   handleLogout={this.handleLogout}
//                   loggedInStatus={this.state.loggedInStatus}
//                 />
//               )}
//             />
//             {/* <Route
//               exact
//               path={"/dashboard"}
//               render={props => (
//                 <Dashboard
//                   {...props}
//                   loggedInStatus={this.state.loggedInStatus}
//                 />
//               )}
//             /> */}
//           </Switch>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }