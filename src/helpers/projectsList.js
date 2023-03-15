import project01 from '../img/projects/game.jpg';
import project01Big_01 from '../img/projects/game01-big.jpg';
import project01Big_02 from '../img/projects/game02-big.jpg';
import project01Big_03 from '../img/projects/game03-big.jpg';
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
    gitHubLink: 'https://github.com/',
  },
  {
    id: 5,
    title: 'Landing',
    skills: 'HTMl, CSS, SCSS, JS',
    img: project05,
    imgsBig: [
      { link: project05Big_01, title: 'Start', id: 1 },
      { link: project05Big_02, title: 'Transports', id: 2 },
      { link: project05Big_03, title: 'Answers', id: 3 },
    ],
    gitHubLink: 'https://github.com/',
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
    gitHubLink: 'https://github.com/fenixAlex88/',
  },
];
