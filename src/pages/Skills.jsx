import React from "react";
import "../styles/Skills.css";

const skills = {
  Languages: ["Python","Java","TypeScript","JavaScript"],
  Frontend: ["React.js", "Next.js", "Angular", "React Native"],
  Backend: ["FastAPI", "Spring Boot", "Node.js", "Express"],
  Databases :["PostgreSQL", "MySQL", "MongoDB", "DynamoDB"],
  "Cloud & DevOps": ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB"],
  Other: ["REST APIs", "GraphQL", "Kafka", "OAuth 2.0", "JWT", "TDD (pytest, JUnit, Jest)", "Datadog"]
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
