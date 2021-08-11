import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import React, { useRef, useEffect, useContext } from "react";
import ClassificationContext from "../store/ClassificationContext";

import "../styles/Styles.css";
import "../styles/MarkPointOnMap2.css";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

function MarkPointOnMap2({ setSelectedProjectIndex, selectedProjectOnSlide }) {
  // let [markerColor, setMarkerColor] = useState("white")
  const mapContainer = useRef(null);
  const coordinates = useRef(null);
  const classificationCtx = useContext(ClassificationContext);
  const features = Array.from(classificationCtx.projects);

  // useEffect(() => {
  //    markerColor = "white"
  //    if (selectedProjectOnSlide) {

  //          setMarkerColor("red")
  //    }
  // }, [selectedProjectOnSlide])

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/femibodegeorgeg/cks6lqlra6vmv17p669fj7r46",
      center: [-114.066666, 51.049999],
      zoom: 10,
      attributionControl: true,
      // }
      //    .addControl(map.geocoderControl('mapbox.places'))
    });

    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
      })
    );

    // Add zoom and rotation controls to the map.
    map.addControl(
      new mapboxgl.NavigationControl()
      // {
      //    visualizePitch: true,
      //    showZoom: true,
      //    showCompass: true
      // }
    );

    // Add geolocate control to the map.
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserLocation: true,
        showAccuracyCircle: true,
        showUserHeading: true,
      })
    );
    // features.forEach((feature, index) => {
    features.forEach((feature, index) => {
      var el = document.createElement("div");
      el.className = `markers`;
      new mapboxgl.Marker(el)
        .setLngLat(feature.location.coordinates)
        .addTo(map);
      el.addEventListener("click", () => {
        // marker.getElement().addEventListener('click', () => {
        // alert("Clicked on" + index);
        setSelectedProjectIndex(index);
      });
    });
  }, [classificationCtx.projects]);

  return (
    <div className="map-spacer-top">
      <div className="map-container" ref={mapContainer} />
      <div className="map-spacer-bottom"></div>
    </div>
  );
}

export default MarkPointOnMap2;
