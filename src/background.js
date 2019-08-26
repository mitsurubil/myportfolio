import React from 'react';
import Bg from './images/bg-hp.jpg';

export default function Background() {
    return (
        <div className='container1'>
            <img src={Bg} alt='Black laptop turned on' className='item' />
            <div className='text-block'>
                <h1>Bil Nehiri</h1>
                <p>London based Full-Stack Web-Developer</p>
            </div>
        </div>
    );
}