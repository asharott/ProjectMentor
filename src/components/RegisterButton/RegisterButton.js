import React, { useContext } from "react";
import { ProgressContext } from "../../contexts/ProgressContext.js";
import { BrowserRouter as Link } from "react-router-dom";

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
        prompt(data.id, (document.location.href = "/MentorProfile"));
      });
  };

  return (
    <div className="RegisterButtonContainer">
      <button
        onClick={() => {
          sendRequest();
        }}
        type="submit"
        className="RegisterButton"
      >
        S'inscrire
      </button>
    </div>
  );
};

export default RegisterButton;
