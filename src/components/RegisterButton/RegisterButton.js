import React, { useState, useEffect, useContext } from "react";
import { ProgressContext } from "../../contexts/ProgressContext.js";

const RegisterButton = (props) => {
  const {
    firstName,
    lastName,
    email,
    job,
    city,
    resume,
    skills,
    experience,
    mentoringType,
    meetingType,
  } = useContext(ProgressContext);

  let [postId, setPostId] = useState("");

  const sendRequest = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        jobTitle: job,
        experience: experience,
        meetingType: meetingType,
        mentoringType,
        city: city,
        course: resume,
        competences: skills,
        email: email,
      }),
    };
    fetch("http://localhost:8000/apip/posts", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setPostId(data.id);
        console.log(postId);
      });
  };

  return (
    <div className="RegisterButtonContainer">
      <button
        onClick={() => sendRequest()}
        type="submit"
        className="RegisterButton"
      >
        S'inscrire
      </button>
    </div>
  );
};

export default RegisterButton;
