import React, {useState, useEffect } from 'react';
import 'ol/ol.css';
import Feature from 'ol/Feature';
import Geolocation from 'ol/Geolocation';
import Map from 'ol/Map';
import View from 'ol/View';
import Point from 'ol/geom/Point';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {OSM, Vector as VectorSource} from 'ol/source';
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style';
import {fromLonLat} from 'ol/proj'


function MapAsset(props) {  
  console.log("Props from above",props)
  let [lon, setLon] = useState(-85.8534423);
  let [lat, setLat] = useState(39.2185048);
  // let [altitude, setAltitude] = useState(null);
  // let [accuracy, setAccuracy] = useState(1243);
  // let [altitudeAccuracy, setAltAccuracy] = useState(null);
  // let [heading, setHeading] = useState(null);
  // let [speed, setSpeed] = useState(null);


  //get Location
  navigator.geolocation.watchPosition(
    function(position) {
      console.log("js get location",position)
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
  
  // Render the map
  useEffect(()=>{
    setTimeout(()=>{
      var view = new View({
        center: fromLonLat([lon, lat]),
        zoom: 10
      });
      
      var map = new Map({
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        target: 'map',
        view: view
      });
      
      var geolocation = new Geolocation({
        // enableHighAccuracy must be set to true to have the heading value.
        trackingOptions: {
          enableHighAccuracy: true
        },
        projection: view.getProjection()
      });
      
      function el(id) {
        return document.getElementById(id);
      }
      
      
      // if(props.checked==true) {
        el('track').addEventListener('change', function() {
          geolocation.setTracking(this.checked);
        });

        // geolocation.setTracking(props.checked);
      //   console.log("and now its true")
      // }else {
      //     console.log("Oh no it's false")
      // }



      // el('track').addEventListener('change', function() {
      //   geolocation.setTracking(this.checked);
      // });
      
      // update the HTML page when the position changes.
      // geolocation.on('change', function() {
      //   el('accuracy').innerText = geolocation.getAccuracy() + ' [m]';
      //   el('altitude').innerText = geolocation.getAltitude() + ' [m]';
      //   el('altitudeAccuracy').innerText = geolocation.getAltitudeAccuracy() + ' [m]';
      //   el('heading').innerText = geolocation.getHeading() + ' [rad]';
      //   el('speed').innerText = geolocation.getSpeed() + ' [m/s]';
      // });
      
      // handle geolocation error.
      geolocation.on('error', function(error) {
        var info = document.getElementById('info');
        info.innerHTML = error.message;
        info.style.display = '';
      });
      
      var accuracyFeature = new Feature();
      geolocation.on('change:accuracyGeometry', function() {
        accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
      });
      
      var positionFeature = new Feature();
      positionFeature.setStyle(new Style({
        image: new CircleStyle({
          radius: 5,
          fill: new Fill({
            color: '#3399CC'
          }),
          stroke: new Stroke({
            color: '#fff',
            width: 2
          })
        })
      }));

      var hiddenFeature = new Feature();
      hiddenFeature.setStyle(new Style({
        image: new CircleStyle({
          radius: 5,
          fill: new Fill({
            color: '#000000'
          }),
          stroke: new Stroke({
            color: '#fff',
            width: 2
          })
        })
      }));
      
      geolocation.on('change:position', function() {
        var coordinates = geolocation.getPosition();
        console.log("bluedot position",coordinates)
        positionFeature.setGeometry(coordinates ?
          new Point(coordinates) : null);
        
       
        var hiddencoordinates = [-9557760.785776955, 4752785.785776955];
        console.log("==========>", geolocation.getPosition())
        console.log("bluedot position",hiddencoordinates)
        hiddenFeature.setGeometry(hiddencoordinates ?
          new Point(hiddencoordinates) : null);
      });
      
      new VectorLayer({
        map: map,
        source: new VectorSource({
          features: [accuracyFeature, positionFeature, hiddenFeature]
        })
      });
    },1000)
  })

  
  return (

    <div className="map-asset">
      <div id="map" className="map" tabIndex="0"></div>
      <label htmlFor="track">
      track position
      <input id="track" type="checkbox"/>
    </label>
    </div>
  );
}


export default MapAsset;

