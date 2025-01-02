import { useState } from "react";

import ModalCard from "./ModalCard.jsx";

import "./ServiceCards.css";


export default function ServiceCards({
  title,
  information,
  button,
  filterFunction,
}) {
  const [isActive, setIsActive] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleButtonClick() {
    const results = filterFunction();
    setFilteredUsers(results);
    setIsActive(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setIsActive(false);
    document.body.style.overflow = "";
  }

  return (
    <>
      <article className="cards">
        <div className="cards-container">
          <div>
            <h2>{title}</h2>
          </div>
          <div>{information}</div>
          <div className="cards-bottom">
            <button onClick={handleButtonClick} className="cards-button">
              <span>{button}</span>
            </button>
          </div>
        </div>
      </article>

      {isActive && (
        <ModalCard
          title={title}
          filteredUsers={filteredUsers}
          closeModal={closeModal}
        />
      )}
    </>
  );
}
