import React from 'react'
import {Marker} from 'react-leaflet'
import  { useState, useEffect } from 'react';
import {  Popup } from 'react-leaflet';
import axios from 'axios'
import SharedCard from '../Dashboard/Requests/SharedCard'

export default function Mark() {

    const [location, setLocation] = useState([]);

    useEffect(() => {
        axios.defaults.headers.common.Authorization =localStorage.getItem("token");
        axios.get(`http://localhost:3000/requests`).then(
          res=>{
              console.log(res);
              setLocation(res.data);
            //   console.log(localStorage.getItem("user"))
          }  
        );
    },[]);

console.log(location);

 
    return (
        <>
        {/* <div >hello</div> */}
      {location.map(item=>(
         <Marker key={item.id} position={[item.lat, item.lng]}>
         <Popup>
        
      <SharedCard  title={item.title} description={item.description} status={item.status} />
        
                    
         </Popup>
         
         </Marker>
        
        ))}
           



       
       </> 
    )
}
