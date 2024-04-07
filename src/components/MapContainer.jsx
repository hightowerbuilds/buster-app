import { APIProvider, Map, } from "@vis.gl/react-google-maps"
import Directions from "./Directions"
import { useGeolocation } from '../hooks/useGeolocation'
import { Link } from "react-router-dom"
import MapWidget from "./MapWidget"
import { useState } from "react"



export default function MapContainer() {

  const { latitude, longitude } = useGeolocation()
  const [ center, setCenter ] = useState({lat: 47.911, lng: -122.4})
  


  return (
    <div style={{ 
      height: '100vh', 
      width: '100%',  
      }}> 

    <APIProvider apiKey={import.meta.env.VITE_KEY}>
    <Map
      defaultCenter={center}
      defaultZoom={10}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    >
    <div style={{ 
        position: 'absolute',
        zIndex: 0,
        height: 'fit-content',
        width: 300,
        border: '3px black solid',
        borderRadius: 5,
        marginTop: 15,
        marginLeft: 15, 
        padding: 5,
        backdropFilter: 'blur(5px)',
        fontFamily: 'monospace'
      }}>

      <div style={{
        fontSize: 16,
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: 10
      }}>
           <Link to="/dashboard"><h4>DASHBOARD</h4> </Link>
           <Link to="/login"><h4>LOGIN PAGE</h4> </Link>
        {/* <button onClick={moveCenter}>{center} </button> */}

      </div>

        <Directions />

    </div>
            <MapWidget latitude={latitude} longitude={longitude} />
    </Map>
    </APIProvider>
    </div>
  )
}
