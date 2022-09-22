import { useState } from 'react'

import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import Header from './components/Header.jsx';
import AboutMe from './components/AboutMe.jsx';
import Proyects from './components/Proyects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';


function App() {
  return (
  <>
    <body className='bg-slate-600 p-5'>
        {/* HEADER */}   
        <Header /> 
        {/* About Me */}
        <AboutMe />
        {/* Skills */}
        <Skills />
        {/* Proyects */}
        <Proyects />
        {/* Contact */}
        <Contact />

    </body>
    </>
  )
}

export default App
