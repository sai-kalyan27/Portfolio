import React from "react";
import "../styles/Skills.css";

const skills = {
  Frontend: ["React.js", "Next.js", "TypeScript", "HTML5", "CSS3"],
  Backend: [".NET", "Node.js", "Express.js", "MongoDB"],
  Tools: ["Git", "GitHub", "Postman", "CI/CD"]
};

const Skills = () => {
  return (
    <div className="wrapper" id="skills">
      <h2>Technical Skills</h2>
      {Object.entries(skills).map(([category, items]) => (
        <div key={category}>
          <h3>{category}</h3>
          <ul>
            {items.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
