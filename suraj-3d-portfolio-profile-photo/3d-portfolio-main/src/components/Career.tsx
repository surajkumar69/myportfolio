import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-role">
              <h4>Web Development Intern</h4>
              <h5>3Skill Training</h5>
            </div>
            <div className="career-duration">
              <h3>2 MONTHS</h3>
            </div>
            <div className="career-desc">
              <p>
                Completed a 2-month internship in Web Development focused on
                practical skills, project-based learning and professional
                development aligned with industry expectations.
              </p>
              <a href="/images/suraj-internship-certificate.jpeg" target="_blank" rel="noreferrer">
                View Internship Certificate ↗
              </a>
            </div>
          </div>

          <div className="career-info-box">
            <div className="career-role">
              <h4>Freelance Developer</h4>
              <h5>Websites & Digital Products</h5>
            </div>
            <div className="career-duration">
              <h3>NOW</h3>
            </div>
            <div className="career-desc">
              <p>
                Building websites and web experiences for businesses, travel
                brands, real-estate projects, gyms and other client businesses.
                Focused on premium UI, responsiveness, performance and deployment.
              </p>
            </div>
          </div>

          <div className="career-info-box">
            <div className="career-role">
              <h4>Full Stack Development</h4>
              <h5>React · Node.js · Modern Web</h5>
            </div>
            <div className="career-duration">
              <h3>2025–NOW</h3>
            </div>
            <div className="career-desc">
              <p>
                Developing production-ready frontend and backend experiences,
                integrating APIs, improving UX and taking projects from local
                development to live deployment.
              </p>
            </div>
          </div>

          <div className="career-info-box">
            <div className="career-role">
              <h4>Client Projects</h4>
              <h5>Business Websites</h5>
            </div>
            <div className="career-duration">
              <h3>ONGOING</h3>
            </div>
            <div className="career-desc">
              <p>
                Delivering custom websites for real-world businesses with
                requirements gathering, design references, content updates,
                responsive layouts and launch support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
