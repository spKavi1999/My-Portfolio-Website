import React from 'react'
import { Element } from 'react-scroll'
import skills from '../../skill1.jpg'
import { LinearProgress } from '@mui/material'
import './skillcontainer.css'



const skillcontainer = () => {
  return (
    
      <Element className='skillcontainer' id="skills">
        <div className='skillcontainer_image'>
            <img src={skills} alt=""/>
        </div>
        <div className="skillcontainer_text">
          <h2>SKILLSET</h2>

          <div className='skillcontainer_skillset'>
            <h5>HTML</h5>
            <div className='skillcontainer_slider skillcontainer_slider5'>
            <LinearProgress variant='determinate' value={90}/>
            </div>
            
          </div>
          <div className='skillcontainer_skillset'>
            <h5>CSS</h5>
            <div className='skillcontainer_slider skillcontainer_slider6'>
            <LinearProgress variant='determinate' value={75}/>
            </div>
            
          </div>
          <div className='skillcontainer_skillset'>
            <h5>javaScript</h5>
            <div className='skillcontainer_slider skillcontainer_slider2'>
            <LinearProgress variant='determinate' value={75}/>
            </div>
          </div>
          <div className='skillcontainer_skillset'>
            <h5>React JS</h5>
            <div className='skillcontainer_slider skillcontainer_slider1'>
            <LinearProgress variant='determinate' value={90}/>
            </div>
            
          </div>
          
          <div className='skillcontainer_skillset'>
            <h5>SQL</h5>
            <div className='skillcontainer_slider skillcontainer_slider3'>
            <LinearProgress variant='determinate' value={80}/>
            </div>
            
          </div>
          <div className='skillcontainer_skillset'>
            <h5>Java</h5>
            <div className='skillcontainer_slider skillcontainer_slider4'>
            <LinearProgress variant='determinate' value={80}/>
            </div>
            
          </div>
          

        </div>

        </Element>
    
  )
}

export default skillcontainer
