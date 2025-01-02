import { AnimatePresence, motion } from "motion/react";

import Reviews from "../components/Services-components/ReviewsCard.jsx";
import ServiceCards from "../components/Services-components/ServiceCards.jsx";
import USERS from "../data/dogsitters.js";

import "./Services.css";


export default function Services() {
  const filterCatsSitters = () => USERS.filter((user) => user.catSitter);
  const filterDogsSitters = () => USERS.filter((user) => user.dogSitter);
  const filterDogWalkers = () => USERS.filter((user) => user.dogWalker);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="services-page"
      >
        <h1 className="services-tittle">CHOOSE THE SERVICE YOU NEED</h1>
        <div className="services-container">
          <ServiceCards
            title={"Cat boarding"}
            information={
              "A cat sitter takes a cat into his home while its owner is away. He feeds the pet, strokes it, plays with it so that the kitty does not get bored. Everything is strictly according to your recommendations. Every day the catsitter sends photo and video reports in the Dogsy mobile app."
            }
            button={"Find a Cat Sitter"}
            filterFunction={filterCatsSitters}
          />
          <ServiceCards
            title={"Dog boarding"}
            information={
              "We have sitters for all types of dogs: for small Yorkies, and for large shepherds, and for puppies, and for older pets."
            }
            button={"Find a Dog Sitter"}
            filterFunction={filterDogsSitters}
          />
          <ServiceCards
            title={"Dog walking"}
            information={
              "We understand that life can get busy, and finding time for your furry friend’s daily walks can be challenging. That’s why we’re here to help! Our professional dog walkers are passionate animal lovers who ensure your pet gets the exercise, fresh air, and attention they need to stay happy and healthy."
            }
            button={"Find a Dog Walker"}
            filterFunction={filterDogWalkers}
          />
        </div>
        <h2 className="services-text">WHAT OUR CLIENTS ARE SAYING</h2>
        <Reviews />
        <div className="circle"></div>
        <div className="circle circle_2"></div>
        <div className="circle circle_3"></div>
      </motion.div>
    </AnimatePresence>
  );
}
