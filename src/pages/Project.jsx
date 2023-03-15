import { useParams } from 'react-router-dom';
import BtnGitHub from '../components/btnGitHub/BtnGitHub';
import Carusel from '../components/carusel/Carusel';
import { projects } from '../helpers/projectsList';

const Project = () => {
  const { id } = useParams();
  const { title, imgsBig, skills, gitHubLink = null } = projects.find((project) => project.id === +id);
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{title}</h1>
          <Carusel>
            {imgsBig.map(({link, title, id}) => {
              return <img src={link} alt={title} key={id} className="project-details__cover" />;
            })}
          </Carusel>
          <div className="project-details__desc">
            <p>{skills}</p>
          </div>
          {gitHubLink && <BtnGitHub link={gitHubLink} />}
        </div>
      </div>
    </main>
  );
};

export default Project;
