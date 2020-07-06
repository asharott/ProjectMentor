import React, { useState, createContext } from "react";

export const ProfileContext = createContext();

const ProfileContextProvider = (props) => {

  let [note, setNote] = useState("");
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [jobTitle, setJobTitle] = useState("");
  let [city, setCity] = useState("");
  let [competences, setCompetences] = useState([]);
  let [parcours, setParcours] = useState("");
  let [email, setEmail] = useState("");
  
    fetch("http://localhost:8000/apip/posts/451")
      .then((response) => response.json())
      .then(
        (data) =>
        {  
          setNote(note = data.note)
          setFirstName(firstName = data.firstName)
          setLastName(lastName = data.lastName)
          setJobTitle(jobTitle = data.jobTitle)
          setCity(city = data.city)
          setCompetences(competences= data.competences)
          setParcours(parcours= data.course)
          setEmail(email = data.email)
        }
      )
    return (
      <ProfileContext.Provider value={ {note , firstName, lastName, jobTitle, city, competences, parcours, email} }>
        {props.children}
      </ProfileContext.Provider>
    );

};
export default ProfileContextProvider;
