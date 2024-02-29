/**
 *  bring geolocation hook in
 * 
 *  pass lat and lng to reverse geocode api
 *  inside of useEffect hook? 
 * 
 *  return formatted_address
 */

import { useEffect, useState } from "react";
import { useGeolocation } from "./useGeolocation"

export function useReverseGeocode() {


  const { latitude, longitude } = useGeolocation();
  const [ formattedAddress, setFormattedAddress ] = useState('')


  useEffect(() => {

    const fetchData = async () => {
      if(!latitude || !longitude) return;
      try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${import.meta.env.VITE_KEY}`);
        const fetchedData = await response.json();
        setFormattedAddress(fetchedData.results[0].formatted_address );
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();    

  }, [ latitude, longitude ])

 


  return  { formattedAddress }
}