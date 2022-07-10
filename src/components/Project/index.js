//  This will handle the Portfolio Logic

import React from "react";

function Project({ project }) {

    const { name, repo, link, description } = project;
  
    return (
      <div className="project" key={name}>
        <div className="project-text">
          <h3>
            <a href={link}>{name}{" "}</a>
            <a href={repo}>
              <i className="fab fa-github">GitHub</i>
            </a>
          </h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }
  
  export default Project;
