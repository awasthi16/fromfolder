import React, { useState } from "react";

const FormExample = () => {
  const [formData, setFormData] = useState({
    gender: "",
    interests: [],
    country: "",
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const newInterests = checked
          ? [...prev.interests, value]
          : prev.interests.filter((interest) => interest !== value);
        return { ...prev, interests: newInterests };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>React Form Example</h2>

      {/* Radio Buttons */}
      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={formData.gender === "Male"}
          onChange={handleInputChange}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={formData.gender === "Female"}
          onChange={handleInputChange}
        />
        Female
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="Other"
          checked={formData.gender === "Other"}
          onChange={handleInputChange}
        />
        Other
      </label>
      <br />

      {/* Checkboxes */}
      <label>
        <input
          type="checkbox"
          name="interests"
          value="Sports"
          checked={formData.interests.includes("Sports")}
          onChange={handleInputChange}
        />
        Sports
      </label>
      <label>
        <input
          type="checkbox"
          name="interests"
          value="Music"
          checked={formData.interests.includes("Music")}
          onChange={handleInputChange}
        />
        Music
      </label>
      <label>
        <input
          type="checkbox"
          name="interests"
          value="Travel"
          checked={formData.interests.includes("Travel")}
          onChange={handleInputChange}
        />
        Travel
      </label>
      <br />

      {/* Select Dropdown */}
      <label>
        Country:
        <select name="country" value={formData.country} onChange={handleInputChange}>
          <option value="">Select your country</option>
          <option value="USA">USA</option>
          <option value="India">India</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
        </select>
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormExample;
