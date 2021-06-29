import React, { useEffect } from 'react';
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Navbar from './Component/Navbar';
import Skill from './Component/Skill';
import Contact from './Component/Contact';
import Projects from './Component/Projects';
import Footer from './Component/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


function App() {

 
 
  return (
     <>
       

            <Navbar />
            <Home />
            <About />
            <Skill />
            <Projects />
            <Contact />
            <Footer />
     </>
  );
}

export default App;
