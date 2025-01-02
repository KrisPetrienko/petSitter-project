import { useState } from "react";

import "./Input.css";


export default function InputSearch({ onSearch }) {
  const [inputText, setInputText] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setInputText(value);
    onSearch(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input-search"
        onChange={handleChange}
        value={inputText}
        type="text"
        placeholder="Search the name or city..."
      />
    </form>
  );
}
