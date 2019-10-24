import React from 'react';
import Bg from './images/bg-hp.jpg';
import video from './videos/video.mp4';


export default function Background() {
    return (
        <div className='container1'>
            {/* <video autoPlay loop muted>
                <source src={video} type='video/mp4' className='item' />
            </video> */}
            <img src={Bg} alt='Black laptop turned on' className='item' />
            <div className='text-block'>
                <h1>Bilal Nehiri</h1>
                <p>Junior Full Stack Web Developer</p>
                <a href='mailto: bilal.nehiri@gmail.com'><button>CONTACT ME!</button></a>
                <div className='socials'>
                    <i class="fa fa-github" ></i>
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    );
}