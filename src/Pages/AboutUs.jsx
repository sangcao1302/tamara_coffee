import React from 'react'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    console.log(index)
     const nextSlide = () => {
        setDirection(1);
setIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };
  return (
    <div className="container-fluid mt-4 p-0">
      <div className="position-relative d-flex justify-content-center align-items-center position-absolute  bannerAbout" 
       style={{
          backgroundImage: `url(${slides[index].image})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
          transition: "background-image 0.6s fade-in"
        }}
      >
        
        <AnimatePresence>
            <motion.div
                key={index}
                className="position-absolute text-white text-center"
                style={{
                top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                background: "rgba(0, 0, 0, 0.5)", padding: "10px 20px", borderRadius: "10px"
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <h2 className='text-about'>{slides[index].text}</h2>
            </motion.div>
        </AnimatePresence>
        {/* Left Button */}
        <button
          className="btn btn-dark position-absolute button-left"
          onClick={prevSlide}
        >
          ◀
        </button>

        {/* Right Button */}
        <button
          className="btn btn-dark position-absolute button-right"
          onClick={nextSlide}
        >
          ▶
        </button>
      </div>
    </div>
  );
}
