import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { questions } from "../../data/data.js";


const images = import.meta.glob("../images/*.jpg", { eager: true });

export function QuestionCard({ id }) {
  const questionData = questions.find((item) => item.id === id);

  if (!questionData) {
    return (
      <div className="not-found">
        <p>Question not found</p>
        <NavLink to="/questions">Go back to questions</NavLink>
      </div>
    );
  }

  const { question, answer } = questionData;

  const getImage = (id) => images[`../images/${id}.jpg`]?.default;

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          style={{ pointerEvents: "auto" }}
          className="overlay"
        >
          <NavLink to="/questions" />
        </motion.div>
        <div className="card-content-container open">
          <motion.div
            className="card-content card-content-open"
            layoutId={`card-container-${id}`}
          >
            <motion.div
              className="card-image-container card-image-container-open"
              layoutId={`card-image-container-${id}`}
            >
              <img className="card-image" src={getImage(id)} alt={question} />
            </motion.div>
            <motion.div
              className="title-container"
              layoutId={`title-container-${id}`}
            >
              <h2>{question}</h2>
            </motion.div>
            <motion.div className="content-container" animate>
              <p>{answer}</p>
            </motion.div>
          </motion.div>
        </div>
      </AnimatePresence>
    </>
  );
}
