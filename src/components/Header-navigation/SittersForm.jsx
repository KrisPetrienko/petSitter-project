import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import "./SittersForm.css";


const options = [
  { id: "catSitting", label: "Cat Sitting" },
  { id: "dogSitting", label: "Dog Sitting" },
  { id: "dogWalking", label: "Dog Walking" },
];

export default function SittersForm({ closeModal }) {
  const [isFormSent, setIsFormSent] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    price: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required.";
    }
    if (!formData.city) {
      newErrors.city = "City is required.";
    }
    if (!formData.price) {
      newErrors.price = "Price is required.";
    }
    if (selectedOptions.length === 0) {
      newErrors.options = "Please select at least one service.";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Please describe yourself.";
    }
    if (!selectedFile) {
      newErrors.file = "Please upload an image.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsFormSent(true);

    setTimeout(() => {
      alert("Thank you! Your message has been sent.");

      setFormData({ name: "", city: "", price: "", description: "" });
      setSelectedOptions([]);
      setSelectedFile(null);
      setPreviewUrl(null);
      setErrors({});
      closeModal();
    }, 1000); //
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setErrors((prev) => ({
          ...prev,
          file: "Please upload an image file.",
        }));
        return;
      }

      setSelectedFile(file);
      setErrors((prev) => ({
        ...prev,
        file: "",
      }));

      const fileReader = new FileReader();
      fileReader.onload = () => setPreviewUrl(fileReader.result);
      fileReader.readAsDataURL(file);
    }
  };

  const handleCheckboxChange = (id) => {
    setSelectedOptions((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((option) => option !== id)
        : [...prev, id];

      return updated;
    });
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      {!isFormSent && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            layout
            className="modal-content"
            id="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button" onClick={closeModal}>
              ×
            </button>
            <h2 style={{ color: "white", margin: "2rem" }}>
              Apply to Be a Pet Sitter
            </h2>

            <form className="form-sitters" onSubmit={handleSubmit}>
              <div className="input-container">
                <label htmlFor="name">
                  Please, enter your name and surname
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </div>

              <div className="input-container">
                <label htmlFor="city">Please, enter your city</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
                {errors.city && (
                  <span className="error-message">{errors.city}</span>
                )}
              </div>

              <div className="input-price">
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={formData.price}
                  onChange={handleInputChange}
                />
                <p style={{ fontSize: "15px" }}>for 30 min</p>
                {errors.price && (
                  <span className="error-message">{errors.price}</span>
                )}
              </div>

              <div className="form-checkbox">
                <label style={{ fontSize: "20px", marginBottom: "1rem" }}>
                  Select services:
                </label>
                {options.map((option) => (
                  <label
                    className="sitters-checkbox-label"
                    key={option.id}
                    htmlFor={option.id}
                  >
                    <input
                      id={option.id}
                      type="checkbox"
                      name="checkbox"
                      checked={selectedOptions.includes(option.id)}
                      onChange={() => handleCheckboxChange(option.id)}
                    />
                    {option.label}
                  </label>
                ))}
                {errors.options && (
                  <span className="error-message">{errors.options}</span>
                )}
              </div>

              <div className="input-container">
                <label htmlFor="description">Tell us about you...</label>
                <textarea
                  name="description"
                  id="description"
                  rows="10"
                  cols="50"
                  value={formData.description}
                  onChange={handleInputChange}
                />
                {errors.description && (
                  <span className="error-message">{errors.description}</span>
                )}
              </div>

              <div>
                <label id="fileUpload" htmlFor="fileUpload">
                  Choose an image
                </label>
                <input
                  id="fileUpload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                {errors.file && (
                  <span className="error-message">{errors.file}</span>
                )}
              </div>

              {previewUrl && (
                <div>
                  <h3 style={{ color: "#8081c4" }}>Preview</h3>
                  <img
                    src={previewUrl}
                    alt="Preview"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "200px",
                      marginTop: "10px",
                    }}
                  />
                </div>
              )}

              <button type="submit" className="button2">
                Send
              </button>
            </form>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
