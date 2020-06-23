import React from "react";
import ProfilePic from "./ProfilePic";
import Username from "./Username";
import SearchBar from "./SearchBar";
import BurgerMenu from "./BurgerMenu";

const Header = (props) => {
  return (
    <div className="headerContainer">
      <div className="headerContent">
        <ProfilePic />
        <Username />
        <SearchBar />
        <BurgerMenu />
      </div>
    </div>
  );
};

export default Header;
