import React from 'react'
import ProjectSlider from '../components/ProjectSlider';
import projectData from '../data/projectsampleinfo.json';

function HorizontalProjectsMenuPage() {
    return (

        <ProjectSlider slides={projectData.features}/>
    
    )
}

export default HorizontalProjectsMenuPage


