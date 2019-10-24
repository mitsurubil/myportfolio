import React from 'react';
import Me from './images/me.jpg';

export default function AboutMe() {
  return (
    <div className='aboutme' id='aboutme'>
      <h1>About me</h1>
      <img src={Me} alt='Me' className='me' />
      <p>
        Bonjour,
          Last August I have joined Kodiri bootcamp in London to become Web Developer.
          During this intensive 2 months I have learned Front end development with HTML, CSS, JavaScript, React and Back end development with Node Js. But also a working methodology with Agile.
          We Mainly focused on problem solving and coding.
          Now I am actively looking for the perfect opportunity to apply what I have learned during this past couple of months. Please Feel free to contact me if you have any suggestion.
      </p>
    </div>
  );
}