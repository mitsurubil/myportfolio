import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './navbar';
import Background from './background';
import AboutMe from './aboutme';
import Skills from './skills';

// import User from './BcBeg.js';//for Board challenge
import './App.css';
import { domainMatch } from 'tough-cookie';

function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={NavBar} />
        <Background />
        <AboutMe />
        <Skills />
        {/* <div><User firstName='Bilal' lastName='Nehiri' /></div> */}
      </div>
    </Router>
  );
}

export default App;