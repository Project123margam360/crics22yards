import React, { useState } from 'react';
import '../styles/ContactUsFormSection.css';

const ContactUsFormSection = () => {
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
    // Handle form submission
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
    <section className="contact-us-form-section">
      <div className="contact-us-form-container">
        <h2 className="contact-us-form-title">Send us a Message</h2>
        <p className="contact-us-form-subtitle">
          Fill out our online form with your query, and we'll respond promptly. Please provide your name, email, phone number, and a brief message describing your inquiry or feedback.
        </p>

        <div className="form-wrapper">
          <div className="form-map-container">
            <iframe
              title="Crics 22Yards Location Map"
              src="https://maps.google.com/maps?q=9525+OH-161,+Plain+City,+OH+43064&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="form-content">
            <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="activity">Activity</label>
                <input
                  type="text"
                  id="activity"
                  name="activity"
                  value={formData.activity}
                  onChange={handleChange}
                  placeholder="e.g., Coaching, Lane Rental, Events"
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="notes">Notes</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Please describe your inquiry or feedback..."
                rows="6"
              ></textarea>
            </div>

            <button type="submit" className="submit-button">REGISTER NOW</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsFormSection;
