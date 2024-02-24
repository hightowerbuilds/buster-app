


import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps"
import { useEffect, useState } from "react";


export default function Directions() {
    const map = useMap();
    const routesLibrary = useMapsLibrary('routes')
    const [ directionsService, setDirectionsService ] = useState('')
    const [ directionsRenderer, setDirectionsRenderer ] = useState('')
    const [ routes, setRoutes ] = useState([])
    const [ routeIndex, setRouteIndex ] = useState(0);
    const selected = routes[routeIndex];
    
    const [ startAddress, setStartAddress ] = useState('')
    const [ endAddress, setEndAddress ] = useState('')

    useEffect(() => {
        if(!routesLibrary || !map) return;  
        setDirectionsService(new routesLibrary.DirectionsService())
        setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }))
       
    }, [routesLibrary, map])



    useEffect(() => {
        if(!directionsService || !directionsRenderer) return;
        directionsService.route({
            origin: startAddress,
            destination: endAddress,
            travelMode: google.maps.TravelMode.DRIVING,
            provideRouteAlternatives: true
        }).then( response => {
            directionsRenderer.setDirections(response)
            setRoutes(response.routes);
        })
    }, [ directionsService, directionsRenderer, startAddress, endAddress ])

    console.log(routes[0]?.legs[0].steps.length)
    useEffect(() => {
        if(!directionsRenderer ) return;
        directionsRenderer.setRouteIndex(routeIndex)
    }, [routeIndex, directionsRenderer])

    const distance = routes[0]?.legs[0].distance.text
    const duration = routes[0]?.legs[0].duration.text
    const steps = routes[0]?.legs[0].steps.length

  return (
    <div style={{ padding: 0}}>
        <p style={{fontSize: 18}}>START</p> 
        <input 
            onChange={(e) => setStartAddress(e.target.value)} 
            type="text" 
            value={startAddress}
            style={{ width: 290, height: 20, fontFamily: 'inherit', }} 
            />
        <br />
       <p style={{ margin: 5, fontSize: 18}}>{startAddress}</p>
        <p style={{fontSize: 18}}>END</p> 
        <input 
            onChange={(e) => setEndAddress(e.target.value)} 
            type="text" 
            value={endAddress}   
            style={{ width: 290, height: 20, fontFamily: 'inherit'}} 
            />
        <br />
        <p style={{ margin: 5, fontSize: 18}}>{endAddress}</p>
        <p style={{ margin: 5, fontSize: 18}}>distance: {distance}</p>
        <p style={{ margin: 5, fontSize: 18}}>duration: {duration}</p>
        <p style={{ margin: 5, fontSize: 18}}># of steps: {steps}</p>
    </div>
  );
}

