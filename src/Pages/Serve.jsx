import React, { useState, useEffect } from 'react';
import '../Scss/serve.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const slides = [
  { image: '../assets/image/tamaramenu.webp', text: 'Quán phục vụ các loại bánh và thức uống với phong cách sáng tạo' ,route:"/menu"},
  { image: 'https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/471512280_122177311310246115_5520191589039655114_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=10dJjLQldqQQ7kNvgGKIGRK&_nc_oc=Adngm3UdEIALrZzp2oUn_lKRkjNBMhZKRSpU-z5z-5G87l45lb9FocKBoRqFDkDtIX4&_nc_zt=23&_nc_ht=scontent.fsgn5-12.fna&_nc_gid=gbaq-kQ10TRq8LW_vC_TLA&oh=00_AYHBob1knzSpFsTRtKXVgr3oi2Q_46XAUOSSOxaeVVjR7Q&oe=67E6B971', text: 'Tổ chức các buổi workshop đa dạng và thường xuyên' ,route:""},
  { image: '/assets/image/damcuoitamara.jpg', text: 'Là địa điểm lý tưởng chọn tổ chức tiệc cưới , sinh nhật và các sự kiện khác nhau',route:"" },
  { image: '/assets/image/slides1.jpg', text: 'Welcome to Our Café ☕' ,route:"" },
];

export default function Serve() {
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
                        <h2 className={`slide-text ${deviceType} text-white`} >{slide.text}</h2>
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
