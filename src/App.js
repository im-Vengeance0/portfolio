import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skills';
import Works from './components/Works/works';
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer';
function App() {
  return (
    <div className="App">
        <NavBar />
        <Intro/>
        <Skills/>
        <Works/>
        <Contact/>
        <Footer/>
    </div>
  )
    
}

export default App;
