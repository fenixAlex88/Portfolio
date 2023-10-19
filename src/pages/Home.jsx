import Header from "../components/header/Header";

const Home = () => {
    return (
        <>
            <Header />
            <main className="section">
                <div className="container">
                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Front-end</h2>
                            <p>
                                NextJS, ReactJS, TypeScript, JavaScript, Tailwind, HTML, CSS, SCSS,
                                NPM, Yarn, JSON, Fetch API
                            </p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Back-end</h2>
                            <p>NodeJS, NestJS (in progress), PostgreSQL, MySQL, MongoDB </p>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    );
};

export default Home;
