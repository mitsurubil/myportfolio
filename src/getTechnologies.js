import JavaScript from './images/javascript-icon.svg';
import ReactJs from './images/react-icon.svg';
import Html5 from './images/html5-icon.svg';
import Css3 from './images/css3-icon.svg';
import Nodejs from './images/nodejs-icon.svg';
import Mongodb from './images/database-icon.svg';
import Heroku from './images/heroku-icon.svg';

export default function getTechnologies() {
    return [
        { id: 'javascript', name: 'JavaScript', logo: JavaScript },
        { id: 'reactjs', name: 'ReactJS', logo: ReactJs },
        { id: 'html5', name: 'HTML5', logo: Html5 },
        { id: 'css3', name: 'CSS3', logo: Css3 },
        { id: 'nodejs', name: 'Node.js', logo: Nodejs },
        { id: 'mongodb', name: 'MongoDB', logo: Mongodb },
        { id: 'heroku', name: 'Heroku', logo: Heroku }
    ];
}