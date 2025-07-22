import React, { useState } from "react";
import developerPng from "./images/developer-png.png";
import "./Contact.css"; // Import custom CSS

const contacts = [
  {
    name: "Abarna Krishnamoorthi",
   
    email: "abarnak.22it@kongu.edu",
    linkedin: "https://www.linkedin.com/in/abarna-krishnamoorthi-320391259/",
    github: "https://github.com/abarnakrishnamoorthi",
    phone: "+8148833594",
  },
  {
    name: "Harini Kumar",
  
    email: "harinik.22it@kongu.edu",
    linkedin: "https://www.linkedin.com/in/harini-k-748389259/",
    github: "https://github.com/har-kumar/",
    phone: "+9080850274",
  },
  {
    name: "AshokNirmal",
   
    email: "ashoknirmalps.22it@kongu.edu",
    linkedin: "https://www.linkedin.com/in/ashoknirmal-p-s-949566259",
    github: "https://github.com/ashoknirmal",
    phone: "+6383297756",
  },
];

const Contact = () => {
  const [activeContact, setActiveContact] = useState(null);

  const handleToggle = (index) => {
    setActiveContact(activeContact === index ? null : index);
  };

  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left">
        <h2>Let's Connect!</h2>
        <p className="contact-intro">
          We love collaborating and building new things! Feel free to reach out to any of us.
        </p>
        {contacts.map((contact, index) => (
          <div className={`contact-item ${activeContact === index ? "active" : ""}`} key={contact.name}>
            <div className="contact-header" onClick={() => handleToggle(index)}>
              <h3>{contact.name}</h3>
              <h4 className="contact-title">{contact.title}</h4>
            </div>
            {activeContact === index && (
              <div className="contact-details">
                <p>
                  <i className="fa fa-envelope"></i>
                  <a className="mail-links" href={`mailto:${contact.email}`}>
                    {contact.email}
                  </a>
                </p>
                <p>
                  <i className="fa fa-linkedin"></i>
                  <a className="mail-links" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </p>
                <p>
                  <i className="fa fa-github"></i>
                  <a className="mail-links" href={contact.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </p>
                <p>
                  <i className="fa fa-phone"></i>
                  <a className="mail-links" href={`tel:${contact.phone}`}>
                    {contact.phone}
                  </a>
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="contactUs-right">
        <img src={developerPng} alt="Developer" className="contactUs-image" />
      </div>
    </div>
  );
};

export default Contact;
