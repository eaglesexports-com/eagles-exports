import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const servicesData = [
  {
    title: "UI/UX designing",
    text: "Providing the solutions for non-IT businesses.",
    iconclassName: "flaticon-laptop",
  },
  {
    title: "Data analysis",
    text: "Providing the solutions for non-IT businesses.",
    iconclassName: "flaticon-laptop",
  },
  {
    title: "Product development",
    text: "Providing the solutions for non-IT businesses.",
    iconclassName: "flaticon-bank",
  },
  {
    title: "Digital marketing",
    text: "Providing the solutions for non-IT businesses.",
    iconclassName: "flaticon-technology",
  },
  {
    title: "Security system",
    text: "Providing the solutions for non-IT businesses.",
    iconclassName: "flaticon-digital-services",
  },
];

const Services = () => {
  return (
    <>
      {/* Banner Section */}
      <div
        className="about-banner position-relative text-center d-flex align-items-center justify-content-center"
        style={{
          height: '600px',
          backgroundImage: `url(${require('../../src/assets/images/Service.jpg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div
          className="overlay position-absolute w-100 h-100"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        ></div>
        <h1 className="position-relative text-white display-3 fw-bold">
          Service Banner
        </h1>
      </div>

      {/* Services Section */}
      <section id="services" className="services-section-two position-relative">
        <div className="bg bg-pattern-1"></div>
        <div className="auto-container">
          <div className="sec-title light text-center text-gradient">
            <span classNameName="sub-title">what we’re offering</span>
            <h2>
             services &amp; solutions
            </h2>
          </div>

        
          <section className="container mysec-headmain py-5">
  <div className="row mysec-10 g-4">
    <div className="col-lg-12 col-md-12">
      <div className="card p-4 text-center shadow">
        <div className="icon-wrapper mb-3">
          <i className="fa-1x"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" class="service-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path></svg></i>
        </div>
        <h4>One For All</h4>
        <p>Eagles Exports, we are dedicated to providing authentic and guaranteed raw material products in a wide range of categories. No matter the type, specification, or state of the product, we ensure every sourcing activity is carried out in strict compliance with government regulations

We believe that every request matters — whether large or small. Our team goes the extra mile to ensure that each order is handled with care, precision, and urgency. With a proactive approach and a commitment to exceeding expectations, we strive to deliver not just on time, but ahead of time, ensuring complete satisfaction at every step.

With Eagles Exports, your needs are our priority. Our commitment to reliability, quality, and timely delivery is the foundation of every service we offer.</p>
      </div>
    </div>

    <div className="col-lg-12 col-md-12">
      <div className="card p-4 text-center shadow">
        <div className="icon-wrapper mb-3">
          <i className="fa-1x"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" class="service-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M50.2 375.6c2.3 8.5 11.1 13.6 19.6 11.3l216.4-58c8.5-2.3 13.6-11.1 11.3-19.6l-49.7-185.5c-2.3-8.5-11.1-13.6-19.6-11.3L151 133.3l24.8 92.7-61.8 16.5-24.8-92.7-77.3 20.7C3.4 172.8-1.7 181.6.6 190.1l49.6 185.5zM384 0c-17.7 0-32 14.3-32 32v323.6L5.9 450c-4.3 1.2-6.8 5.6-5.6 9.8l12.6 46.3c1.2 4.3 5.6 6.8 9.8 5.6l393.7-107.4C418.8 464.1 467.6 512 528 512c61.9 0 112-50.1 112-112V0H384zm144 448c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"></path></svg></i>
        </div>
        <h4>Import</h4>
        <p>At Eagles Exports, our dedicated team is actively involved in importing high-quality goods from leading international markets across the globe. From the initial inquiry to the final delivery, we ensure a smooth and hassle-free experience for every client.

A specialized team meticulously oversees each step of the process, ensuring that all procedures are carried out with precision and in full compliance with regulations. Every order is dispatched accurately and promptly, reaching its destination on time and in accordance with the agreed terms and conditions.

Let me know if you'd like to merge this with other content for a company profile or presentation.</p>
      </div>
    </div>
    <div className="col-lg-12 col-md-12">
      <div className="card p-4 text-center shadow">
        <div className="icon-wrapper mb-3">
          <i className="fa-1x"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="service-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z"></path></svg></i>
        </div>
        <h4>Exports</h4>
        <p>At Eagles Exports, our team operates with unwavering dedication and a results-driven mindset to ensure every export requirement is handled with precision. We streamline the entire process — from documentation to logistics — ensuring no delays and complete compliance at every step.

With strong operational control at major air and sea ports, we ensure that your consignments are cleared and delivered smoothly, securely, and on time, no matter the scale of the shipment.

</p>
      </div>
    </div>

  </div>
</section>
        </div>
      </section>
    </>
  );
};

export default Services;
