import React, { Component } from "react";
import axios from "axios";
import '../../../Components/css/Registration.css'
// import Navbar from '../NavbarTwo'

export default class Request extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      status: "",
      lng: "",
      lat: "",
      type_of_request:""
     
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
    const {title,description, status, lng, lat, type_of_request } = this.state;

    axios.defaults.headers.common.Authorization =localStorage.getItem("token");
    axios
      .post(
        "http://localhost:3000/requests",
        {
         
            title:title,
            description:description,
            status: status,
            lng: lng,
            lat: lat,
            type_of_request: type_of_request
           
          
        }
      )
      .then(response => {
    //  console.log(response);
    this.props.history.push("/messages");
      })
      .catch(error => {
        console.log("error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="wrapped">
        {/* <Navbar/> */}
        <form onSubmit={this.handleSubmit} className="form-edit">
        <input
            type="title"
            name="title"
            placeholder="title"
            value={this.state.title}
            onChange={this.handleChange}
            required
          />
           <input
            type="description"
            name="description"
            placeholder="description"
            value={this.state.description}
            onChange={this.handleChange}
            required
          />
          <input
            type="status"
            name="status"
            placeholder="status"
            value={this.state.status}
            onChange={this.handleChange}
            required
          />

          <input
            type="lng"
            name="lng"
            placeholder="lng"
            value={this.state.lng}
            onChange={this.handleChange}
            required
          />
           <input
            type="lat"
            name="lat"
            placeholder="lat"
            value={this.state.lat}
            onChange={this.handleChange}
            required
          />

          <input
            type="type_of_request"
            name="type_of_request"
            placeholder="type of request"
            value={this.state.type_of_request}
            onChange={this.handleChange}
            required
          />

          <button type="submit">submit</button>
          
        </form>
      </div>
    );
  }
}
