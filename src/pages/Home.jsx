import Header from '../components/header/Header';

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Front-end</h2>
              <p>JavaScript, ReactJS, HTML, CSS, SCSS, NPM, Yarn, JSON, Fetch API, BootStrap</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Back-end</h2>
              <p>NodeJS, MySQL, MongoDB</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
