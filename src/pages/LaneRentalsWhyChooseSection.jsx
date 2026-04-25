import React, { useState } from 'react';
import '../styles/LaneRentalsWhyChooseSection.css';

export default function LaneRentalsWhyChooseSection() {
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

  const features = [
    {
      icon: '🏛️',
      title: 'Smart Lane Technology',
      description: 'Each lane is equipped with the latest technology, including automatic feed bowling machines, digital video analysis, and customizable pitch settings to cater to each player\'s needs.'
    },
    {
      icon: '🏌️',
      title: 'Top-of-the-Line Equipment',
      description: 'Practice with cutting-edge tools like our BOLA and JUGS bowling machines, which offer adjustable speeds and deliveries, and our Cricket Shot Shaper for precision training.'
    },
    {
      icon: '📅',
      title: 'Flexible Booking Options',
      description: 'Rent a lane by the hour or sign up for extended sessions at competitive rates. Our flexible scheduling makes it easy to find a time that works best for you.'
    }
  ];

  return (
    <section className="lane-rentals-why-choose-section">
      <div className="why-choose-container">
        <div className="why-choose-left">
          <p className="why-choose-label">What Makes us Special</p>
          <h2 className="why-choose-title">Why Choose Crics 22Yards Columbus for Lane Rental?</h2>
          <p className="why-choose-description">
            Our state-of-the-art indoor cricket facility is designed to cater to players of all levels. With advanced technology and high-quality equipment, we provide an unparalleled cricket experience that rivals internationally renowned academies.
          </p>

          <div className="features-list">
            {features.map((feature, index) => (
              <div key={index} className="feature-box">
                <div className="feature-left">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                </div>
                <div className="feature-right">
                  <div className="feature-divider"></div>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="why-choose-right">
          <h3 className="inquiry-title">Send us an Inquiry</h3>
          <p className="inquiry-description">
            Don't miss out on the opportunity to train in one of Plain City, OH's best indoor cricket facilities. Contact us today to book your lane and take your cricket skills to the next level.
          </p>

          <form className="inquiry-form" onSubmit={handleSubmit}>
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
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
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

            <div className="submit-box">
              <button type="submit" className="submit-btn">SEND INQUIRY</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
