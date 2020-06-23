import React from "react";
import profilepic from "../Assets/ProfilePic.png";
import Loupe from "../Assets/Loupe.png";

const Header = (props) => {
  return (
    <div className="headerContainer">
      <div className="headerContent">
        <div className="toCenterProfilePic">
          <img src={profilepic} className="profilePic" alt="profile pic" />
        </div>
        <div className="toCenterName">
          <span>Nom</span>
        </div>
        <div className="toCenterSearchBar">
          <input
            type="text"
            className="searchBar"
            style={{
              backgroundImage: "url(" + Loupe + ")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "95%",
            }}
          />
        </div>
        <div className="toCenterBurger">
          <ul className="burgerMenu">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
