import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import SwiperCore, { Pagination, Navigation, EffectFade, Autoplay, Grid } from 'swiper';
const Swiper = dynamic(() => import("swiper/react").then(mod => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import("swiper/react").then(mod => mod.SwiperSlide), { ssr: false });

SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);

const Testimonials = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const props = {
    loop: true,
    spaceBetween: 70,
    slidesPerView: 1,
    autoplay: {
      delay: 6000,
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    breakpoints: {
      720: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 70,
      },
    },
  };

  return (
    <div className="section testimonials" id="section-testimonials">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Testimonials</div>
        </div>
        {/* testimonials items */}
        <div className="reviews-carousel">
          {isClient && (
            <Swiper {...props} className="swiper-container">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="reviews-item content-box">
                    <div className="image">
                      <img src="images/testimonial-person-1.jpg" alt="Sandra" />
                    </div>
                    <div className="info">
                      <div className="name">Sandra</div>
                      <div className="company">Project Manager</div>
                    </div>
                    <div className="text">
                      Easiest to work with. Very proactive and progress driven.
                      <br/>
                      Great video and photo skills. Would work with again.
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="reviews-item content-box">
                    <div className="image">
                      <img src="images/testimonial-person-2.jpg" alt="Richard R" />
                    </div>
                    <div className="info">
                      <div className="name">Richard R</div>
                      <div className="company">Client</div>
                    </div>
                    <div className="text">
                      Love the photos. Shows exactly what to do on photoshoots.
                      <br/>
                      Edited, ready to go in 2 days. Recommend!
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          )}
          {/* navigation */}
          <div className="swiper-nav">
            <a className="prev swiper-button-prev fas fa-long-arrow-alt-left" />
            <a className="next swiper-button-next fas fa-long-arrow-alt-right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;