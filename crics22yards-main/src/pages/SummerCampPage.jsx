import React from 'react';
import BottomFooter from '../components/BottomFooter';
import summerCampImage from '../assets/WhatsApp Image 2026-05-26 at 21.24.21.jpeg';
import '../styles/SummerCampPage.css';

const summerCampRegisterUrl = 'https://app.glofox.com/portal/#/branch/68c2e882a7a5b41e6908e2b4/memberships/69cee9a94c7260dac304d4dd/plan/1775167859413/buy';

export default function SummerCampPage() {
  return (
    <div className="summer-camp-page-wrapper">
      <main className="summer-camp-page">
        <section className="summer-camp-card">
          <div className="summer-camp-image-frame">
            <img
              src={summerCampImage}
              alt="Summer camp cricket training"
              className="summer-camp-image"
            />
          </div>

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
        </section>
      </main>
      <BottomFooter />
    </div>
  );
}