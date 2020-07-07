import React, { useContext } from "react";
import RegisterButton from "../RegisterButton/RegisterButton";
import { ProgressContext } from "../../contexts/ProgressContext";

const Page10 = (props) => {
  const { setFirstName, setLastName, setEmail } = useContext(ProgressContext);
  return (
    <div>
      <div className="pageTenContent">
        <h2>Finalisez votre inscription 😎</h2>

        <input
          type="text"
          placeholder="Prénom"
          onChange={(event) => setFirstName(event.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Nom"
          onChange={(event) => setLastName(event.target.value)}
        ></input>
        <input
          type="mail"
          placeholder="Adresse e-mail"
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <input type="password" placeholder="Mot de passe"></input>
      </div>
      <RegisterButton></RegisterButton>
    </div>
  );
};

export default Page10;
