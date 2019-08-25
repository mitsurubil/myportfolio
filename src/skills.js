import React from 'react';
import Technology from './technologies';
import JavaScript from './images/javascript-icon.svg';
import ReactJs from './images/react-icon.svg';
import Html5 from './images/html5-icon.svg';
import Css3 from './images/css3-icon.svg';
import Nodejs from './images/nodejs-icon.svg';
import Mongodb from './images/database-icon.svg';
import Heroku from './images/heroku-icon.svg';

export default function Skills() {
    return (
        <>
            <h1>Skills</h1>
            <div className='container2'>
                <Technology name='JavaScript' logo={JavaScript} />
                <Technology name='ReactJS' logo={ReactJs} />
                <Technology name='HTML5' logo={Html5} />
                <Technology name='CSS3' logo={Css3} />
                <Technology name='Node.js' logo={Nodejs} />
                <Technology name='MongoDB' logo={Mongodb} />
                <Technology name='Heroku' logo={Heroku} />
            </div>
        </>
    );
}