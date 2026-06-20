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
      title: 'Indoor Cricket Nets & Training Lanes',
      description:
        'Train year-round in our professional indoor cricket nets and practice lanes. Designed for batting, bowling, fielding drills, and match preparation, our lanes provide a premium cricket training experience for players of all ages and skill levels.',
      image: lane
    },
    {
      title: 'Professional Bowling Machines',
      description:
        'Our advanced bowling machines offer adjustable pace, swing, spin, and line variations to help players improve batting technique, shot selection, reaction time, and match preparedness in a controlled training environment.',
      image: bowling
    },
    {
      title: 'Indoor Box Cricket Arena',
      description:
        'Enjoy fast-paced indoor box cricket in a safe and weather-proof environment. Our box cricket facility is ideal for friends, families, corporate events, birthday parties, team-building activities, and recreational cricket games.',
      image: box
    },
    {
      title: 'Cricketer-Focused Fitness Gym',
      description:
        'Our fitness area supports strength, endurance, flexibility, agility, and injury prevention. Designed specifically for cricket players, the gym complements coaching programs and overall athletic development.',
      image: gym
    },
    {
      title: 'Player Lounge & Team Meeting Areas',
      description:
        'Dedicated spaces for players, coaches, and teams to relax, review performance, discuss strategy, and build team culture in a comfortable environment.',
      image: relax
    },
    {
      title: 'Cricket Equipment & Pro Shop',
      description:
        'Access quality cricket bats, protective gear, training accessories, apparel, and equipment from leading cricket brands through our on-site cricket store.',
      image: proshop
    }
  ];

  return (
    <section
      id="rentals"
      className="facilities-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="facilities-overlay"></div>

      <div className="facilities-content">
        <h2 className="facilities-title">
          Indoor Cricket Facilities in Columbus, Ohio
        </h2>

        <p className="facilities-description">
          Crics 22Yards Columbus offers one of the most advanced indoor cricket facilities in Plain City, Ohio. Our venue is designed for cricket coaching, lane rentals, batting practice, bowling training, box cricket, youth development programs, and special cricket events. Players from Columbus, Dublin, Hilliard, Powell, Marysville, and surrounding communities choose our facility for year-round cricket training and development.
        </p>

        <div className="facilities-grid">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="facility-card"
              style={{ '--bg-image': `url(${facility.image})` }}
            >
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
