import { useState } from "react";

import FormFindSitters from "../components/FindDogSitter-components/FormFindSitters.jsx";
import InputSearch from "../components/FindDogSitter-components/Input.jsx";
import UserCards from "../components/FindDogSitter-components/UserCards.jsx";

import USERS from "../data/dogsitters.js";

import "./FindDogSitter.css";

import imgPet from "../images/image-from-rawpixel-id-6549243-png.png";


export default function FindDogSitter() {
  const [searchText, setSearchText] = useState("");

  function handleSearch(query) {
    setSearchText(query.toLowerCase());
  }

  const filteredUsers = USERS.filter(
    (user) =>
      user.name.toLowerCase().includes(searchText) ||
      user.city.toLowerCase().includes(searchText)
  );

  return (
    <div className="page">
      <div className="page-search">
        <InputSearch onSearch={handleSearch} />
        <UserCards users={filteredUsers} />
      </div>
      <div className="page-wrapper">
        <img className="page-image" src={imgPet} alt="" />
        <FormFindSitters />
      </div>
    </div>
  );
}
