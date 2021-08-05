import mapboxgl from "mapbox-gl";
import React, { useRef, useEffect, useContext } from "react";
import ClassificationContext from "../store/ClassificationContext";
import "../styles/Styles.css";
// import ReactMapGL, { Marker, Popup } from "react-map-gl"
// import projectData from "../data/projectsampleinfo.json";
import "../styles/MarkPointOnMap2.css";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

function MarkPointOnMap2() {
  const mapContainer = useRef(null);
  const classificationCtx = useContext(ClassificationContext);
  const features = Array.from(classificationCtx.projects);
  // const features = Array.from(projectData.features)

  //add click event listener
  document.createElement("div").addEventListener("click", () => {
    alert("Marker Clicked.");
  });

  useEffect(() => {
    // if (map.current) return; // initialize map only once

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v10",
      center: [-114.066666, 51.049999],
      zoom: 11,
    });

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());

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

    const popup = new mapboxgl.Popup({ offset: 25 }).setText(" I am a Project");

    features.forEach((features) =>
      new mapboxgl.Marker({
        color: "white",
        scale: ".6",
        interactive: true,
      })
        .setLngLat(features.location.coordinates)
        .addTo(map)
        .setPopup(popup)
    );

    //click event listener
    map.on("click", function (e) {
      console.log("Clicking the marker now", e);
    });
  });

  return (
    <div className="map-spacer-top">
      <div className="map-container" ref={mapContainer} />
      <div className="map-spacer-bottom"></div>
    </div>
  );
}

export default MarkPointOnMap2;
