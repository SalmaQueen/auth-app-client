import React from 'react'
import 'leaflet/dist/leaflet.css';
// import {icon} from 'leaflet'
import Navbar from '../Navbar'

import { useMap,MapContainer,TileLayer,Marker, Popup, useMapEvents } from 'react-leaflet';



function LocationMarker() {


  const [position, setPosition] = React.useState(null)
  const map=useMap();
  map.locate()
   useMapEvents({
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position} >
      <Popup>You are here, Do you want to volunteer or make a request?
        <button >Make a request</button>
      </Popup>
      
    </Marker>
  )
}

export default function MapDemo() {


  return (
  <>
  <Navbar/>
    <MapContainer center={[51.505, -0.09]} zoom={14} scrollWheelZoom={false} >
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <LocationMarker/>
</MapContainer>
</>
  )
}
