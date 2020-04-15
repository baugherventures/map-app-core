import React, {useState, useEffect} from 'react';
import Footer from '../assets/Footer';


function Trip() {
    let [lon, setLon] = useState(-85.8534423);
    let [lat, setLat] = useState(39.2185048);

    useEffect(()=>{
        console.log("insideTrip",lon,lat)
    })
    
  
    navigator.geolocation.watchPosition(
        function(position) {
            console.log(position)
            setLon(lon = position.coords.longitude);
            setLat(lat = position.coords.latitude);
            // setAltitude(altitude = position.coords.altitude);
            // setAccuracy(accuracy = position.coords.accuracy);
            // setAltAccuracy(altitudeAccuracy = position.coords.altitudeAccuracy);
            // setHeading(heading = position.coords.heading);
            // setSpeed(speed = position.coords.speed);
        },
        function(error) {
            console.error("Error Code = " + error.code + " - " + error.message);
        },
    );
    
    return (
        <div className="trip">
            <h1>Trip</h1>
            <p>Current Location {lon},{lat}</p>
            <Footer/>
        </div>
    )
}

export default Trip;