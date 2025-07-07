import React, { useState } from "react";
import { FaGlobe, FaTruckLoading, FaExchangeAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const ServiceDetail = () => {
  const [activeTab, setActiveTab] = useState("oneForAll");

  const servicesData = {
    oneForAll: {
      title: "One for All",
      text: "Eagles Exports ensures genuine availability of any kind of raw materials, adhering to government regulations. We guarantee timely delivery and complete buyer requests regardless of order size.",
      icon: <FaGlobe className="service-icon" />,
    },
    import: {
      title: "Import",
      text: "We specialize in importing high-quality raw materials worldwide, ensuring compliance with regulations and standards. Our process guarantees timely delivery for various industries.",
      icon: <FaTruckLoading className="service-icon" />,
    },
    export: {
      title: "Export",
      text: "Our export services focus on delivering premium-grade products globally. We manage logistics, customs clearance, and quality assurance for smooth and efficient operations.",
      icon: <FaExchangeAlt className="service-icon" />,
    },
  };

  return (
    <section className="services-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-4">Our Services</h2>
        <div className="row align-items-center mt-5">
          {/* Left Side - Service Content */}
          <div className="col-lg-6 col-md-12">
            <div className="service-box active">
              <span>{servicesData[activeTab].icon}</span>
              
              <h3 className="service-box-title">{servicesData[activeTab].title}</h3>
              <p className="service-box-subtitle">{servicesData[activeTab].text}</p>
            </div>
            <Link to='/services' class="read-more-btn"  data-discover="true">Read More</Link>
          </div>

          {/* Right Side - Tabs */}
          <div className="col-lg-6 col-md-12">
            <div className="service-tabs d-flex flex-column gap-4">
              {Object.keys(servicesData).map((key) => (
                <div
                  key={key}
                  className={`tab-item ${activeTab === key ? "active" : ""}`}
                  onMouseEnter={() => setActiveTab(key)}  // Change tab on hover
                >
                  {servicesData[key].icon}
                  <span className="service-head-title">{servicesData[key].title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
