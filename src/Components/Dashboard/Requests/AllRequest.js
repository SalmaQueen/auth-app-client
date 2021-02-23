import axios from 'axios'
import React, { Component } from 'react'
import SharedCard from './SharedCard'

export default class AllRequest extends Component {
    state={
        requests:[]
    }
    componentDidMount(){
        axios.defaults.headers.common.Authorization =localStorage.getItem("token");
        axios.get(`http://localhost:3000/userrequest`).then(
          res=>{
              console.log(res);
              this.setState({requests:res.data});
            //   console.log(localStorage.getItem("user"))
          }  
        );

    }

    
    render() {
        return (
            <div className="mt-5">
                <ul>
                    {this.state.requests.map(request=>(
                        <div className="col-md-4  col-sm-12">
                        <SharedCard key={request.id} title={request.title} description={request.description} status={request.status} />
        
                    </div>
                    ))}
                </ul>
                
            </div>
        )
    }
}
