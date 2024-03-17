import React from 'react'
import {LanguageStats, ToolStats, editingStats, projectManagement} from "../data/stats"
import StatsItem from '../Components/StatsItem'
import "../Styles/aboutme.css"

function AboutMe() {
  return (
    <div className='Container'>
    <div className='About-me'>
    <h1>About Me (Alexander Mosomi)</h1>
    <p>I am a self taught developer who started around 2020 when we were all locked in our homes. I have a passion for problem solving and anything tech.In terms of technical skills, you have proficiency in adaptive learning, data structures, attention to detail, interpersonal skills, analytical thinking, and problem-solving.      </p>
    </div>
    <div className='Sk-Container'>
      <h1>Skill Levels</h1>
      <h3>Note: this is my confidence level in these Languages</h3>
      <div className='Skills'>
      {LanguageStats.map((k,v)=>{
        return(
           <StatsItem language={k.language} level={k.level} key={v}/>
        )
      })}
      <h1>Tools:</h1>
      {
        ToolStats.map((k,v)=>{
          return(
             <StatsItem language={k.tool} level={k.level} key={v}/>
          )
        })
      }
       <h1>Editing:</h1>
      {
        editingStats.map((k,v)=>{
          return(
             <StatsItem language={k.tool} level={k.level} key={v}/>
          )
        })
      }
          <h1>Project Management:</h1>
       {
        projectManagement.map((k,v)=>{
          return(
             <StatsItem language={k.tool} level={k.level} key={v}/>
          )
        })
      }
      </div>
    </div>  
    </div>
  )
}

export default AboutMe


