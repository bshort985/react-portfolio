import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([

    {
      name: 'run-buddy',
      description: 'HTML/CSS',
      link: "https://lernantino.github.io/run-buddy/",
      repo: "https://github.com/bshort985/run-buddy"
    },
    {
      name: 'coding-quiz',
      description: 'HTML/CSS/JAVASCRIPT',
      link: "https://bshort985.github.io/Coding-Quiz/",
      repo: "https://github.com/bshort985/Coding-Quiz"
    },
    {
      name: 'work-day-scheduler',
      description: 'HTML/CSS/JAVASCRIPT',
      link: "https://bshort985.github.io/Work-Day-Scheduler/",
      repo: "https://github.com/bshort985/Work-Day-Scheduler"
    },
    {
      name: 'e-commerce-backend',
      description: 'SQL',
      link: "https://drive.google.com/drive/folders/1CXOO4czZSf6rkNBZtEouJWCSWCizDAgJ?usp=sharing",
      repo: "https://github.com/bshort985/eCommerceBackend"
    },
    {
      name: 'social-network-api',
      description: 'MONGOOSE',
      link: "https://drive.google.com/drive/folders/1onuIYGQqVpte9FlrSeFBj6dQNWqOwixr?usp=sharing",
      repo: "https://github.com/bshort985/SocialNetworkAPI"
    },
    {
      name: 'team-profile-generator',
      description: 'JAVASCRIPT',
      link: "https://drive.google.com/file/d/17Rqjmo4PZRxjN3RnC-4LeK2hgAE7qnk3/view?usp=sharing",
      repo: "https://github.com/bshort985/team-profile-generator"
    },
 
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;