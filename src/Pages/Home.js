import React from 'react'
import Person from '../assets/person.png'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import '../Styles/Home.css'
import {Link} from 'react-router-dom'
import { Maintextdata } from '../data/maintextdata'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
function Home() {
    const [text]  = useTypewriter({
        words:Maintextdata,
        loop:{},
        typeSpeed: 240,
        deleteSpeed: 240,
        delaySpeed: 200,

    })
    return (
    <div className='HomeContainer'>
     <div className='Socials'>
            <Link target='_blank' to="https://www.linkedin.com/in/alexander-msomi-bb5996268/"><LinkedInIcon/></Link>
            <Link target='_blank' to="https://github.com/Flexer678"><GitHubIcon/></Link>
   
        </div>
      <div className='MainTextContainer'>
      <h1>STANDING ON BUSINESS</h1>
        <h1 className='MainText' >
        
      <span>
        {text}
      </span>
      <span>
        <Cursor cursorStyle='<' />
      </span>
      </h1>
      </div>

      <img className='Person' alt='Sup' src={Person}></img>
        
       
    </div>
    
  )
}

export default Home
