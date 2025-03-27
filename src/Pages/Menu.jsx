import React from "react";
import "../Scss/menu.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function Menu() {
  const images = [
    "/assets/image/menu10.png",
    "/assets/image/menu1.png",
    "/assets/image/menu2.png",
    "/assets/image/menu3.png",
    "/assets/image/menu4.png",
    "/assets/image/menu5.png",
    "/assets/image/menu6.png",
    "/assets/image/menu7.png",
    "/assets/image/menu8.png",
    "/assets/image/menu9.png",
  ];

  return (
    
     <div className='container-fluid p-0 ' >
                <Swiper
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={2}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 200,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    loop={true}
                    pagination={{ clickable: true }} // ✅ Pagination dots only
                    modules={[EffectCoverflow, Pagination]}
                                         breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 10 }, // For small screens
        640: { slidesPerView: 2, spaceBetween: 20 }, // Tablets
        1024: { slidesPerView: 3, spaceBetween: 35 }, // Desktops
      }}    
                    className="custom-swiper-menu"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index} className="gallery-slide-menu" >
                            <img src={image} alt={`Slide ${index}`} className="gallery-image-menu" />
                                            
                        </SwiperSlide>
                    ))}
                </Swiper>

      
        </div>
  );
}
