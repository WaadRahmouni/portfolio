import React, { useEffect, useState } from 'react';
import ProjectBox from './ProjectBox';
import { getProjects } from '../services/projectService';

const API_URL = "http://localhost:5000"; // backend

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return (
    <div>
      <h1 className='projectHeading'>
        Mes <b>Projets</b>
      </h1>

      <div className='project'>
        {projects.map(project => (
          <ProjectBox
            key={project._id}
            projectPhoto={`${API_URL}${project.projectPhoto}`}
            projectName={project.projectName}
            projectDesc={project.description}
            github={project.github}
            demo={project.website}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
