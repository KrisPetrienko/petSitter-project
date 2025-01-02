import { motion } from "motion/react";

import "./HomePage.css";

import image from "../images/pets.jpg";
import image_2 from "../images/pets_4.jpg";
import image_3 from "../images/index-feature-search.png";
import image_4 from "../images/index-feature-book.png";
import image_5 from "../images/index-feature-dog.png";


export default function HomePage() {
  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="main"
    >
      <h1 className="main-text">
        Trusted Dog Sitters and Dog Walkers in Your Area
      </h1>
      <h2 className="main-text page-text">
        <span style={{ color: "red" }}>&#10084;</span>
        We&#39;ll take care of you while you&#39;re away. &#128568;We&#39;ll
        take a walk while you&#39;re at work
      </h2>
      <span className="circle"></span>
      <span className="circle circle_2"></span>
      <div className="circle circle_3"></div>
      <div className="circle circle_4"></div>
      <div className="circle circle_3 circle_5"></div>
      <div className="circle circle_4 circle_6"></div>
      <div className="main-wrapper">
        <img src={image} alt="Dog and cat" className="image" />
        <motion.h3
          initial={{ transform: "translateX(-100px)" }}
          animate={{ transform: "translateX(0px)" }}
          transition={{ type: "spring" }}
          className="main-wrapper-text"
        >
          Welcome to a sanctuary of care and comfort for your beloved cats and
          dogs. Whether you're away for a weekend or an extended trip, we
          provide a safe, loving, and stress-free environment for your furry
          companions. With personalized attention, spacious play areas, and a
          commitment to their happiness, your pets will feel right at home.
          Because here, they’re not just pets—they’re family.
        </motion.h3>
        <img src={image_2} alt="Dog" className="image image_1" />
      </div>
      <h2 className="main-safety-text">Simple and safe</h2>
      <div className="main-information">
        <div className="main-info">
          <img className="main-info-image" src={image_3} alt="" />
          <h2>Find a dog sitter near you</h2>
        </div>
        <div className="main-info">
          <img className="main-info-image" src={image_4} alt="" />
          <h2>Book and conclude a contract online</h2>
        </div>
        <div className="main-info">
          <img className="main-info-image" src={image_5} alt="" />
          <h2>The dog is in good hands</h2>
        </div>
      </div>
    </motion.main>
  );
}
