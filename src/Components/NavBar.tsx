import React from "react";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <div className="navbar-logo">
            <img src="2131947.jpg" alt="NDTV Logo" />
          </div>
          <ul className="navbar-menu">
            <li className="navbar-item">Live TV</li>
            <li className="navbar-item">Latest</li>
            <li className="navbar-item">India</li>
            <li className="navbar-item">Video</li>
            <li className="navbar-item">Elections</li>
            <li className="navbar-item">Opinion</li>
            <li className="navbar-item">Cities</li>
            <li className="navbar-item">Web Stories</li>
            <li className="navbar-item">Off Beat</li>
            <li className="navbar-item">Trends</li>
          </ul>
        </div>
        <div className="navbar-links">
          {/* Additional links or buttons can be added here */}
        </div>
      </nav>
   
      <div className="advertisement">
        <h6>Advertisement</h6>
        <div className="add-img">
          <img src="17385618007593267872.jpg" alt="add_image" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
