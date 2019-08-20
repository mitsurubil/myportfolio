import React from 'react';
import Bg from './bg-hp.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='text-block'>
        <h1>Bilal Nehiri</h1>
        <p>London based Full-Stack Web-Developer</p>
      </div>
      <img src={Bg} alt='Laptop with Matrix background' />
    </div>
  );
}

export default App;
