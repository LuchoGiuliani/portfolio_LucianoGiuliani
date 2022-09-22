import { useState } from 'react'

import './App.css'
import Life from './Register.jsx'

import Saludo from './saludo.jsx'

function App() {

  return (
  <>
    <body>
    <div>
        <Saludo titulo="Welcome"subtitulo="Bye bye" />
      </div>

      
      <div className="logo">
        <img src="/src/assets/logo.png" alt="" />
      </div>
      <div className='aboutMe_container'>
      <div className="aboutMe">
        <h1>About Me
        </h1>
      <div className='line'><img src="/src/assets/linea.png" alt="" /></div>
        <div className='line'><img src="/src/assets/linea.png" alt="" /></div>
      </div>
      <div className="foto">
        <img src="/src/assets/foto.png" alt="" />
      </div>
      </div>
      <figure className='aboutMe_parrafo'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores repudiandae voluptate nesciunt quis consequatur placeat, cumque debitis omnis qui doloribus eligendi obcaecati. Quam nam dolore sapiente voluptate nemo repellat reiciendis.
        </p>
      </figure>
      <div className="proyects">
        <h1>Proyects</h1>
        <div className='line'><img src="/src/assets/linea.png" alt="" /></div>
        <div className='line'><img src="/src/assets/linea.png" alt="" /></div>
      </div>
      <section>
        <a href=""><img src="" alt="" /></a>
        <a href=""><img src="" alt="" /></a>
        <a href=""><img src="" alt="" /></a>
        <a href=""><img src="" alt="" /></a>
      </section>
      <div className="skills">
        <img src="/src/assets/skills.png" alt="" />
        <div className='line'><img src="/src/assets/linea.png" alt="" /></div>
        <div className='line'><img src="/src/assets/linea.png" alt="" /></div>
      </div>
      <div className="skills_list">
        <Life />
        
        <ul>
          <li>Node Js</li>
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
      <div className="Contact">
        <h1>Contact</h1>
        <div className='line'><img src="/src/assets/linea.png" alt="" /></div>
        <div className='line'><img src="/src/assets/linea.png" alt="" /></div>
      </div>
      <div className="contact_img">
        <a href=""><img src="/src/assets/gmail.png" alt="" /></a>
        <a href=""><img src="/src/assets/instagram.png" alt="" /></a>
        <a href=""><img src="/src/assets/git.png" alt="" /></a>
        <a href=""><img src="/src/assets/Whatsapp.png" alt="" /></a>
        <a href=""><img src="/src/assets/Linkedin.png" alt="" /></a>
      </div>


    </body>
    </>
  )
}

export default App
