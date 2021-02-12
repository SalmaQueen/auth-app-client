import React, { Component } from "react";
import axios from "axios";
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
     console.log(response.data);
      })
      .catch(error => {
        console.log("registration error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="wrapped">
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
      </div>
    );
  }
}