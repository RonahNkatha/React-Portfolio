import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = { name: "", email: "", message: "" };

    setErrors(newErrors);

    if (form.name == "") {
      setErrors({ ...errors, name: "Name cannot be empty" });
    } else if (form.email == "") {
      setErrors({ ...errors, email: "Email cannot be empty" });
    } else if (!validateEmail(form.email)) {
      setErrors({ ...errors, email: "Email is invalid" });
    } else if (form.message == "") {
      setErrors({ ...errors, message: "Message cannot be empty" });
    }
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  return (
    <section className="section">
      <div className="container">
        <div className="contact-content">
          <h2>Contact</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
              />
              <span>{errors.name && errors.name}</span>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
              />
              <span>{errors.email && errors.email}</span>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                id="message"
                onChange={handleChange}
              ></textarea>
              <span>{errors.message && errors.message}</span>
            </div>
            <div className="form-group">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
