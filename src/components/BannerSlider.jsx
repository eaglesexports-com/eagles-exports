import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "../styles/Banner.css";
import image1 from '../../src/assets/images/banner1.jpg'
import image2 from '../../src/assets/images/healthingradients.png'
import image3 from '../../src/assets/images/banner3.jpg'
import image4 from '../../src/assets/images/banner4.jpg'

const banners = [
  {
    image: image1,
    title: "Essential Oils",
  },
  
  
  {
    image:image2,
    title: "Health Ingredients",
  },
  {
    image: image3,
    title: "Carrier Oils",
  },
  {
    image:image4,
    title: "Indian Spice Extracts",
  },
];

function BannerSlider() {
  return (
    <div className="banner-slider">
      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        effect="fade"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="slide">
              <img src={banner.image} alt={`Banner ${index + 1}`} style={{ maxHeight: "600px", width: "100%" }} />
              <div className="slide-text">
                <h3>{banner.title}</h3>
                <p>{banner.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BannerSlider;
