import React from 'react';
import Bg from './bg-hp.jpg'
import './App.css';

function App() {
  return (
    <div className='App'>
      <img src={Bg} alt='Laptop with Matrix background' />
      <div className='text-block'>
        <h1>Bilal Nehiri</h1>
        <p>London based Full-Stack Web-Developer</p>
      </div>
      <div className='aboutme'>
        <h1>About me</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <p>ReactJs</p>
        <p>HTML5</p>
        <p>CSS3</p>
      </div>
    </div>
  );
}

export default App;
