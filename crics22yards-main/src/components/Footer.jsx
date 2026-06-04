import React, { useState } from 'react';
import '../styles/Footer.css';
import bgImage from '../assets/10032.webp';

export default function Footer() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: 'Male',
    activity: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      gender: 'Male',
      activity: '',
      notes: ''
    });
  };

  return (
    <section id="contact" className="registration-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="registration-container">
        <div className="registration-content">
          <p className="register-label">Register Now</p>
          <h2>Get Started at Crics 22Yards Columbus Today!</h2>
          <p className="registration-description">
            Ready to take your cricket game to the next level? Whether you're looking to rent a lane for solo practice or enroll in one of our expert-led coaching programs, Crics 22Yards Columbus is the place to be. Fill out the form below to get more information and start your journey to cricket excellence!
          </p>
        </div>

        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder=""
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder=""
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=""
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder=""
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange}>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Activity</label>
              <input
                type="text"
                name="activity"
                value={formData.activity}
                onChange={handleChange}
                placeholder=""
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label>Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder=""
              rows="5"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">REGISTER NOW</button>
        </form>
      </div>
    </section>
  );
}
