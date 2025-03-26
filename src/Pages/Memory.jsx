import React, { useState } from 'react';
import "../Scss/memory.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { NavLink } from 'react-router-dom';

const slides = [
    {
        image: "../assets/image/workshop10.jpg",
        text: "Workshop tại Tamara Coffee",
        details: ["../assets/image/workshop10.jpg", "../assets/image/workshop1.jpg","../assets/image/workshop2.jpg","../assets/image/workshop3.jpg","../assets/image/workshop4.jpg","../assets/image/workshop5.jpg","../assets/image/workshop6.jpg","../assets/image/workshop7.jpg","../assets/image/workshop8.jpg","../assets/image/workshop9.jpg"],
        route:""
    },
    {
        image: "../assets/image/w17.jpg",
        text: "Đám cưới tại Tamara Coffee",
        details: ["../assets/image/w17.jpg",  "../assets/image/w1.jpg",
  "../assets/image/w2.jpg",
  "../assets/image/w3.jpg",
  "../assets/image/w4.jpg",
  "../assets/image/w5.jpg",
  "../assets/image/w6.jpg",
  "../assets/image/w7.jpg",
  "../assets/image/w8.jpg",
  "../assets/image/w9.jpg",
  "../assets/image/w10.jpg",
  "../assets/image/w11.jpg",
  "../assets/image/w12.jpg",
  "../assets/image/w13.jpg",
  "../assets/image/w14.jpg",
  "../assets/image/w15.jpg",
  "../assets/image/w16.jpg",
  "../assets/image/w18.jpg",
  "../assets/image/w19.jpg",
  "../assets/image/w20.jpg",],
  route:""
    },
    {
        image: "../assets/image/menu10.png",
        text: "Thức uống và bánh ngọt tại Tamara Coffee",
        // details: ["../assets/image/menu10.png", "../assets/image/workshop10.jpg"],
        route:"/menu"
    },
];

export default function Memory() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSlide, setSelectedSlide] = useState(null);

    const openModal = (slide) => {
         if (slide.route) {
        // Redirect to the specified route instead of opening the modal
        window.location.href = slide.route;
    } else {
        // Open the modal only if no route is provided
        setSelectedSlide(slide);
        setIsModalOpen(true);
    }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedSlide(null);
    };

    return (
        <div className='container-fluid p-0'>
            <div className="gallery-container">
                <Swiper
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1.5}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 300,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    loop={true}
                    pagination={{ clickable: true }} // ✅ Pagination dots only
                    modules={[EffectCoverflow, Pagination]}
                    className="custom-swiper"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className="gallery-slide" onClick={() => openModal(slide)}>
                            <img src={slide.image} alt={`Slide ${index}`} className="gallery-image" />
                                            <NavLink to={slide.route} className="item-menu text-decoration-none"><p className='text-white fs-3 slide-text'>{slide.text}</p></NavLink>
                            
                            
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Fullscreen Modal with Arrows */}
            {isModalOpen && selectedSlide && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content " onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={closeModal}>✖</button>

                        <Swiper
                            loop={true}
                            navigation={true} // ✅ Only arrows in modal
                            modules={[Navigation]}
                            
                            className="modal-swiper"
                        >
                            {selectedSlide.details.map((image, index) => (
                                <SwiperSlide key={index} className=''>
                                    <img src={image} alt={`Detail ${index}`} className="modal-image" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            )}
        </div>
    );
}
