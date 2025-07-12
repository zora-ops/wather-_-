import React from 'react'
import { useState, useEffect } from 'react';


const useLocation = () => {

    const[location, setLocation] = useState({lat: null, lon: null})
    const {lat, lon} = location;

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            setLocation({ lat: pos.coords.latitude, lon: pos.coords.longitude });
        }, (e) => {
            setLocation({ lat: null, lon: null })
        });
    }, []);


    return {lat, lon}
}

export default useLocation