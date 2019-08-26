import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
// import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="portfolio">
        <h2>My Portfolio</h2>
      </div>
      <div className="nav">
        <AnchorLink href='#aboutme'><h4>About me</h4></AnchorLink>
        <AnchorLink href='#skills'><h4>Skills</h4></AnchorLink>
        <AnchorLink href='#projects'><h4>Projects</h4></AnchorLink>
      </div>
    </div>
  );
}