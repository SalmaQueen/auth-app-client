import React, { Component } from 'react'
import './Registration.css'
import axios from "axios";
import Navbar from './Navbar'

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
    this.props.history.push("/dashboard");
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
      <div className="container register ">
                <div className="row">
                    <div className="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>Welcome</h3>
                        <p>You are 30 seconds away from getting help or get helped!</p>
                        {/* <input type="submit" name="" value="Login"/><br/> */}
                    </div>
                    <div className="col-md-9 register-right">
                      
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading">SignUp</h3>
                                <form className="row register-form" onSubmit={this.handleSubmit}>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="first_name"
            name="first_name" className="form-control" placeholder="First Name *" value={this.state.first_name} onChange={this.handleChange} required />
                                        </div>
                                        <div className="form-group">
                                            <input type="last_name"
            name="last_name" className="form-control" placeholder="Last Name *"  value={this.state.last_name}
            onChange={this.handleChange}
            required />
                                        </div>
                                      
                                        <div className="form-group">
                                            <input type="password"
            name="password" className="form-control" placeholder="Password *" value={this.state.password}
            onChange={this.handleChange}
            required/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password"
            name="password_confirmation" className="form-control"  placeholder="Confirm Password *" value={this.state.password_confirmation}
            onChange={this.handleChange}
            required />
                                        </div>
                                        
                                    </div>
                                    <div className="col-md-6">
                                    <div className="form-group">
                                            <input type="email"
            name="email" className="form-control" placeholder="Email*"  value={this.state.email}
            onChange={this.handleChange}
            required />
                                        </div>

                                       
                                       
                                        <input type="submit" className="btnRegister"  />
                                    </div>
                                </form>
                            </div>
                  
                        </div>
                    </div>
                </div>

            </div>
      </>
    )
  }
}
