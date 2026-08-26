import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">
        <div className="landing-content-left">
          <h2>Hello! I'm</h2>
          <h1>
            SURAJ KUMAR
            <br />
            <span>SINGH</span>
          </h1>
          <div className="landing-role">
            <h3>Full Stack Web Developer</h3>
            <p className="landing-bio">
              Building modern, high-performance web applications and digital experiences with React, Node.js, and 3D web technologies.
            </p>
          </div>
          <div className="landing-cta">
            <a href="#contact" className="landing-btn-primary" data-cursor="disable">
              Get In Touch ↗
            </a>
            <a href="#work" className="landing-btn-secondary" data-cursor="disable">
              View Work
            </a>
          </div>
        </div>
        <div className="landing-character-right">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Landing;
