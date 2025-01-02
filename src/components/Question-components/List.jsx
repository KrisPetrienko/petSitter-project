import { NavLink } from "react-router-dom";
import { questions } from "../../data/data.js";
import { motion } from "motion/react";


const images = import.meta.glob('../../images/question-card-img/*.jpg', { eager: true });

function Card({ id, question, theme }) {
  const getImage = (id) => images[`../../images/question-card-img/${id}.jpg`]?.default;

  return (
    <li className={`card ${theme}`}>
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={getImage(id)} alt={question} />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <h2 className="card-question">{question}</h2>
          </motion.div>
        </motion.div>
      </div>
      <NavLink to={id} className={`card-open-link`} />
    </li>
  );
}

export function List({ selectedId }) {
  return (
    <ul className="card-list">
      {questions.map((card) => (
        <Card key={card.id} {...card} isSelected={card.id === selectedId} />
      ))}
    </ul>
  );
}
