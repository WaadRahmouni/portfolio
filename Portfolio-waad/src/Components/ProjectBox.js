import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({
  projectPhoto,
  projectName,
  projectDesc,
  github,
  demo
}) => {
  return (
    <div className='projectBox'>
      <img
        className='projectPhoto'
        src={projectPhoto}
        alt={projectName}
      />

      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        <p>{projectDesc}</p>
        <br />

        {github && (
          <a href={github} target="_blank" rel="noreferrer">
            <button className='projectbtn'>
              <FaGithub /> Github
            </button>
          </a>
        )}

        {demo && (
          <a href={demo} target="_blank" rel="noreferrer">
            <button className='projectbtn'>
              <CgFileDocument /> Site
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectBox;
