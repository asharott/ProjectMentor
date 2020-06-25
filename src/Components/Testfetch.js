import React, { useState } from "react";

const Testfetch = (props) => {
  fetch("http://localhost:8000/api/post")
    .then((response) => response.json())
    .then((data) => console.log(data));
  return <div></div>;
};

export default Testfetch;
