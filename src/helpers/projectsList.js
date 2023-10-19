import project001 from "../img/projects/project001.jpg";
import project001Big_01 from "../img/projects/project001Big_01.jpg";
import project001Big_02 from "../img/projects/project001Big_02.jpg";
import project001Big_03 from "../img/projects/project001Big_03.jpg";
import project002 from "../img/projects/eshop.jpg";
import project002Big_01 from "../img/projects/eshop01.jpg";
import project002Big_02 from "../img/projects/eshop02.jpg";
import project002Big_03 from "../img/projects/eshop03.jpg";
import project002Big_04 from "../img/projects/eshop04.jpg";
import project003 from "../img/projects/eshopadmin.jpg";
import project003Big_01 from "../img/projects/eshopadmin01.jpg";
import project003Big_02 from "../img/projects/eshopadmin02.jpg";
import project003Big_03 from "../img/projects/eshopadmin03.jpg";
import project003Big_04 from "../img/projects/eshopadmin04.jpg";
import project003Big_05 from "../img/projects/eshopadmin05.jpg";
import project004 from "../img/projects/messenger.jpg";
import project004Big_01 from "../img/projects/messenger01.jpg";
import project004Big_02 from "../img/projects/messenger02.jpg";
import project004Big_03 from "../img/projects/messenger03.jpg";
import project005 from "../img/projects/cryptocurrencies.jpg";
import project005Big_01 from "../img/projects/cryptocurrencies01.jpg";
import project005Big_02 from "../img/projects/cryptocurrencies02.jpg";
import project01 from "../img/projects/game.jpg";
import project01Big_01 from "../img/projects/game01-big.jpg";
import project01Big_02 from "../img/projects/game02-big.jpg";
import project01Big_03 from "../img/projects/game03-big.jpg";
import project02 from "../img/projects/weather.jpg";
import project02Big_01 from "../img/projects/weather01-big.jpg";
import project02Big_02 from "../img/projects/weather02-big.jpg";
import project03 from "../img/projects/cargo.jpg";
import project03Big_01 from "../img/projects/cargo01-big.jpg";
import project03Big_02 from "../img/projects/cargo02-big.jpg";
import project03Big_03 from "../img/projects/cargo03-big.jpg";
import project03Big_04 from "../img/projects/cargo04-big.jpg";
import project04 from "../img/projects/todo.jpg";
import project04Big_01 from "../img/projects/todo01-big.jpg";
import project04Big_02 from "../img/projects/todo02-big.jpg";
import project05 from "../img/projects/landing.jpg";
import project05Big_01 from "../img/projects/landing01-big.jpg";
import project05Big_02 from "../img/projects/landing02-big.jpg";
import project05Big_03 from "../img/projects/landing03-big.jpg";
import project06 from "../img/projects/calc.jpg";
import project06Big_01 from "../img/projects/calc01-big.jpg";
import project06Big_02 from "../img/projects/calc02-big.jpg";

