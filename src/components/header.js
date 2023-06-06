import React from "react";
import "../assets/css/header.css";
import SvgIcon from "../assets/svgIcon";

const Header = () => {
  return (
    <div className="header_container">
      <div className="header">
        <p className="header_text">The attire you own </p>
        <div className="header_contactme">
          <p className="header_text">For Query: <SvgIcon name="telephone" /> 1234567890</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
