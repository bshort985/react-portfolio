import React from "react";
import Project from "../Project";
import { useState } from "react";

function Portfolio() {

    const [projects] = useState([
        {
            name: "Run Buddy",
            description: "HTML site",
            link: "https://lernantino.github.io/run-buddy/",
            repo: "https://github.com/bshort985/run-buddy"
        }
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
}

export default Portfolio;