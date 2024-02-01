import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Footer.css'
const Footer = () => {
  return <div className="footer">
      <span className="name">
        Inshorts made by - {" "}
        <a href="/">Arya</a>
      </span>
      <hr  style={{width:"90%"}}/>
      <div className="iconContainer">
        <a href="/" target="__blank"><InstagramIcon/></a>
        <a href="/" target="__blank"><LinkedInIcon/></a>
        <a href="/" target="__blank"><FacebookIcon/></a>
      </div>
  </div>;
};

export default Footer;
