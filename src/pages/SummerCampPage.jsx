import React from 'react';
import BottomFooter from '../components/BottomFooter';
import summerCampImage from '../assets/WhatsApp Image 2026-05-26 at 21.24.21.jpeg';
import '../styles/SummerCampPage.css';

const summerCampRegisterUrl =
  'https://app.glofox.com/portal/#/branch/68c2e882a7a5b41e6908e2b4/memberships/69cee9a94c7260dac304d4dd/plan/1775167859413/buy';

export default function SummerCampPage() {
  return (
    <div className="summer-camp-page-wrapper">
      <main className="summer-camp-page">
        <section className="summer-camp-card">
          <div className="summer-camp-image-frame">
            <img
              src={summerCampImage}
              alt="Kids cricket summer camp at Crics 22Yards Columbus Ohio"
              className="summer-camp-image"
            />
          </div>

          <div className="summer-camp-content">
            <h1>
              Kids Cricket Summer Camp in Columbus, OH
            </h1>

            <p>
              Crics 22Yards Columbus offers one of the most exciting cricket
              summer camps in Ohio. Designed for kids of all skill levels, our
              camp combines professional cricket coaching, skill development,
              fitness activities, teamwork, and fun in a safe indoor training
              environment.
            </p>

            <p>
              Participants will learn batting, bowling, fielding, match
              awareness, teamwork, sportsmanship, and overall cricket
              fundamentals through structured coaching sessions led by
              experienced coaches.
            </p>

            <p>
              Conveniently located in Plain City, Ohio, our summer camp serves
              families from Columbus, Dublin, Hilliard, Powell, Marysville, and
              surrounding communities.
            </p>

            <div className="summer-camp-button-wrapper">
              <a
                className="summer-camp-register-button"
                href={summerCampRegisterUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <BottomFooter />
    </div>
  );
}
