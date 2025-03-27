import React from 'react'
import "../Scss/blog.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel } from "swiper/modules";
export default function Blog() {
  return (
    <div className='container-fluid p-0 position-absolute top-0' style={{zIndex:-1}}>
            <Swiper
      direction="vertical" // Makes the swiper vertical
      slidesPerView={1} // Show one slide at a time
      spaceBetween={30} // Space between slides
      mousewheel={true} // Allow scrolling with mouse
      pagination={{ clickable: true }} // Pagination dots
      modules={[Pagination, Mousewheel]}
      speed={2000}
      style={{ width: "100%", height: "100vh" }} // Full height
    >
      <SwiperSlide>
        <div className="slide " style={{ backgroundColor: "#ff6347" }}>Slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide " style={{ backgroundColor: "#4682b4" }}>Slide 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide " style={{ backgroundColor: "#32cd32" }}>Slide 3</div>
      </SwiperSlide>
    </Swiper>
    
    </div>
  )
}
