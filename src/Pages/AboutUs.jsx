import React from 'react'
import { useState ,useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import "../Scss/about.scss"
const images = ["https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg", "https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"];
const slides = [
        { image: '../assets/image/langhoasadec3.webp', text: 'Nằm giữa lòng làng hoa nổi tiếng của Sa Đéc'},
        { image: '../assets/image/vuonchalatamara.jpg', text: 'Vườn chà là với diện tích 4.000 mét vuông hiện lên như một bức tranh sống động, kết hợp hài hòa giữa vẻ đẹp thiên nhiên và giá trị văn hóa đặc sắc'},
        { image: '../assets/image/tamaraview5.jpg', text: 'Tamara coffee được xây dựng và tọa lạc trên khu đất 4000 mét vuông vườn chà là'},
        { image: "../assets/image/Tamara1.png", text: "Quán được thiết kế với phong cách trung đông lạ mắt" },
        { image: "../assets/image/tamaraview2.jpg", text: "Cùng với những hàng cây chà là bóng mát" },
        { image: "../assets/image/tamaraview1.jpg", text: "Tamara – Vườn Chà Là, nơi tình yêu nở rộ giữa những hàng cây xanh mướt và không gian lãng mạn chẳng khác gì phim điện ảnh" },
        { image: "../assets/image/tamaraview3.jpg", text: "Hãy đến tận hưởng , thư giản và khám phá mọi ngóc ngách  🌿" }
];

export default function AboutUs() {
//     const [index, setIndex] = useState(0);
//     const [direction, setDirection] = useState(1);
//     console.log(index)
//      const nextSlide = () => {
//         setDirection(1);
// setIndex((prev) => (prev + 1) % slides.length);
//     };

//     const prevSlide = () => {
//         setDirection(-1);
//         setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//     };

const [deviceType, setDeviceType] = useState(getDeviceType());
      const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
const [firstLoad, setFirstLoad] = useState(true); 
  function getDeviceType() {
    if (window.innerWidth < 768) return 'mobile';
    if (window.innerWidth >= 768 && window.innerWidth <= 1024) return 'tablet';
    return 'desktop';
  }

  useEffect(() => {
    const handleResize = () => setDeviceType(getDeviceType());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    // <div className="container-fluid mt-4 p-0">
    //   <div className="position-relative d-flex justify-content-center align-items-center position-absolute  bannerAbout" 
    //    style={{
    //       backgroundImage: `url(${slides[index].image})`,
    //       backgroundSize: "cover",
    //       backgroundPosition: "bottom center",
    //       backgroundRepeat: "no-repeat",
    //       transition: "background-image 0.6s fade-in"
    //     }}
    //   >
        
    //     <AnimatePresence>
    //         <motion.div
    //             key={index}
    //             className="position-absolute text-white text-center"
    //             style={{
    //             top: "50%", left: "50%", transform: "translate(-50%, -50%)",
    //             background: "rgba(0, 0, 0, 0.5)", padding: "10px 20px", borderRadius: "10px"
    //             }}
    //             initial={{ opacity: 0, y: 30 }}
    //             animate={{ opacity: 1, y: 0 }}
    //             exit={{ opacity: 0, y: -30 }}
    //             transition={{ duration: 0.5, ease: "easeOut" }}
    //         >
    //             <h2 className='text-about'>{slides[index].text}</h2>
    //         </motion.div>
    //     </AnimatePresence>
    //     {/* Left Button */}
    //     <button
    //       className="btn btn-dark position-absolute button-left"
    //       onClick={prevSlide}
    //     >
    //       ◀
    //     </button>

    //     {/* Right Button */}
    //     <button
    //       className="btn btn-dark position-absolute button-right"
    //       onClick={nextSlide}
    //     >
    //       ▶
    //     </button>
    //   </div>
    // </div>
    <div className="container-fluid p-0 mt-3">
      {deviceType === 'desktop' ? (
        <div className="position-absolute top-0" style={{ width: '100%', zIndex: '-1' }}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1.5}
            centeredSlides={true}
            navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
            pagination={{ clickable: true, el: '.custom-pagination' }}
            loop={true}
            speed={1000}
                   onSlideChange={(swiper) => {
          setPrevIndex(activeIndex);
          setActiveIndex(swiper.realIndex);
          setFirstLoad(false); // Disable first load state on first interaction
        }}
            
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} > 
                <motion.div
                  className="card  p-0"
                  style={{
                    height: '100vh',
                    width: '100%',
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom center',
                    backgroundRepeat: 'no-repeat',
                    border:"none"
                  }}
                       initial={{ scaleX: 1 }} // No animation on load
              animate={
                firstLoad
                  ? {} // No animation initially
                  : {
                      scaleX:
                        index === activeIndex
                          ? 1.2
                          : index === prevIndex
                          ? 0.8
                          : 0.8,
                    }
              }
              transition={{ duration: firstLoad ? 0 : 1.5, ease: 'backInOut' }}
                >
                  <div className="card-body d-flex align-items-center justify-content-center bg-black w-25 ">
                <NavLink to={slide.route} className="item-menu text-decoration-none"><h2 className="text-white text-uppercase text-center">{slide.text}</h2></NavLink>
                    
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="custom-prev">
            <FaArrowLeft />
          </button>
          <button className="custom-next">
            <FaArrowRight />
          </button>
          <div className="custom-pagination"></div>
        </div>
      ) : (
        <div className="container">
          <div className="row ">
            {slides.map((slide, index) => (
              <div key={index} className="col-12 mb-4 p-0">
                <motion.div
                  className="card shadow-lg"
                  style={{
                    width: "100%",
                    height: deviceType === 'tablet' ? "450px" : "250px",
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'right center',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: '12px',
                    border:"none"
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}>

                       <div className={`text-container ${deviceType} card-body d-flex align-items-center justify-content-center  bg-black   `}>
                <NavLink to={slide.route} className="item-menu text-decoration-none"><h2 className="text-white text-uppercase text-center fs-6">{slide.text}</h2></NavLink>
                </div>
                  </motion.div>
                 
                
              
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
