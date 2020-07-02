import React from "react";


const Page1 = (props) => {
  return (
    <div>
      <div className="jobSearchSection">
        <h2>Quel est votre métier ?</h2>
        <input type="search" className="jobSearchBar" placeholder="Recherchez votre métier"></input>
      </div>
    </div>
  );
};

export default Page1;
