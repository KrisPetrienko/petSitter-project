import { useState, useReducer } from "react";

import "./FormFindSitters.css";


export default function FormFindSitters() {
  const DATA = [
    { labelName: "First Name:", inputName: "firstName", labelType: "text" },
    { labelName: "Last Name:", inputName: "lastName", labelType: "text" },
    { labelName: "E-Mail:", inputName: "email", labelType: "email" },
    { labelName: "Phone#:", inputName: "phone", labelType: "tel" },
    { labelName: "Address:", inputName: "address", labelType: "text" },
    { labelName: "City:", inputName: "city", labelType: "text" },
    { labelName: "Zip Code:", inputName: "zipCode", labelType: "text" },
  ];

  const options = [
    { id: "catSitting", label: "Cat Sitting" },
    { id: "dogSitting", label: "Dog Sitting" },
    { id: "dogWalking", label: "Dog Walking" },
  ];

  const minDate = new Date().toISOString().split("T")[0];
  const maxDescriptionLength = 500;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    description: "",
  });

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [description, setDescription] = useState("");
  const [isFormSent, setIsFormSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [errors, setErrors] = useReducer(
    (state, action) => ({ ...state, ...action }),
    {}
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors({ [name]: "" });
  };

  const handleCheckboxChange = (id) => {
    setSelectedOptions((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((option) => option !== id)
        : [...prev, id];

      setErrors({
        selectedOptions:
          updated.length === 0 ? "Please select at least one service." : "",
      });
      return updated;
    });
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    setErrors({ description: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};
    DATA.forEach((item) => {
      if (!formData[item.inputName].trim()) {
        newErrors[item.inputName] = "This field is required.";
      }
    });

    if (!formData.startDate || !formData.endDate) {
      newErrors.startDate = "Please select a start date.";
      newErrors.endDate = "Please select an end date.";
    } else if (new Date(formData.endDate) < new Date(formData.startDate)) {
      newErrors.endDate = "End date must be after start date.";
    }

    if (!formData.startTime || !formData.endTime) {
      newErrors.startTime = "Please select a start time.";
      newErrors.endTime = "Please select an end time.";
    }

    if (selectedOptions.length === 0) {
      newErrors.selectedOptions = "Please select at least one service.";
    }

    if (!description.trim()) {
      newErrors.description = "Please describe your pet.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsFormSent(true);
    setIsSubmitting(false);
  };

  const closeModal = () => {
    setIsFormSent(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      zipCode: "",
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
      description: "",
    });
    setSelectedOptions([]);
    setDescription("");
  };

  return isFormSent ? (
    <div
      className="form-container modal-close"
      style={{ margin: "-5rem", marginLeft: "2rem", opacity: "1" }}
    >
      <p style={{ textAlign: "center", color: "green", fontSize: "1.2rem" }}>
        Thank you! Your message has been sent.
      </p>
      <button className="close-form_btn" onClick={closeModal}>
        Close
      </button>
    </div>
  ) : (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form-title">
        Fill out the form, <br /> and we will find the best options for you!
      </h2>
      {DATA.map((item) => (
        <div key={item.inputName} className="form-wrapper">
          <label htmlFor={item.inputName}>{item.labelName}</label>
          <input
            id={item.inputName}
            type={item.labelType}
            name={item.inputName}
            value={formData[item.inputName]}
            onChange={handleInputChange}
            className={errors[item.inputName] ? "input-error" : ""}
          />
          {errors[item.inputName] && (
            <span className="error-message">{errors[item.inputName]}</span>
          )}
        </div>
      ))}
      <div style={{ color: "black" }} className="form-checkbox">
        <h3 className="form-checkbox-title">Select Services:</h3>
        {options.map((option) => (
          <label
            className="form-checkbox-label"
            key={option.id}
            htmlFor={option.id}
          >
            <input
              id={option.id}
              type="checkbox"
              name="checkbox"
              checked={selectedOptions.includes(option.id)}
              onChange={() => handleCheckboxChange(option.id)}
              className={errors.selectedOptions ? "input-error" : ""}
            />
            {option.label}
          </label>
        ))}
        {errors.selectedOptions && (
          <span className="error-message">{errors.selectedOptions}</span>
        )}
      </div>
      <div className="info-container">
        <div className="date-wrapper">
          <label htmlFor="startDate">Dates:</label>
          <div>
            <input
              id="startDate"
              type="date"
              name="startDate"
              value={formData.startDate}
              min={minDate}
              onChange={handleInputChange}
              className={errors.startDate ? "input-error" : ""}
            />
            <input
              id="endDate"
              type="date"
              name="endDate"
              value={formData.endDate}
              min={minDate}
              onChange={handleInputChange}
              className={errors.endDate ? "input-error" : ""}
            />
          </div>
          {errors.startDate && (
            <span className="error-message">{errors.startDate}</span>
          )}
          {errors.endDate && (
            <span className="error-message">{errors.endDate}</span>
          )}
        </div>
        <div className="time-wrapper">
          <label htmlFor="startTime">Time:</label>
          <div>
            <input
              id="startTime"
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleInputChange}
              className={errors.startTime ? "input-error" : ""}
            />
            <input
              id="endTime"
              type="time"
              name="endTime"
              value={formData.endTime}
              onChange={handleInputChange}
              className={errors.endTime ? "input-error" : ""}
            />
          </div>
          {errors.startTime && (
            <span className="error-message">{errors.startTime}</span>
          )}
          {errors.endTime && (
            <span className="error-message">{errors.endTime}</span>
          )}
        </div>
      </div>
      <div className="textarea-container">
        <label className="description-title" htmlFor="description">
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          rows="6"
          cols="40"
          maxLength={maxDescriptionLength}
          placeholder="Describe your pet..."
          value={description}
          onChange={handleDescriptionChange}
          className={errors.description ? "input-error" : ""}
        ></textarea>
        {errors.description && (
          <span className="error-message">{errors.description}</span>
        )}
        <p className="char-counter">
          {description.length}/{maxDescriptionLength}
        </p>
      </div>
      <button className="frutiger-button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          "Sending..."
        ) : (
          <div className="inner">
            <div className="top-white"></div>
            <span className="text">Send</span>
          </div>
        )}
      </button>
    </form>
  );
}
