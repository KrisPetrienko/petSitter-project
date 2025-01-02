import { useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { List } from "../components/Question-components/List";
import { QuestionCard } from "../components/Question-components/QuestionCard";

import "./Questions.css";


export default function Questions() {
  const { id } = useParams();
  const imageHasLoaded = true;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="questions-container"
      >
        <List selectedId={id} />
        <AnimatePresence>
          {id && imageHasLoaded && <QuestionCard id={id} key="item" />}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
