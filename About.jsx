import React from "react";
import  "../styles/About.css";

const About = () => {
  return (
    <div className="aboutContainer" id="about">
      <h2>About Me</h2>
      <p>
        I'm a Senior Full-Stack Engineer with 5+ years building production systems that scale — currently at Deloitte, where I own backend services in Python and TypeScript serving 50,000+ daily users at 99.9% uptime.
I care most about systems that hold up under real load, not just demos — like migrating a legacy reporting pipeline to Kafka-based events and cutting generation time from 12 seconds to under 2.
Outside of shipping features, I mentor engineers, write clean tested code (TDD-first), and use AI tooling like Claude Code daily to move faster without cutting corners.
      </p>
    </div>
  );
};

export default About;
