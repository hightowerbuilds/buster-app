
import { useEffect, useState } from "react";
import { useGeolocation } from "../hooks/useGeolocation";

export default function ReverseGeocode() {

   const { latitude, longitude, error } = useGeolocation();
    const [ addressString, setAddressString ] = useState('')
 
    /**
     *  need to setup fetching of formatted_address from google maps 
     */
 
    return (
    <div>
       <p>
       {latitude + ' ' + longitude}
        </p> 
       
    </div>
  )
}
