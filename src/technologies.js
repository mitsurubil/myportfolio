import React from 'react';

function Technology(props) {
    return (
        <div className='item'>
            <img src={props.logo} alt={`${props.name} logo`} className='logo' />
            <div className='overlay'>
                <p>{props.name}</p>
            </div>
        </div>
    );
}

export default Technology;