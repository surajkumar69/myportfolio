import "./styles/Certification.css";

const Certification = () => {
  return (
    <section className="certification-section section-container" id="certification">
      <div className="certification-container">
        <div className="certification-heading">
          <p>LEARN · GROW · SUCCEED</p>
          <h2>Internship <span>Certification</span></h2>
        </div>

        <div className="certification-card">
          <div className="certification-copy">
            <span className="certification-badge">CERTIFIED</span>
            <h3>Web Development Internship</h3>
            <h4>3Skill Training</h4>
            <p>
              Successfully completed a <strong>2-month internship in Web Development</strong>,
              focused on practical skills, project-based learning and professional development
              aligned with industry expectations.
            </p>
            <div className="certification-meta">
              <div><span>Program</span><strong>2 Months</strong></div>
              <div><span>Domain</span><strong>Web Development</strong></div>
              <div><span>Certificate ID</span><strong>ID-INTERN261167</strong></div>
            </div>
          </div>

          <a
            className="certificate-preview"
            href="/certificates/suraj-web-development-internship.jpg"
            target="_blank"
            rel="noreferrer"
            data-cursor="disable"
            aria-label="Open internship certificate"
          >
            <img
              src="/certificates/suraj-web-development-internship.jpg"
              alt="Suraj Kumar Singh 3Skill Web Development Internship Completion Certificate"
              loading="lazy"
            />
            <span>View Certificate ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certification;
