import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div>
        <Link className="logo-container" to="/">
          <img className="navbar-logo" src={logo} alt="PawFinds Logo" />
          <p>{props.title}</p>
        </Link>
      </div>
      <div className="below-footer">
        <p>
          You can reach me at{" "}
          <a
            className="mail-links"
            href="mailto:abarnak.22it@kongu.edu,harinik.22it@kongu.edu,ashoknirmalps.22it@kongu.edu"
          >
            abarnak.22it@kongu.edu, harinik.22it@kongu.edu, ashoknirmalps.22it@kongu.edu
          </a>
        </p>
        <p>
          <a
            className="contact-links"
            href="https://www.linkedin.com/in/abarna-krishnamoorthi-320391259/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin-square"></i> Abarna
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a
            className="contact-links"
            href="https://www.linkedin.com/in/harini-k-748389259/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin-square"></i> Harini
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a
            className="contact-links"
            href="https://www.linkedin.com/in/ashoknirmal-p-s-949566259/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin-square"></i> Ashok
          </a>
        </p>
        <p>
          <a
            className="contact-links"
            href="https://github.com/abarnakrishnamoorthi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github"></i> Abarna
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a
            className="contact-links"
            href="https://github.com/har-kumar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github"></i> Harini
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a
            className="contact-links"
            href="https://github.com/ashoknirmal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github"></i> Ashok
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a
            className="contact-links"
            href="https://www.instagram.com/kaxhie_x/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram"></i> Instagram
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a
            className="contact-links"
            href="https://api.whatsapp.com/qr/GXRHM7PEPNOKA1?autoload=1&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-whatsapp"></i> WhatsApp
          </a>
        </p>
        <p>&copy; 2023 Harini Ashok Abarna</p>
      </div>
    </footer>
  );
};

export default Footer;
