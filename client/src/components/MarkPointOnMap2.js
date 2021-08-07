import mapboxgl from "mapbox-gl";
import React, { useRef, useEffect, useContext } from "react";
import ClassificationContext from "../store/ClassificationContext";

import "../styles/Styles.css";
import "../styles/MarkPointOnMap2.css";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

function MarkPointOnMap2({ setSelectedProjectIndex }) {
   // let [markerColor, setMarkerColor] = useState("white")
   const mapContainer = useRef(null);
   const classificationCtx = useContext(ClassificationContext);
   const features = Array.from(classificationCtx.projects);

   useEffect(() => {

      const map = new mapboxgl.Map({
         container: mapContainer.current,
         style: "mapbox://styles/mapbox/dark-v10",

         center: [-114.066666, 51.049999],
         zoom: 10,
         attributionControl: true
      });

      // Add zoom and rotation controls to the map.
      map.addControl(new mapboxgl.NavigationControl(
         // {
         //    visualizePitch: true,
         //    showZoom: true,
         //    showCompass: true
         // }
      ));

    // Add geolocate control to the map.
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserLocation: true,
        showAccuracyCircle: true,
      })
    );

      features.forEach((feature, index) => {
         let marker = new mapboxgl.Marker({
            color: "white",
            scale: ".6",
            interactive: true,
         })
            .setLngLat(feature.location.coordinates)
            .addTo(map)
         marker.getElement().addEventListener('click', () => {
            // alert("Clicked on" + index);
            setSelectedProjectIndex(index)
         });
      })
   })

   return (
      <div className="map-spacer-top">
         <div className="map-container" ref={mapContainer} />
         <div className="map-spacer-bottom"></div>
      </div>
   );
}

export default MarkPointOnMap2;
