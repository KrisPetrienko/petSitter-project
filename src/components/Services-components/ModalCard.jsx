import UserCards from "../FindDogSitter-components/UserCards.jsx";


export default function ModalCard({ title, filteredUsers, closeModal }) {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={closeModal}>
          ×
        </button>
        <h2 style={{ color: "#8cd6e9", margin: "1rem" }}>
          Find your perfect match:{" "}
          <span style={{ color: "white" }}>{title}</span>
        </h2>
        <UserCards users={filteredUsers} />
      </div>
    </div>
  );
}
