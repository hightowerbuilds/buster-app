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
   
 
    </Map>
    </APIProvider>
    </div>
  )
}
