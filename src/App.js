import './styles/main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Contacts from './pages/Contacts';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio/project/:id" element={<Project />} />
          <Route path="/portfolio/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
