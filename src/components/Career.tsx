import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Security Engineer</h4>
                <h5>Astha Technology Solutions, Gujarat, India</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Installed data cabinets, rack systems, and supporting infrastructure
              at client sites. Performed hardware diagnostics and replaced failed
              components in servers and workstations. Terminated and tested network
              cables following safety protocols during deployments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder & Lead Technician</h4>
                <h5>D-InfoTech Pvt Ltd, Gujarat, India</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Led team of 4 technicians delivering IT infrastructure services to
              30+ business clients. Installed and configured Dell PowerEdge servers,
              performed component replacements, built rack-mounted servers, and
              configured Layer 2/Layer 3 Cisco switches and routers.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Linux Infrastructure Teaching Assistant</h4>
                <h5>Khoury College, Northeastern University, Boston</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Support 50+ students with Linux server management, system
              administration, and hardware troubleshooting. Guide students through
              log analysis, file system management, command-line diagnostics, and
              network configuration in lab environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
