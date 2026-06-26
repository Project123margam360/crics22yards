import React from 'react';
import '../styles/Hero.css';

const heroVideoId = 'Um4rOKDtYIk';

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section"
      aria-label="Crics 22Yards indoor cricket facility in Columbus Ohio"
    >
      <div className="hero-video-background">
        <iframe
          src={`https://www.youtube.com/embed/${heroVideoId}?autoplay=1&mute=1&loop=1&playlist=${heroVideoId}&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&disablekb=1`}
          title="Crics 22Yards indoor cricket facility video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      <div className="hero-content">
        <div className="badge">Welcome to Crics 22Yards Columbus</div>

        <h1>
          Indoor Cricket Nets, Coaching & Summer Camps in Columbus, OH
        </h1>

        <p>
          Train, play, and book indoor cricket lanes at Crics 22Yards in Plain City, OH — serving Columbus, Dublin, Hilliard, Powell, Marysville, and nearby areas.
        </p>

        <div className="hero-cta-group">
          <a
            href="https://axon22yards.com/book/columbus"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button cta-button-left"
            aria-label="Book an indoor cricket rental lane at Crics 22Yards Columbus"
          >
            Book Lane/Box as guest 
          </a>

          <a
            href="https://axon22yards.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button cta-button-middle"
            aria-label="Crics 22Yards Columbus membership login"
          >
            Lane/Box - See plans
          </a>

          <a
            href="https://axon22yards.com/join?location=columbus"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button cta-button-right"
            aria-label="Join Super Kings Academy at Crics 22Yards Columbus"
          >
            Super Kings Academy
          </a>
        </div>
      </div>
    </section>
  );
}
