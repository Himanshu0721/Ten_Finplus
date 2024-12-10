

import React, { useState } from "react";
import ParticlesBackground from "../../ParticlesBackground";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    workEmail: "",
    country: "",
    role: "",
    importance: "",
    questions: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
  };

  return (
    <div>
      <ParticlesBackground />
      <div className="container">
        <h1 style={{ color: "white", textAlign: "center", marginBottom: "20px" }}>
          {/* Contact */}
        </h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          Name
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          Work email
          <input
            type="email"
            name="workEmail"
            placeholder="Work email"
            value={formData.workEmail}
            onChange={handleChange}
            required
          />
          Country
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select...
            </option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="India">India</option>
          </select>
          Role
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select...
            </option>
            <option value="Manager">Manager</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Other">Other</option>
          </select>
          How important is back office to your practice?
          <input
            type="number"
            name="importance"
            placeholder="From scale 0 to 10"
            min="0"
            max="10"
            value={formData.importance}
            onChange={handleChange}
            required
          />
          Questions
          <textarea
            name="questions"
            placeholder="Questions..."
            value={formData.questions}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
        <div className="bottom-section">
        <img
           className="bottom-image"
           src="https://framerusercontent.com/images/RBDm0msajwzWJTxSqFCD18cFta4.png"
           alt="Decoration"
        />
          <p className="waiting">
            
            50+ people waiting...
          </p>
          <p className="footer-text">
            Elevate the client experience with Fortuna & upgrade your backoffice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
