import React from 'react';
import MyProjects from './myProjects';
import getProjects from './getProjects';
// import './projects.css';

export default function Projects() {
  return (
    <div className='projects' id='projects'>
      <h1>Some Projects</h1>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      <div className='container3'>
        {
          getProjects().map(project => (
            <MyProjects
              key={project.id}
              id={project.id}
              name={project.name}
              description={project.description}
              img={project.img}
            />
          ))
        }
      </div>
    </div>
  );
}