import React from 'react';
import Me from './images/me.jpg';
import './projects.css';

export default function Projects() {
  return (
    <div className='projects' id='projects'>

      <h1>Some Projects</h1>
      <p>Resize the browser window to see the responsive effect.</p>

      <div class="row">
        <div class="column">
          <div class="content">
            <img src={Me} alt="Mountains" />
            <h3>My Work</h3>
            <p>Lorem ipsum..</p>
          </div>
        </div>
        <div class="column">
          <div class="content">
            <img src={Me} alt="Lights" />
            <h3>My Work</h3>
            <p>Lorem ipsum..</p>
          </div>
        </div>
        <div class="column">
          <div class="content">
            <img src={Me} alt="Nature" />
            <h3>My Work</h3>
            <p>Lorem ipsum..</p>
          </div>
        </div>
        <div class="column">
          <div class="content">
            <img src={Me} alt="Mountains" />
            <h3>My Work</h3>
            <p>Lorem ipsum..</p>
          </div>
        </div>
      </div>

      <div class="content">
        <img src={Me} alt="Bear" />
        <h3>Some Other Work</h3>
        <p>Lorem ipsum..</p>
      </div>

    </div>

  );
}