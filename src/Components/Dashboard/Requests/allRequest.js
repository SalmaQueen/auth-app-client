import axios from 'axios'
import React, { Component } from 'react'

export default class allRequest extends Component {
    state={
        requests:[]
    }
    componentDidMount(){
        axios.get(`http://localhost:3000/requests`).then(
          res=>{
              console.log(res);
              this.setState({requests:res.data});
          }  
        );

    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.requests.map(request=>(
                        <li key={request.id}>{request.title}</li>
                        // <li >{request.description}</li>
                    ))}
                </ul>
                
            </div>
        )
    }
}
