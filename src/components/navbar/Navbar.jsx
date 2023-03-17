import { NavLink } from 'react-router-dom';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import './style.css';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>Front-end Developer</strong> portfolio
          </NavLink>
          <BtnDarkMode />
          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to="/portfolio" className={({ isActive }) => `nav-list__link ${isActive ? 'nav-list__link--active' : ''}`}>
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/portfolio/projects" className={({ isActive }) => `nav-list__link ${isActive ? 'nav-list__link--active' : ''}`}>
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/portfolio/contacts" className={({ isActive }) => `nav-list__link ${isActive ? 'nav-list__link--active' : ''}`}>
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
