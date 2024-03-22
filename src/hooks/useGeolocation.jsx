import { useEffect, useState } from "react";

export const useGeolocation = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [error, setError] = useState(null); // Initialize error as null

    useEffect(() => {
        const getLocation = async () => {
            try {
                if (!navigator.geolocation) {
                    setError('Geolocation is not supported by this browser.');
                    return; 
                }

                const position = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                });

                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            } catch (error) {
                setError(error.message);
            }
        };

        getLocation();
    }, []);

    return { latitude, longitude, error };
};
