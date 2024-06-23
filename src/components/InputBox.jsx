import React, { useState } from "react";

function InputBox({ onCityChange }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    onCityChange(inputValue); // Call the onCityChange function
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control inputData"
          placeholder="Enter the city..."
          value={inputValue}
          onChange={handleChange}
        />
        <button className="submitBtn" type="submit">
          <i className="fa-solid fa-magnifying-glass" />
        </button>
      </div>
    </form>
  );
}

export default InputBox;
