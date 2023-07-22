import React from "react";
import Contact from "../components/Contact";
import Team from "../components/Team";

const About: React.FC = () => {
  return (
    <div className="about bg-[#0a0a0a]">
      <Contact />
      <Team />
    </div>
  );
};

export default About;
