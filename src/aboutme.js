import React from 'react';
import Me from './images/me.jpg';

export default function AboutMe() {
  return (
    <div className='aboutme' id='aboutme'>
      <h1>About me</h1>
      <img src={Me} alt='Me' className='me' />
      <p>
      I am actively looking for the perfect opportunity to apply what i am learning, I enjoy playing guitar, my favorite number is 11, my favorite food is Indian and Italian, I was born in Khemisset (Morocco) and grew up in Mantes la Jolie (France), I can solve the Rubik's cube in less than a minute.
      </p>
    </div>
  );
}