import React from 'react';
import Technology from './technologies';
import getTechnologies from './getTechnologies';

export default function Skills() {
    return (
        <div className='skills' id='skills'>
            <h1>Skills</h1>
            <div className='container2'>
                {
                    getTechnologies().map(skill => (
                        <Technology
                            key={skill.id}
                            id={skill.id}
                            name={skill.name}
                            logo={skill.logo}
                        />
                    ))
                }
            </div>
        </div>
    );
}