//Big 1600*1200 (min 865*649)
//Small 370*278
export const projects = [
    {
        id: 1,
        title: "Attendance Journal",
        skills: "React.js, Redux toolkit, JavaScript, SCSS, Figma, GitLab",
        img: project001,
        imgsBig: [
            { link: project001Big_01, title: "Auth", id: 1 },
            { link: project001Big_02, title: "Users list", id: 2 },
            { link: project001Big_03, title: "Edit user", id: 3 },
        ],
        description:
            "Attendance Journal - a web application that is designed for teachers and methodologists to improve the organization of their work, as well as to keep track and analyze the statistics of attendance. The web application is created using such technologies as React.js, Redux toolkit, Axios, Storybook, Jest and custom validation. And to interact with the backend part - HTTP API.",
    },
    {
        id: 2,
        title: "E-Shop",
        skills: "Next.js, React.js, TypeScript, Tailwind",
        img: project002,
        imgsBig: [
            { link: project002Big_01, title: "Main", id: 1 },
            { link: project002Big_02, title: "Filter", id: 2 },
            { link: project002Big_03, title: "Product card", id: 3 },
            { link: project002Big_04, title: "Shoping card", id: 4 },
        ],
        description:
            "An online store generated using the administrative panel and filled with merchandise. Allows you to add products to the cart and make purchases.",
        gitHubLink: "https://github.com/fenixAlex88/e-shop",
        preview: "https://e-shop-bice-six.vercel.app",
    },
    {
        id: 3,
        title: "E-Shop Admin",
        skills: "Next.js, React.js, TypeScript, Tailwind, Zustand, Prisma, PostgreSQL, Clerk auth",
        img: project003,
        imgsBig: [
            { link: project003Big_01, title: "Dashboard", id: 1 },
            { link: project003Big_02, title: "Products list", id: 2 },
            { link: project003Big_03, title: "Colors list", id: 3 },
            { link: project003Big_04, title: "API list", id: 4 },
            { link: project003Big_05, title: "Create shop", id: 5 },
        ],
        description:
            "An admin panel that allows you to dynamically create online store pages, add product categories and the products themselves, as well as view sales statistics.",
        gitHubLink: "https://github.com/fenixAlex88/e-shop-admin",
        preview: "https://e-shop-admin-six.vercel.app",
    },
    {
        id: 4,
        title: "Messenger",
        skills: "Next.js, React.js, TypeScript, Tailwind, Zustand, Prisma, MongoDB, NextAuth",
        img: project004,
        imgsBig: [
            { link: project004Big_01, title: "Conversation", id: 1 },
            { link: project004Big_02, title: "Auth", id: 2 },
            { link: project004Big_03, title: "Peoples", id: 3 },
        ],
        description:
            "A messenger for exchanging text messages, as well as images. Supports the creation of group chats.",
        gitHubLink: "https://github.com/fenixAlex88/Messenger",
        preview: "https://messenger-fenixalex88.vercel.app",
    },
    {
        id: 5,
        title: "Cryptocurrencies",
        skills: "Next.js, React.js, TypeScript, Tailwind, RestAPI",
        img: project005,
        imgsBig: [
            { link: project005Big_01, title: "Conversation", id: 1 },
            { link: project005Big_02, title: "Conversation", id: 2 },
        ],
        description:
            "A service for checking cryptocurrency exchange rates according to the Binance exchange",
        gitHubLink: "https://github.com/fenixAlex88/Cryptocurrencies",
        preview: "https://cryptocurrencies-gamma.vercel.app",
    },
    {
        id: 6,
        title: "3D Game",
        skills: "JavaScript, Babylon.js, Node.js, MongoDB",
        img: project01,
        imgsBig: [
            { link: project01Big_01, title: "Main memu", id: 1 },
            { link: project01Big_02, title: "About", id: 2 },
            { link: project01Big_03, title: "Game interface", id: 3 },
        ],
        description:
            'The graduation of the project in the IT-Academy is a 3D browser game "StarWars". The development process involved writing a one-page application using JavaScript and a 3D library BABYLON.js . Authorization in the game is implemented using the internal Node server.js (Express) and MongoDB non-relational database (mongoose). Validation of the received data takes place using the express-validator module, the security of password storage is provided by the encryption module Bcrypt.js . When developing the project, modern JavaScript features such as promises, asynchronous functions and fetch API were used.',
        gitHubLink: "https://github.com/fenixAlex88/StarWars",
    },
    {
        id: 7,
        title: "ToDo App",
        skills: "React.js, SCSS",
        img: project04,
        imgsBig: [
            { link: project04Big_01, title: "empty", id: 1 },
            { link: project04Big_02, title: "toods", id: 2 },
        ],
        description:
            "Web application on React.js . The application allows you to create a list of tasks, delete tasks, clear the list, and also mark completed tasks.",
        gitHubLink: "https://github.com/fenixAlex88/todo",
    },
    {
        id: 8,
        title: "Transporter Landing",
        skills: "HTMl, CSS, SCSS, JS",
        img: project05,
        imgsBig: [
            { link: project05Big_01, title: "Start", id: 1 },
            { link: project05Big_02, title: "Transports", id: 2 },
            { link: project05Big_03, title: "Answers", id: 3 },
        ],
        description: "",
        gitHubLink: "https://github.com/fenixAlex88/SVETOFOR-landing",
    },
    {
        id: 9,
        title: "Cargo Landing",
        skills: "HTML, CSS, JavaScript",
        img: project03,
        imgsBig: [
            { link: project03Big_01, title: "Search weather", id: 1 },
            { link: project03Big_02, title: "City weather", id: 2 },
            { link: project03Big_03, title: "City weather", id: 3 },
            { link: project03Big_04, title: "City weather", id: 4 },
        ],
        description:
            "One-page website of a cargo transportation company. The site has Tabs, a Slider, a shipping cost calculator, as well as a modal window with a feedback form.",
        gitHubLink: "https://github.com/fenixAlex88/cargo",
    },
    {
        id: 10,
        title: "Weather App",
        skills: "JavaScript, JSON, Fetch API",
        img: project02,
        imgsBig: [
            { link: project02Big_01, title: "Search weather", id: 1 },
            { link: project02Big_02, title: "City weather", id: 2 },
        ],
        description:
            "A JavaScript web application. The application allows you to find out the weather in the cities of the world. Asynchronous requests to the API server are used.",
        gitHubLink: "https://github.com/fenixAlex88/weather",
    },
    {
        id: 11,
        title: "Calc App",
        skills: "HTML, CSS, JavaScript",
        img: project06,
        imgsBig: [
            { link: project06Big_01, title: "Main View", id: 1 },
            { link: project06Big_02, title: "Calculated", id: 2 },
        ],
        description:
            "Native JavaScript web application. The application is a calculator for mathematical calculations with two operands. The calculator is checked using CSS Grid Layout.",
        gitHubLink: "https://github.com/fenixAlex88/calculator",
    },
];
