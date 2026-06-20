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

  const features = [
    {
      icon: '🏏',
      title: 'Professional Indoor Cricket Nets',
      description:
        'Train year-round in premium indoor cricket lanes designed for batting practice, bowling sessions, coaching programs, and team training.'
    },
    {
      icon: '🎯',
      title: 'Advanced Cricket Training Equipment',
      description:
        'Practice with professional bowling machines, training tools, and modern cricket technology designed to improve technique and performance.'
    },
    {
      icon: '📅',
      title: 'Flexible Lane Rental Booking',
      description:
        'Book cricket lanes by the hour for individual practice, private coaching, team sessions, batting practice, bowling drills, and match preparation.'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Lane rental inquiry submitted:', formData);

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
    <section className="lane-rentals-why-choose-section">
      <div className="why-choose-container">
        <div className="why-choose-left">
          <p className="why-choose-label">
            Indoor Cricket Nets & Training Facilities
          </p>

          <h2 className="why-choose-title">
            Why Choose Crics 22Yards Columbus for Indoor Cricket Lane Rentals?
          </h2>

          <p className="why-choose-description">
            Crics 22Yards Columbus provides professional indoor cricket lane
            rentals for batting practice, bowling practice, private coaching,
            team training, match preparation, and recreational cricket. Our
            facility serves players from Columbus, Plain City, Dublin, Hilliard,
            Powell, Marysville, and surrounding Ohio communities.
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
          <h3 className="inquiry-title">Book Your Indoor Cricket Lane</h3>

          <p className="inquiry-description">
            Reserve an indoor cricket lane for batting practice, bowling
            training, private coaching, team sessions, or match preparation.
            Complete the form below and our team will contact you regarding
            availability and booking options.
          </p>

          <form className="inquiry-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="tel"
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
                  id="activity"
                  type="text"
                  name="activity"
                  value={formData.activity}
                  onChange={handleChange}
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
                rows="5"
              ></textarea>
            </div>

            <div className="submit-box">
              <button type="submit" className="submit-btn">
                SEND INQUIRY
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
