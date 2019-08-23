import React from 'react';
import NavBar from './navbar.js';
import Bg from './images/bg-hp.jpg';
import JavaScript from './images/javascript-icon.svg';
import ReactJs from './images/react-icon.svg';
import Html5 from './images/html5-icon.svg';
import Css3 from './images/css3-icon.svg';
import Nodejs from './images/nodejs-icon.svg';
import Mongodb from './images/database-icon.svg';
import Heroku from './images/heroku-icon.svg';

// import User from './BcBeg.js';//for Board challenge
import './App.css';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <div className='container1'>
        <img src={Bg} alt='Laptop with Matrix background' className='item' />
        <div className='text-block'>
          <h1>Bilal Nehiri</h1>
          <p>London based Full-Stack Web-Developer</p>
        </div>
      </div>
      <div className='aboutme'>
        <h1>About me</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <h1>Skills</h1>
      <div className='container2'>
        <div>
          <img src={JavaScript} alt='JavaScript Logo' className='logo' />
          <div className='overlay'>
           <p>JavaScript</p>
          </div>
        </div>
        <div>
          <img src={ReactJs} alt='ReactJS Logo' className='logo' />
          <p>ReactJS</p>
        </div>
        <div>
          <img src={Html5} alt='HTML5 Logo' className='logo' />
          <p>HTML5</p>
        </div>
        <div>
          <img src={Css3} alt='CSS3 Logo' className='logo' />
          <p>CSS3</p>
        </div>
        <div>
          <img src={Nodejs} alt='Node.js Logo' className='logo' />
          <p>Node.js</p>
        </div>
        <div>
          <img src={Mongodb} alt='MongoDB Logo' className='logo' />
          <p>MongoDB</p>
        </div>
        <div>
          <img src={Heroku} alt='Heroku Logo' className='logo' />
          <p>Heroku</p>
        </div>
      </div>
      {/* <div><User firstName='Bilal' lastName='Nehiri' /></div> */}
    </div>
  );
}

export default App;