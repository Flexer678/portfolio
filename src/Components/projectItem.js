import React from 'react'
import {Link} from 'react-router-dom'

function ProjectItem({name, images, timeframe, link, description, code }) {

  return (
    <div className='projectItem' >
      <div className='images' >
      {images.map((k,v)=>{
           
        return(
             <img alt={v} src={k}></img>
        )
      })}
      </div>
      <div className='Texts'>
        <h1>{name}</h1>
      <h3>timeframe: {timeframe}</h3>
      <p>{description}</p>
      <div className='Code'>
         

      <code> Languages:   {code}</code>
      </div>
      <Link  style={{ cursor: 'pointer' }} to={link} target='_blank'><button > go to repo</button></Link>
      </div>
    </div>
  )
}

export default ProjectItem
