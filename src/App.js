import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './navbar';
import Background from './background';
import AboutMe from './aboutme';
import Skills from './skills';
import Projects from './projects';
// import User from './BcBeg';//for Board challenge
import './App.css';
// import { domainMatch } from 'tough-cookie';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Background />
        <AboutMe />
        <Skills />
        {/* <User firstName='Bilal' lastName='Nehiri' /> for Board Challenge */}
        <Projects />
      </div>
    </Router>
  );
}

export default App;