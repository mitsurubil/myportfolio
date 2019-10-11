import React from 'react';
import Bg from './images/bg-hp.jpg';
import Bgmatrix from './images/bg-hp-matrix.jpg';

export default function Background() {
    return (
        <div className='container1'>
            <img src={Bg} alt='Black laptop turned on' className='item' />
            <div className='text-block'>
                <h1>Bilal Nehiri</h1>
                <p>Full Stack Web Developer</p>
            </div>
        </div>
    );
}