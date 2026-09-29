import { useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import "./styles/Work.css";

const projects = [
  ["Tempo Traveller & Urbania", "Travel & Vehicle Rental", "Responsive business website • Vehicle rental • Lead generation", "https://tempotravellerandurbania.com/"],
  ["Sakal Sari Farmhouse", "Hospitality Website", "Farmhouse showcase • Booking-focused design • Responsive UI", "https://www.sakalsarifarmhouse.online/"],
  ["Kannu Yatri", "Travel Booking Platform", "Bus booking • Cab booking • Hotel booking • Holiday packages", "https://www.kannuyatri.online/"],
  ["SNS Tourist", "Corporate Transportation", "Employee transport • Corporate fleet • Booking & quote flow", "https://snstourist.online/"],
  ["Jyotii Setu", "Spiritual Services Platform", "Vedic astrology • Numerology • Tarot • Consultation booking", "https://www.jyotiisetu.com/"],
  ["RS Unisex Salon", "Salon & Beauty Business", "Modern business website • Service showcase • Customer enquiries", "https://rsunisexsalon.online/"],
  ["Aman Sahani Crane Services", "Crane Rental & Services", "Service showcase • Equipment rental • Business enquiries", "https://amansahanicraneservices.online/"],
  ["S.L Travels", "Travel & Tourism", "Travel packages • Responsive design • Business showcase", "https://sltravels.online/"],
  ["Zara Tours and Travels", "Travel & Tourism", "Tour packages • Travel booking • Responsive UI", "https://www.zaratoursandtravels.in/"],
  ["Acharya Ashirwad Consultancy", "Consultancy Services", "Professional consultancy • Business showcase • Contact integration", "https://acharyaashirwadconsultancy.online/"],
  ["North East Tours and Travel", "Travel & Tourism", "Tour packages • Travel booking • Business showcase", "https://northeasttoursandtravel.in/"],
  ["Maithilli Agro Tourism", "Agro Tourism", "Farm showcase • Ecotourism • Responsive UI", "https://maithilli-agro-torism-fx91.vercel.app/"],
] as const;


const demoProjects = [
  {
    title: "Skyline Properties",
    category: "Real Estate — Demo Project",
    tools: "Modern property showcase • Responsive UI • Lead generation concept",
    link: "https://skyline-properties-gvxv.vercel.app/",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const go = (index: number) => setCurrentIndex((index + projects.length) % projects.length);
  const [title, category, tools, link] = projects[currentIndex];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>Selected <span>Client Work</span></h2>
        <div className="client-projects">
          <button className="carousel-arrow carousel-arrow-left" onClick={() => go(currentIndex - 1)} aria-label="Previous project"><MdArrowBack /></button>
          <div className="client-project-card">
            <div className="client-project-number">0{currentIndex + 1}</div>
            <div className="client-project-content">
              <p className="client-project-label">CLIENT PROJECT</p>
              <h3>{title}</h3>
              <p className="client-project-category">{category}</p>
              <p className="client-project-tools">{tools}</p>
              <a className="client-project-link" href={link} target="_blank" rel="noreferrer" data-cursor="disable">Visit Live Website ↗</a>
            </div>
          </div>
          <button className="carousel-arrow carousel-arrow-right" onClick={() => go(currentIndex + 1)} aria-label="Next project"><MdArrowForward /></button>
          <div className="client-project-dots">
            {projects.map(([name], index) => (
              <button key={name} className={index === currentIndex ? "active" : ""} onClick={() => go(index)} aria-label={`Show ${name}`} />
            ))}
          </div>
        </div>
        <div className="client-project-list">
          {projects.map(([name, category], index) => (
            <a key={name} href={projects[index][3]} target="_blank" rel="noreferrer"
              className={`client-project-list-item ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)} data-cursor="disable">
              <span>0{index + 1}</span><strong>{name}</strong><small>{category}</small>
            </a>
          ))}
        </div>

        <div className="demo-projects">
          <h3 className="demo-projects-title">Demo <span>Projects</span></h3>
          <div className="demo-project-card">
            <div>
              <p className="client-project-label">DEMO PROJECT</p>
              <h4>{demoProjects[0].title}</h4>
              <p>{demoProjects[0].category}</p>
              <small>{demoProjects[0].tools}</small>
            </div>
            <a href={demoProjects[0].link} target="_blank" rel="noreferrer" data-cursor="disable">
              View Live Demo ↗
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Work;
