import React from 'react'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";


function StatsItem({language, level}) {
  return (
    <div className='stats'>
      <h3>{language}</h3>
      <Progress percent={level}  />
    </div>
  )
}

export default StatsItem
