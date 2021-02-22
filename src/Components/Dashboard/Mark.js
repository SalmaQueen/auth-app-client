import React from 'react'
import {Marker} from 'react-leaflet'
import  { useState, useEffect } from 'react';
import {  Popup } from 'react-leaflet';
import axios from 'axios'

export default function Mark() {

    const [location, setLocation] = useState([]);

    useEffect(() => {
        axios.defaults.headers.common.Authorization =localStorage.getItem("token");
        axios.get(`http://localhost:3000/requests`).then(
          res=>{
              console.log(res);
              this.setLocation({requests:res.data});
            //   console.log(localStorage.getItem("user"))
          }  
        );
    },[location]);

console.log(location);

 
    return (
        <>
        {/* <div >hello</div> */}
        {location.map(item=>(
             <Marker key={item.id} location={[12233.0, 32222.9]}>
             <Popup>You are here!
             </Popup>
             
             </Marker>


))}
       
       </> 
    )
}
