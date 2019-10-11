import FrigoApp from './images/pf-frigo-app.png';
import BilFlix from './images/pf-bilflix.png';
import RecipeApp from './images/pf-recipe-app.png';

export default function getProjects() {
    return [
        { id: 'BilFlix', name: 'BilFlix', description: 'A netflix based web app built using react.js, JavaScript ES6+, HTML5, CSS3 and node.js, mongoDB on the backend.', img: BilFlix },
        { id: 'Frigo-App', name: 'Frigo-App', description: 'A team web app that helps users avoid wasting food in their fridge by displaying color coded notifications when the Item is about to expire or expired.', img: FrigoApp },
        { id: 'Recipe-App', name: 'Recipe-App', description: 'A very simple cooking app that allow you to look for several recipes related to one ingredient by using an API (edamam).', img: RecipeApp }
    ];
}