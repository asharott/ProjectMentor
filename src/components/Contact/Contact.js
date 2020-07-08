import React, { useState, useContext } from "react";
import { ProfileContext } from "../../contexts/ProfileContext";

const Contact = (props) => {
  const { email } = useContext(ProfileContext);
  var [expanded, toggleExpanded] = useState(false);
  const renderContact = () => {
    if (!expanded) {
      return (
        <div className="contactSection">
          <div className="contactButtonContainer">
            <button
              className="contactButton"
              onClick={() => {
                toggleExpanded((expanded = !expanded));
              }}
            >
              Contacter
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="contactSectionExpanded">
          <div className="contactMailContainer">
            <p>{email}</p>
          </div>
          <div className="closeButtonContainer">
            <button
              className="closeButton"
              onClick={() => {
                toggleExpanded((expanded = !expanded));
              }}
            >
              Annuler
            </button>
          </div>
        </div>
      );
    }
  };
  return renderContact();
};

export default Contact;
