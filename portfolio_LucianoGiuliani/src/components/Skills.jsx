import React from 'react';
import {motion} from 'framer-motion'

export default function Skills(){
    return ( <>
        <div className="">
        <motion.img
          initial={{
            x:500,
            opacity:0
          }}
          transition={{
            duration:1.5
          }}
            whileInView={{opacity:1, x:10}}
            viewport={{once:true}}
            src="/src/assets/skills.png"
            className='relative'
          />
      </div>

      <div className="skills_list">
       
        
        <ul >
          <li  >Node Js</li>
          <li>React</li>
          <li>Express</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>GIT</li>
          <li>MySQL</li>
          <li>SCRUM</li>
          <li>Postman</li>
          <li>Sequalize</li>
          <li>VScode</li>
          <li>APIs</li>
          <li>Patrón de arquitectura MVC</li>
        </ul>
      </div>
      </>
        )
}
