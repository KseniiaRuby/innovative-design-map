import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import "../styles/Styles.css"

mapboxgl.accessToken = REACT_APP_MAPBOX_TOKEN
const Map = () => {
   const mapContainerRef = useRef(null)

   const [lng, setLng] = useState(5)
   const [lat, setLat] = useState(34)
   const [zoom, setZoom] = useState(1.5)

   // Initialize map when component mounts
   useEffect(() => {
      const map = new mapboxgl.Map({
         container: mapContainerRef.current,
         style: 'mapbox://styles/mapbox/light-v10',
         // style: 'mapbox://styles/mapbox/dark-v10',
         // style: 'mapbox://styles/mapbox/satellite-streets-v11',
         center: [-114.066666, 51.049999],
         zoom: 12
      })

      // Add navigation control (the +/- zoom buttons)
      map.addControl(new mapboxgl.NavigationControl(), 'top-right')

      map.on('move', () => {
         setLng(map.getCenter().lng.toFixed(4))
         setLat(map.getCenter().lat.toFixed(4))
         setZoom(map.getZoom().toFixed(2))
      })

      // Clean up on unmount
      return () => map.remove()
   }, []) // eslint-disable-line react-hooks/exhaustive-deps

   return (
      <div>
         <div className='sidebarStyle'>
            <div>
               {/* Longitude: {lng} | Latitude: {lat} | Zoom: {zoom} */}
            </div>
         </div>
         <div className='map-container' ref={mapContainerRef} />
      </div>
   )
}

export default Map
