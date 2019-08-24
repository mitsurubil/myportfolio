import React from 'react';
import NavBar from './navbar.js';
import Bg from './images/bg-hp.jpg';
import Technology from './technologies';
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
        <Technology name='JavaScript' logo={JavaScript} />
        <Technology name='ReactJS' logo={ReactJs} />
        <Technology name='HTML5'  logo={Html5} />
        <Technology name='CSS3' logo={Css3} />
        <Technology name='Node.js' logo={Nodejs} />
        <Technology name='MongoDB' logo={Mongodb} />
        <Technology name='Heroku' logo={Heroku} />
      </div>
      {/* <div><User firstName='Bilal' lastName='Nehiri' /></div> */}
    </div>
  );
}

export default App;