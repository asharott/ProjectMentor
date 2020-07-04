import React from "react";


const Testfetch = (props) => {
  fetch("http://localhost:8000/apip/posts/401")
    .then((response) => response.json())
    .then((data) => console.log(data.note));
  return "";
};


export default Testfetch;
