import { useEffect, useState } from "react";

export const useGeolocation = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [error, setError] = useState('error');
  
    useEffect(() => {
      const getLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setLatitude(position.coords.latitude);
              setLongitude(position.coords.longitude);
            },
            (error) => {
              setError(error.message);
            }
          );
        } else {
          setError('Geolocation is not supported by this browser.');
        }
      };
  
      getLocation();
    }, []);
  
    return { latitude, longitude, error};
  };
  
  