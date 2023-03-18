import './styles/main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './pages/MainLayout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Contacts from './pages/Contacts';

function App() {
  return (
    
      <Router>
        <div className="App">
        <Routes>
          <Route path="/portfolio" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="project/:id" element={<Project />} />
            <Route path="contacts" element={<Contacts />} />
          </Route>
        </Routes> 
          </div>
      </Router>
 
  );
}

export default App;
