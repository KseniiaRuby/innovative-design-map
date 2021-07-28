import React, { useState, useEffect } from "react"
import ReactMapGL, { Marker, Popup } from "react-map-gl"
// import * as parkDate from "../data/calgary-buildings.json"
import * as projectsInformation from "../data/projectsampleinfo.json"
import "../styles/Styles.css"

function MarkPointOnMap() {
   const [viewport, setViewport] = useState({
      latitude: 51.0447,
      longitude: -114.0719,
      width: "100vw",
      height: "100vh",
      zoom: 12,
   })
   const [selectProject, setSelectProject] = useState(null)

   useEffect(() => {
      const listener = (e) => {
         if (e.key === "Escape") {
            setSelectProject(null)
         }
      }
      window.addEventListener("keydown", listener)

      return () => {
         window.removeEventListener("keydown", listener)
      }
   }, [])

   return (
      <div className="map">
         <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            // mapStyle="mapbox://styles/4navin/ckqb7gi7q1mpr19laybxakhhf"
            onViewportChange={(viewport) => {
               setViewport(viewport)
            }}
         >
            {projectsInformation.features.map((project) => (
               <Marker
                  key={project.Project_Information.Project_ID}
                  latitude={project.geometry.coordinates[1]}
                  longitude={project.geometry.coordinates[0]}
               >
                  <button
                     className="marker-btn"
                     onClick={(e) => {
                        e.preventDefault()
                        setSelectProject(project)
                     }}
                  >
                     {/* Library */}
                     {/* <img src={selectProject.Project_Information.Main_Image} alt="Building In Calgary" /> */}
                     <img src={project.Project_Information.Main_Image} alt="" />
                  </button>
               </Marker>
            ))}

            {selectProject ? (
               <Popup
                  className="img-description-on-map"
                  latitude={selectProject.geometry.coordinates[1]}
                  longitude={selectProject.geometry.coordinates[0]}
                  onClose={() => {
                     setSelectProject(null)
                  }}
               >
                  <div>
                     {/* <img src={selectProject.Project_Information.Main_Image} /> */}
                     <h2>{selectProject.Project_Information.Project_Name}</h2>
                     {/* <p>{selectProject.Project_Information.Date_Of_Completion}</p> */}
                     {/* <p>{selectProject.Project_Information.Location.Address}</p> */}
                     {/* <p>{selectProject.Project_Information.Location.City}</p> */}
                     {/* <p>{selectProject.Project_Information.Location.Province}</p> */}
                     {/* <p>{selectProject.Project_Information.Location.Postal_Code}</p> */}
                     <p>{selectProject.Project_Information.Project_Description}</p>
                  </div>
               </Popup>
            ) : null}
         </ReactMapGL>
      </div>
   )
}

export default MarkPointOnMap
