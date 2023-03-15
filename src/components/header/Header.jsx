import './style.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Aleksey</em>
          </strong>
          <br />a front-end developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a href="https://drive.google.com/file/d/1xeX1X1MSuzT09CJf7R5-LhAlqTH9_7Nw/view?usp=sharing" className="btn" target="_blank" rel="noreferrer">
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
