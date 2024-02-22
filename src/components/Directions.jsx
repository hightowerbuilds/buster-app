


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
    const leg = selected?.legs[0]
    const [ startAddress, setStartAddress ] = useState('')


    useEffect(() => {
        if(!routesLibrary || !map) return;  
        setDirectionsService(new routesLibrary.DirectionsService())
        setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }))
       
    }, [routesLibrary, map])



    useEffect(() => {
        if(!directionsService || !directionsRenderer) return;
        directionsService.route({
            origin: startAddress,
            destination: '1027 Toledano St. New Orleans, LA 70115',
            travelMode: google.maps.TravelMode.DRIVING,
            provideRouteAlternatives: true
        }).then( response => {
            directionsRenderer.setDirections(response)
            setRoutes(response.routes);
        })
    }, [ directionsService, directionsRenderer, startAddress ])

    console.log(routes)

    useEffect(() => {
        if(!directionsRenderer) return;
        directionsRenderer.setRouteIndex(routeIndex)
    }, [routeIndex, directionsRenderer])

    const answer = routes.map((route, index) => <li key={route.summary}> <button style={{fontFamily: 'monospace'}} onClick={() => setRouteIndex(index)}>{route.summary}</button> </li> )

    if(!leg) return null;


  return (
    <div style={{ 
        height: 'fit-content',
        width: 'fit-content',
        padding: 2, 
        left: 10,
        border: '2px black solid',
        position: 'absolute',
        zIndex: 0,
        fontFamily: 'monospace',
    
      }}>
        <p>starts here: {leg.start_address}</p>  
        <p>ends here: {leg.end_address}</p> 
        <p>number of steps in the trip {leg.steps.length}</p> 
        <p>the distance {leg.distance?.text}</p>
        <p>the duration {leg.duration?.text}</p>
        <ul>
        {answer}
        </ul>
    </div>
  );
}
