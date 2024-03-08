import { APIProvider, Map } from "@vis.gl/react-google-maps"
import Directions from "./Directions"
import { useGeolocation } from '../hooks/useGeolocation'
import { Link } from "react-router-dom"
import MapWidget from "./MapWidget"



export default function MapContainer() {

  const { latitude, longitude } = useGeolocation()
  
  return (
    <div style={{ 
      height: '100vh', 
      width: '100%',  
      }}> 

    <APIProvider apiKey={import.meta.env.VITE_KEY}>
    <Map
      defaultCenter={{ lat: 48.17, lng: -122.62 }}
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
      </div>

        <Directions />

        <p style={{ margin: 5, fontSize: 18 }}> latitude: {latitude ? latitude : 'loading...'} </p>
        <p style={{ margin: 5, fontSize: 18 }}> longitude: {longitude ? longitude : 'loading...'} </p>
       
    

    </div>
    <MapWidget lat={latitude} lng={longitude} />
    </Map>
    </APIProvider>
    </div>
  )
}
