import React, { useState } from 'react';
import CountUp from 'react-countup';
import '../styles/About.css'
import { useInView } from 'react-intersection-observer';
import { FaLeaf, FaHandshake, FaShippingFast, FaStar } from "react-icons/fa";

import image1 from '../assets/images/banner1.png';
import image2 from '../assets/images/banner2.png';
import image3 from '../assets/images/banner3.png';
import image4 from '../assets/images/banner4.png';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const aboutData = {
    heading: "About Us",
    subHeading: "Feel Nature Feel Wellness",
    description1:
      "We export our premium products to key markets worldwide, including the USA, Europe, and Latin America, establishing a global footprint of trust and reliability.",
    description2:
      "Our ultimate goal is to ensure profitability and add value to our customers' businesses by building long-term relationships through exceptional product quality, outstanding customer service, and reliable, on-time delivery.",
    
    images: [
      { id: 1, src: image1 },
      { id: 2, src: image2 },
      { id: 3, src: image3 },
      { id: 4, src: image4 },
    ],

    counters: [
      { id: 1, count: 100, suffix: "+", title1: "Types of", title2: "Essential Oils" },
      { id: 2, count: 15, suffix: "", title1: "Years of", title2: "Expertise" },
    ],
  };

 const reasons = [
    {
      icon: <FaLeaf className="icon green" />,
      title: "100% Natural Products",
      desc: "We source only the highest quality herbs and ingredients directly from trusted farms to ensure purity and freshness.",
    },
    {
      icon: <FaHandshake className="icon blue" />,
      title: "Trusted Partnerships",
      desc: "We build long-term relationships with our clients through transparency, reliability, and unmatched service quality.",
    },
    {
      icon: <FaShippingFast className="icon orange" />,
      title: "Fast Global Delivery",
      desc: "With a robust logistics network, we ensure timely and safe delivery of your products worldwide.",
    },
    {
      icon: <FaStar className="icon yellow" />,
      title: "Quality Assurance",
      desc: "Each product undergoes strict quality checks to meet global export standards and customer expectations.",
    },
  ];


  return (
    <>
      <div className="about-banner position-relative text-center d-flex align-items-center justify-content-center" style={{ height: '600px', backgroundImage: `url(${require('../assets/images/Aboutus.jpg')})` , backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="overlay position-absolute w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
        <h1 className="position-relative text-white display-3 fw-bold">About Us</h1>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            {/* Images */}
            <div className="col-lg-6">
              <div className="row g-3">
                {aboutData.images?.map((item, index) => (
                  <div key={item.id} className="col-6 text-start">
                    <img
                      className="img-fluid rounded w-100 wow zoomIn"
                      src={item.src}
                      alt={`about-${item.id}`}
                      style={{
                        visibility: 'visible',
                        animationDelay: `${0.2 * index}s`,
                        animationName: 'zoomIn',
                        marginTop: index === 1 ? '25%' : 0,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="col-lg-6">
              <h5 className="section-title text-start fw-normal">{aboutData.heading}</h5>
              <h1 className="mb-4" style={{ color: 'black' }}>
                {aboutData.subHeading.split(' ')[0]}{' '}
                <i className="fa-solid fa-bottle-droplet me-2" style={{ color: '#b46c00' }}></i>
                {aboutData.subHeading.split(' ')[1]}
              </h1>
              <p className="mb-4" style={{ color: '#666565' }}>{aboutData.description1}</p>
              <p className="mb-4" style={{ color: '#666565' }}>{aboutData.description2}</p>

              {/* Counters */}
              <div className="row g-4 mb-4">
                {aboutData.counters.map((item) => (
                  <div className="col-sm-6" key={item.id}>
                    <div className="d-flex align-items-center px-3" style={{ borderLeft: "5px solid #b46c00" }} ref={ref}>
                      <h1 className="flex-shrink-0 display-5 mb-0" style={{ color: "#b46c00" }}>
                        {inView && <CountUp end={item.count} duration={3} suffix={item.suffix} />}
                      </h1>
                      <div className="ps-4">
                        <p className="mb-0" style={{ color: "#666565" }}>{item.title1}</p>
                        <h6 className="text-uppercase mb-0" style={{ color: "black" }}>{item.title2}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <a className="btn py-3 px-5 mt-2" href="/" style={{background:"#b46c00", color:"white"}}>Read More</a>
            </div>
          </div>
           <section className="why-section py-5 mt-5">
      <div className="container">
        <h2 className="section-title text-center mb-5">
          Why <span>Choose Us</span>
        </h2>
        <div className="row mt-5">
          {reasons.map((reason, index) => (
            <div className="col-12 col-md-6 col-lg-3 mb-4" key={index}>
              <div className="why-card text-center p-4 h-100">
                {reason.icon}
                <h4 className="why-title mt-3">{reason.title}</h4>
                <p className="why-desc">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
        </div>
      </div>
    </>
  );
};

export default About;
