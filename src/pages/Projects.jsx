import React from "react";
import "../styles/Project.css";

const projects = [
  {
    title: "MERN Stack App",
    description: "A full-stack application using MongoDB, Express.js, React.js, and Node.js with user login and dashboard.",
    tech: ["MongoDB", "Express", "React", "Node"]
  },
  {
    title: "Pizza Delivery Website",
    description: "A React-based pizza ordering app with cart management and responsive design.",
    tech: ["React", "JavaScript", "CSS"]
  },
  {
    title: ".NET & React Admin Panel",
    description: "Admin dashboard with data visualization, user authentication, and API integration.",
    tech: [".NET Core", "React", "Redux"]
  }
];

const Projects = () => {
  return (
    <div className="projectContainer" id="projects">
      <h2>Projects</h2>
      {projects.map((proj, index) => (
        <div key={index} className="projectCard">
          <h3>{proj.title}</h3>
          <p>{proj.description}</p>
          <div>
            {proj.tech.map((t, i) => (
              <span key={i} className="tech">{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
