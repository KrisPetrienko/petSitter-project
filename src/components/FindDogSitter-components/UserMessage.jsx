import { useState } from "react";

import "./UserMessage.css";


export default function UserMessage({ user, closeModal }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isFormSent, setIsFormSent] = useState(false);

  function validateForm() {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!message) {
      newErrors.message = "Message is required.";
    }

    return newErrors;
  }

  function handleSubmit() {
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsFormSent(true);
      setErrors({});
      console.log("Email:", email, "Message:", message);
      setEmail("");
      setMessage("");
    }
  }

  return (
    <div className="modal-form">
      {isFormSent ? (
        <div className="form-container modal-close">
          <p
            style={{ textAlign: "center", color: "green", fontSize: "1.2rem" }}
          >
            Thank you! Your message has been sent.
          </p>
          <button className="close-form_btn" onClick={closeModal}>
            Close
          </button>
        </div>
      ) : (
        <div className="form-container" onClick={(e) => e.stopPropagation()}>
          <button className="close-form_button" onClick={closeModal}>
            ×
          </button>
          <h2 style={{ margin: "1rem" }}>
            Contact <span style={{ color: "green" }}>{user.name}</span>
          </h2>
          <div className="form-wrapper_group">
            <div className="form-group">
              <label className="form-group-input" htmlFor="email">
                Please, enter your Email
              </label>
              <input
                className={`form-input ${errors.email ? "input-error" : ""}`}
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label className="form-group-input" htmlFor="textarea">
                Write your request
              </label>
              <textarea
                className={`form-input ${errors.message ? "input-error" : ""}`}
                name="textarea"
                id="textarea"
                rows="10"
                cols="50"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              {errors.message && (
                <p className="error-message">{errors.message}</p>
              )}
            </div>
            <button
              onClick={handleSubmit}
              className="form-submit-btn"
              type="button"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
