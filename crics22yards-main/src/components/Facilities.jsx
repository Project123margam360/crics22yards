import React from 'react';
import '../styles/Facilities.css';
import backgroundImage from '../assets/10024.jpg';
import lane from '../assets/10025.webp';
import bowling from '../assets/10026.jpg';
import box from '../assets/10027.jpg';
import gym from '../assets/10001.png';
import relax from '../assets/10029.webp';
import proshop from '../assets/10030.jpg';

export default function Facilities() {
  const facilities = [
    {
      title: 'Advanced Cricket Lanes',
      description: 'Our facility boasts 8 advanced cricket lanes equipped with professional-grade Gaddick nets. These lanes are designed to simulate real-match conditions, allowing players to practice various scenarios and hone their skills effectively.',
      image: lane
    },
    {
      title: 'High-Tech Bowling Machines',
      description: 'Equipped with the latest technology, our bowling machines include features like variable speed controls, spin and swing options, and automated line adjustments. These machines provide consistent and challenging deliveries, helping players improve their batting under diverse circumstances.',
      image: bowling
    },
    {
      title: 'Box Cricket',
      description: 'Experience the thrill of cricket all year round at our state-of-the-art indoor box cricket facility. Designed for players of all skill levels, our venue offers a safe, weather-proof environment with professional-grade turf, high-quality lighting and flexible booking options. With less time spent chasing the ball and more time swinging the bat, it\'s all about maximizing fun.',
      image: box
    },
    {
      title: 'Comprehensive Fitness Gym',
      description: 'Our gym is tailored specifically for cricketers, with equipment and training programs designed to enhance strength, flexibility, endurance, and agility. The fitness area is integral to our holistic approach to player development, ensuring physical conditioning that complements technical cricket training.',
      image: gym
    },
    {
      title: 'Relaxation Areas',
      description: 'Players can relax and strategize in dedicated areas designed for team meetings and strategy sessions. These spaces are equipped with comfortable seating and a conducive environment for reviewing game footage and conducting tactical sessions.',
      image: relax
    },
    {
      title: 'ProShop and Gear Store',
      description: 'Our on-site ProShop is stocked with the latest cricket gear and apparel from leading brands. Whether you need a new bat, custom fitted gear or the latest equipment, our ProShop team have everything you need to equip yourself to play your best game.',
      image: proshop
    }
  ];

  return (
    <section id="rentals" className="facilities-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="facilities-overlay"></div>
      <div className="facilities-content">
        <h2 className="facilities-title">Our Cutting-Edge Facilities</h2>
        <p className="facilities-description">
          Welcome to Crics 22Yards Columbus, where our state-of-the-art facilities are meticulously designed to provide both aspiring and professional cricketers with the best environment to train, learn, and compete. Our facility ensures that every cricketer has access to top-tier resources that foster significant improvements in performance and technique.
        </p>

        <div className="facilities-grid">
          {facilities.map((facility, index) => (
            <div key={index} className="facility-card" style={{ '--bg-image': `url(${facility.image})` }}>
              <div className="facility-overlay-card"></div>
              <div className="facility-content">
                <h3 className="facility-title">{facility.title}</h3>
                <p className="facility-text">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
