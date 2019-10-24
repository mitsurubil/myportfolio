import React from 'react';
import MyProjects from './myProjects';
import getProjects from './getProjects';
// import './projects.css';

export default function Projects() {
  return (
    <div className='projects' id='projects'>
      <h1>Projects</h1>
      <p>Since practice makes perfect, here are several projects I did through the Kodiri Bootcamp I attended or simply because I was curious. Please click on each desription to be redirected to the working app.</p>
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