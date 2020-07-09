import React, { useState, createContext, useEffect } from "react";

export const ProfileContext = createContext();

const ProfileContextProvider = (props) => {
  let [note, setNote] = useState("");
  let [meetingType, setMeetingType] = useState("");
  let [mentoringType, setMentoringType] = useState("");
  let [experience, setExperience] = useState("");
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [jobTitle, setJobTitle] = useState("");
  let [city, setCity] = useState("");
  let [competences, setCompetences] = useState([]);
  let [parcours, setParcours] = useState("");
  let [email, setEmail] = useState("");
  let [comment, setComment] = useState([]);
  let [commentAuthor, setCommentAuthor] = useState([]);
  let [commentContent, setCommentContent] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/apip/posts/512`)
      .then((response) => response.json())
      .then((data) => {
        setNote(data.note);
        setMeetingType(data.meetingType);
        setMentoringType(data.mentoringType);
        setExperience(data.experience);
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setJobTitle(data.jobTitle);
        setCity(data.city);
        setCompetences(data.competences);
        setParcours(data.course);
        setEmail(data.email);
        setComment((comment = data.comments));
        comment.map(({ firstName, content }) => {
          setCommentAuthor((commentAuthor) => [...commentAuthor, firstName]);
          setCommentContent((commentContent) => [...commentContent, content]);
        });
      });
  }, []);

  return (
    <ProfileContext.Provider
      value={{
        note,
        meetingType,
        mentoringType,
        experience,
        firstName,
        lastName,
        jobTitle,
        city,
        competences,
        parcours,
        email,
        commentAuthor,
        commentContent,
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};
export default ProfileContextProvider;
