import React, { Component } from 'react'
import axios from "axios";
import './Request.css'
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
        <form className="form-edit">
          <h1><b>Make A Request</b></h1>
      
        <input
            type="title"
            name="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleChange}
            required
          />
         
           <input
            type="description"
            name="description"
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleChange}
            required
          />
         
          <input
            type="status"
            name="status"
            placeholder="Status"
            value={this.state.status}
            onChange={this.handleChange}
            required
          />
       
          <input
            type="lng"
            name="lng"
            placeholder="Longtitude"
            value={this.state.lng}
            onChange={this.handleChange}
            required
          />
          
           <input
            type="lat"
            name="lat"
            placeholder="Latitude"
            value={this.state.lat}
            onChange={this.handleChange}
            required
          />
       
          <input
            type="type_of_request"
            name="type_of_request"
            placeholder="Type of request"
            value={this.state.type_of_request}
            onChange={this.handleChange}
            required
          />

        
        <input className="btn btn-secondary" type="submit" value="Submit"/>
    </form>
        
      </div>
    )
  }
}
