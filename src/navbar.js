import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="portfolio">
        <Link to='/'><h2>My Portfolio</h2></Link>
      </div>
      <div className="nav">
        <Link to='/about-me'><h4>About me</h4></Link>
        <Link to='/skills'><h4>Skills</h4></Link>
        <Link to='/projects'><h4>Projects</h4></Link>
      </div>
    </div>
  );
}