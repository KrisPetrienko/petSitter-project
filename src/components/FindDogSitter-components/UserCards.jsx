import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import UserMessage from "./UserMessage.jsx";

import "./UserCards.css";


export default function UserCards({ users }) {
  const [activeUser, setActiveUser] = useState(null);

  const handleButtonClick = (userId) => {
    const user = users.find((user) => user.id === userId);
    setActiveUser(user);
  };

  const handleCloseModal = () => {
    setActiveUser(null);
  };

  return (
    <motion.article
      className="container"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <div className="user-card_wrapper">
            <img src={user.img} className="user-photo" alt={user.name} />
            <div>
              <div className="wrapper">
                <h2 className="user-name">{user.name}</h2>
                <p className="user-price">
                  from <b className="strong">{user.price} euro</b> / for 30 min
                </p>
              </div>
              <p className="user-location">{user.city}</p>
              <p className="user-description">{user.aboutMe}</p>

              {user.catSitter && (
                <button className="user-card-btn cats-btn">catSitter</button>
              )}
              {user.dogSitter && (
                <button className="user-card-btn dogs-btn">dogSitter</button>
              )}
              {user.dogWalker && (
                <button className="user-card-btn walker-btn">dogWalker</button>
              )}

              <button
                className="frutiger-button"
                onClick={() => handleButtonClick(user.id)}
              >
                <div className="inner">
                  <div className="top-white"></div>
                  <span className="text">Contact me</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      ))}

      <AnimatePresence>
        {activeUser && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={handleCloseModal}
          >
            <UserMessage user={activeUser} closeModal={handleCloseModal} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
