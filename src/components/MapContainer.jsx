import { APIProvider, Map } from "@vis.gl/react-google-maps"

export default function MapContainer() {
  return (
    <div style={{ height: '100vh', width: '100%' }}> 
    <APIProvider apiKey={import.meta.env.VITE_KEY}>
    <Map
      defaultCenter={{ lat: 47, lng: -122}}
      defaultZoom={10}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    >
   <div style={{
    position: 'absolute',
    zIndex: 0,
    height: '95vh',
    width: 300,
    border: '3px black solid',
    marginTop: 15,
    marginLeft: 15,
    padding: 5,
    backdropFilter: 'blur(5px)',
    fontFamily: 'monospace'

   }}>
   <h2>DIRECTIONS</h2>
   <p>start address</p><input type="text"/>
   <p>end address</p> <input type="text" />
   </div>
 
    </Map>
    </APIProvider>
    </div>
  )
}
