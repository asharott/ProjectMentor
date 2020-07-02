import React from "react";


const Testfetch = (props) => {
  fetch("http://localhost:8000/apip/posts/351")
    .then((response) => response.json())
    .then((data) => console.log(data.lastName));
  return "";
};


export default Testfetch;
