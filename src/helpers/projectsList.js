import project01 from '../img/projects/game.jpg';
import project01Big_01 from '../img/projects/game01-big.jpg';
import project01Big_02 from '../img/projects/game02-big.jpg';
import project01Big_03 from '../img/projects/game03-big.jpg';
import project02 from '../img/projects/weather.jpg';
import project02Big_01 from '../img/projects/weather01-big.jpg';
import project02Big_02 from '../img/projects/weather02-big.jpg';
import project03 from '../img/projects/cargo.jpg';
import project03Big_01 from '../img/projects/cargo01-big.jpg';
import project03Big_02 from '../img/projects/cargo02-big.jpg';
import project03Big_03 from '../img/projects/cargo03-big.jpg';
import project03Big_04 from '../img/projects/cargo04-big.jpg';
import project04 from '../img/projects/todo.jpg';
import project04Big_01 from '../img/projects/todo01-big.jpg';
import project04Big_02 from '../img/projects/todo02-big.jpg';
import project05 from '../img/projects/landing.jpg';
import project05Big_01 from '../img/projects/landing01-big.jpg';
import project05Big_02 from '../img/projects/landing02-big.jpg';
import project05Big_03 from '../img/projects/landing03-big.jpg';
import project06 from '../img/projects/calc.jpg';
import project06Big_01 from '../img/projects/calc01-big.jpg';
import project06Big_02 from '../img/projects/calc02-big.jpg';

//Big 1600*1200 (min 865*649)
//Small 370*278
export const projects = [
  {
    id: 1,
    title: '3D Game',
    skills: 'JavaScript, Babylon.js, Node.js, MongoDB',
    img: project01,
    imgsBig: [
      { link: project01Big_01, title: 'Main memu', id: 1 },
      { link: project01Big_02, title: 'About', id: 2 },
      { link: project01Big_03, title: 'Game interface', id: 3 },
    ],
    description:
      'The graduation of the project in the IT-Academy is a 3D browser game "StarWars". The development process involved writing a one-page application using JavaScript and a 3D library BABYLON.js . Authorization in the game is implemented using the internal Node server.js (Express) and MongoDB non-relational database (mongoose). Validation of the received data takes place using the express-validator module, the security of password storage is provided by the encryption module Bcrypt.js . When developing the project, modern JavaScript features such as promises, asynchronous functions and fetch API were used.',
    gitHubLink: 'https://github.com/fenixAlex88/StarWars',
  },
  {
    id: 4,
    title: 'ToDo App',
    skills: 'React.js, SCSS',
    img: project04,
    imgsBig: [
      { link: project04Big_01, title: 'empty', id: 1 },
      { link: project04Big_02, title: 'toods', id: 2 },
    ],
    description:
      'Web application on React.js . The application allows you to create a list of tasks, delete tasks, clear the list, and also mark completed tasks.',
    gitHubLink: 'https://github.com/fenixAlex88/todo',
  },
  {
    id: 5,
    title: 'Transporter Landing',
    skills: 'HTMl, CSS, SCSS, JS',
    img: project05,
    imgsBig: [
      { link: project05Big_01, title: 'Start', id: 1 },
      { link: project05Big_02, title: 'Transports', id: 2 },
      { link: project05Big_03, title: 'Answers', id: 3 },
    ],
    description: '',
    gitHubLink: 'https://github.com/fenixAlex88/SVETOFOR-landing',
  },
  {
    id: 3,
    title: 'Cargo Landing',
    skills: 'HTML, CSS, JavaScript',
    img: project03,
    imgsBig: [
      { link: project03Big_01, title: 'Search weather', id: 1 },
      { link: project03Big_02, title: 'City weather', id: 2 },
      { link: project03Big_03, title: 'City weather', id: 3 },
      { link: project03Big_04, title: 'City weather', id: 4 },
    ],
    description:
      'One-page website of a cargo transportation company. The site has Tabs, a Slider, a shipping cost calculator, as well as a modal window with a feedback form.',
    gitHubLink: 'https://github.com/fenixAlex88/',
  },
  {
    id: 2,
    title: 'Weather App',
    skills: 'JavaScript, JSON, Fetch API',
    img: project02,
    imgsBig: [
      { link: project02Big_01, title: 'Search weather', id: 1 },
      { link: project02Big_02, title: 'City weather', id: 2 },
    ],
    description:
      'A JavaScript web application. The application allows you to find out the weather in the cities of the world. Asynchronous requests to the API server are used.',
    gitHubLink: 'https://github.com/fenixAlex88/weather',
  },
  {
    id: 6,
    title: 'Calc App',
    skills: 'HTML, CSS, JavaScript',
    img: project06,
    imgsBig: [
      { link: project06Big_01, title: 'Main View', id: 1 },
      { link: project06Big_02, title: 'Calculated', id: 2 },
    ],
    description:
      'Native JavaScript web application. The application is a calculator for mathematical calculations with two operands. The calculator is checked using CSS Grid Layout.',
    gitHubLink: 'https://github.com/fenixAlex88/calculator',
  },
];
