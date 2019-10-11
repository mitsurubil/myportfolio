import React from 'react';

function myProjects(props) {
    return (
        <div className='myProjects'>
            <img src={props.img} alt={`${props.name}`} className='projectImg' />
            <div className='overlap'>
                <p>{props.name}</p>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default myProjects;