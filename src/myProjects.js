import React from 'react';

function myProjects(props) {
    function link() {
        return props.name === 'BilFlix' ?
            'https://bilflix.herokuapp.com' :
            props.name === 'Frigo-App' ?
                'https://frigo-app.herokuapp.com' :
                'https://mitsurubil.github.io/recipe-app/';
    }
    return (
        <div className='myProjects'>
            <img src={props.img} alt={`${props.name}`} className='projectImg' />
            <a href={link()} target="_blank">
                <div className='overlap'>
                    <p>{props.name}</p>
                    <p>{props.description}</p>
                </div>
            </a>
        </div>
    );
}

export default myProjects;