
import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps"
import { useEffect, useState } from "react";
import { useGeolocation } from "../hooks/useGeolocation";


export default function Directions() {
    const map = useMap();
    const routesLibrary = useMapsLibrary('routes')
    const [ directionsService, setDirectionsService ] = useState('')
    const [ directionsRenderer, setDirectionsRenderer ] = useState('')
    const [ routes, setRoutes ] = useState([])
    const [ routeIndex, setRouteIndex ] = useState(0);
    const [ driveStep, setDriveStep ] = useState(0)
    const [ startAddress, setStartAddress ] = useState('')
    const [ endAddress, setEndAddress ] = useState('')
    const { latitude, longitude } = useGeolocation();



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

    useEffect(() => {
        if(!directionsRenderer ) return;
        directionsRenderer.setRouteIndex(routeIndex)
    }, [routeIndex, directionsRenderer])

    const otherRoutes = routes[routeIndex]?.summary 
    const distance = routes[routeIndex]?.legs[0].distance.text
    const duration = routes[routeIndex]?.legs[0].duration.text
    const steps = routes[routeIndex]?.legs[0].steps.length
    const instructions = routes[routeIndex]?.legs[0].steps[driveStep].instructions
    const startPoint = routes[routeIndex]?.legs[0].start_address
    const endPoint = routes[routeIndex]?.legs[0].end_address
  
   

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
       <p style={{ margin: 5, fontSize: 18}}>{startPoint}</p>
        <p style={{fontSize: 18}}>END</p> 
        <input 
            onChange={(e) => setEndAddress(e.target.value)} 
            type="text" 
            value={endAddress}   
            style={{ width: 290, height: 20, fontFamily: 'inherit'}} 
            />
        <br />
        <p> { latitude && longitude ? <button onClick={() => {setStartAddress()}}>use current location</button> : 'loading current location...' } </p>
        <p style={{ margin: 5, fontSize: 18}}>{endPoint}</p>
        <p style={{ margin: 5, fontSize: 18}}>
            <p>{otherRoutes}</p>
            <p> choose from {routes.length} routes: {routes.map((route, index) => (<p key={route.summary}> <button onClick={() => setRouteIndex(index)}>{route.summary}</button></p>))}</p>
        </p> 
        <p style={{ margin: 5, fontSize: 18}}>distance: {distance}</p>
        <p style={{ margin: 5, fontSize: 18}}>duration: {duration}</p>
        <p style={{ margin: 5, fontSize: 18}}># of steps: {steps}</p>
        <p>instructions: {instructions}</p>

        <input 
            onChange={(e) => setDriveStep(e.target.value)}
            type="number"
            value={driveStep} />
     

    </div>
  );
}

