import React from "react";
import "../styles/Project.css";

const projects = [
  {
    title: "Kafka-Based Reporting Pipeline",
    description:
      "Migrated a legacy reporting module from synchronous database queries to a Kafka-based event-driven architecture, reducing report generation time from 12 seconds to under 2 seconds.",
    tech: ["Python", "FastAPI", "Kafka", "PostgreSQL"]
  },
  {
    title: "Internal Workflow Management Application",
    description:
      "Built a full-stack internal workflow application for 300+ employees, developing the FastAPI backend and React/TypeScript frontend while owning the project from requirements gathering through production support.",
    tech: ["FastAPI", "React", "TypeScript"]
  },
  {
    title: "Multi-Tenant SaaS Schema Redesign",
    description:
      "Redesigned the PostgreSQL schema for a multi-tenant SaaS platform to eliminate duplicate joins, improving dashboard query latency from 850ms to 300ms.",
    tech: ["PostgreSQL", "Python"]
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
