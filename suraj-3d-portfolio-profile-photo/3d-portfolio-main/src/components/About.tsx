import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <div className="about-photo-wrap">
          <img src="/images/suraj-profile.jpeg" alt="Suraj Kumar Singh" className="about-photo" loading="lazy" />
        </div>
        <div className="about-copy">
          <h3 className="title">About Me</h3>
          <p className="para">
            I'm Suraj Kumar Singh, a full-stack web developer who builds modern, fast
            and conversion-focused websites for businesses and brands.
          </p>
          <p className="para">
            I work across frontend, backend, responsive UI, animations and
            deployment, turning ideas into polished products that are ready to
            go live.
          </p>
          <div className="about-tags">
            <span>Full Stack</span>
            <span>Web Development</span>
            <span>UI & UX</span>
            <span>Client Projects</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
