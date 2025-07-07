import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import videoThumbnail from "../assets/images/thumbnail.png";
import videoSrc from "../assets/videos/essential.mp4";
const AboutDetail = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll(".animate-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Video Section - Left Side */}
          <div className="col-lg-6 col-md-12 text-center video-container animate-section left">
            {!isPlaying ? (
              <div className="video-thumbnail" onClick={() => setIsPlaying(true)}>
                <img src={videoThumbnail} alt="Essential Oil Video" className="img-fluid" />
                <button className="play-button">▶</button>
              </div>
            ) : (
              <video controls autoPlay className="video-player">
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>

          {/* Text Content - Right Side */}
          <div className="col-lg-6 col-md-12 animate-section right">
            <div className="main-about">
              <h2 className="about-title">About Us</h2>
              <p className="about-text">
              Welcome to Eagles Exports
Pure. Natural. Trusted Worldwide.

At Eagles Exports, we are proud to be your reliable partner in delivering high-quality essential oils, herbal extracts, and aroma chemicals to markets around the world.

With a focus on purity, consistency, and customer satisfaction, we ensure that every product meets rigorous international quality standards. Whether you're in the wellness, cosmetics, or fragrance industry, our naturally sourced and expertly processed ingredients are crafted to meet your unique business needs.

Experience nature’s finest — with Eagles Exports.
              </p>
              <Link to="/about" className="read-more-btn">Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetail;
