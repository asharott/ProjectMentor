import React from "react";
import Loupe from "../Assets/Loupe.png";

const SearchBar = (props) => {
  return (
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
  );
};

export default SearchBar;
