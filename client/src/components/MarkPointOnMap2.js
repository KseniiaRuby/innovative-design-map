import mapboxgl from "mapbox-gl"
import React, { useRef, useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import ClassificationContext from "../store/ClassificationContext"
// import "../styles/Styles.css"
// import ReactMapGL, { Marker, Popup } from "react-map-gl"
import projectData from '../data/projectsampleinfo.json'
import '../styles/MarkPointOnMap2.css'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN

function MarkPointOnMap2() {
   const classificationCtx = useContext(ClassificationContext)
  
   const mapContainer = useRef(null);
   // const [markerColor, setMarkerColor] = useState('green');
   const [selectProject, setSelectProject] = useState(null)

   // const features = Array.from(classificationCtx.projects)
   const features = Array.from(projectData.features)

   document.createElement("div").addEventListener('click', () => 
   { 
      alert("Marker Clicked.");
   }
   ); 


   useEffect(() => {
      // if (map.current) return; // initialize map only once
      const userGatewayWordChoice = classificationCtx.gatewayWord;
      const currentClassification = classificationCtx.classification

      let renderMarkerColor = ''

      const map = new mapboxgl.Map({
         container: mapContainer.current,
         style: 'mapbox://styles/mapbox/dark-v10',
         center: [-114.066666, 51.049999],
         zoom: 14,
      });

      // Add zoom and rotation controls to the map.
      map.addControl(new mapboxgl.NavigationControl());

      // Add geolocate control to the map.
      map.addControl(
         new mapboxgl.GeolocateControl({
            positionOptions: {
               enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserLocation: true,
            showAccuracyCircle: true
            
         })
      );

      // switch (currentClassification.classificationName) {
      //    case "Climate and Environment":
      //       renderMarkerColor = "green"
      //       console.log("Current gatewayWord", userGatewayWordChoice)
      //       console.log("Current Classification", currentClassification.classificationName)
      //       break;
      //    case "Energy and Resources":
      //       renderMarkerColor = "red"
      //       // setMarkerColor(markerColor)
      //       console.log("Energy And Resources", currentClassification);
      //       break;
      //    case "Culture, Heritage and Society":
      //       renderMarkerColor = 'yellow'
      //       console.log("Culture, Heritage and Society");
      //       break;
      //    case "Equity and Social Justice":
      //       renderMarkerColor = "blue"
      //       console.log("Equity And Social justice");
      //       break;
      //    case "Health and Wellness":
      //       renderMarkerColor = "indigo"
      //       console.log("Health and Wellness");
      //       break;
      //    case "Technology":
      //       renderMarkerColor = "Orange"
      //       console.log("Technology");
      //       break;
      //    case "Transportation and Infrastructure":
      //       renderMarkerColor = "violet"
      //       console.log("Transportation and Infrastructure");
      //       break;
      //    default:
      //       console.log('This Selection Is Incorrect');
      // }
      const popup = new mapboxgl.Popup({offset: 25})
      .setText("Construction on the Washington Monument began in 1848.");

      features.forEach(
         (features) => new mapboxgl.Marker({
            color: "white",
            scale: ".5",
            interactive: true,
         })
            .setLngLat(features.geometry.coordinates)
            .addTo(map)
            .setPopup(popup)
      )
      // mapboxgl.Marker.getElement().addEventListener('click', function (e) { console.log("marker clicked"); });
      map.on('click', function(e) {

         console.log("Clicking the marker now", e);
     
         //   map.featuresAt(e.point, {radius: 100, layer: 'YOUR MARKER LAYER ID'}, function(err, features) {
         //         console.log(features[0]);
     
         //   });
     
         });

   });

   return <div className="map-container" ref={mapContainer} />;
}

export default MarkPointOnMap2