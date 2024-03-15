import React from 'react'
import {repodata} from '../data/repodata'
import ProjectItem from '../Components/projectItem'
import "../Styles/project.css"
function Projects() {
  return (
    <div class="ProjectsContainer">

    <h1 className='Title'>
    <h1>My Projects</h1>
    </h1>
      {
        repodata.map((k,v)=>{
         return(
          <div 
          >
             <ProjectItem 
           timeframe={k.timeframe}
            link={k.link} 
            description={k.description} 
            code={k.code} 
            images={k.images}
             name={k.name}
              key={v}/>
          </div>
         )
        })
      }
    </div>
  )
}

export default Projects
