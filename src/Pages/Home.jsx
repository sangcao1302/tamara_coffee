import React, { useRef, useState } from 'react'
import "../Scss/home.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
export default function Home() {
    const images = ["../assets/image/banner1.jpg","../assets/image/banner2.jpg","../assets/image/banner3.jpg","../assets/image/banner4.jpg"];
   
    
//   return (
//     <div className='container-fluid p-0 home'> 
//         {/* <Slider {...settings} className='slide' style={{objectFit:"cover"}}>
//             <div>
//                 <img src="../assets/image/slides1.jpg" className="img" alt=""  />
//             </div>
//             <div>
//                 <img src="../assets/image/slides2.jpg" className="img" alt=""  />
//             </div>
           
//         </Slider> */}
//          {/* <div className='img-home'>
//                 <img src="../assets/image/bannerhome.jpg" className="background-home" alt=""  />
//                 <div className='textHome text-center text-white fs-3'>
//                     <p>Bắt đầu ngày mới với ly cà phê đậm đà!</p>
//                     <p>Giảm ngay 50% – Thưởng thức hương vị tuyệt vời hôm nay!</p>
//                 </div>
//         </div> */}
        
//     </div>
//   )
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className='container-fluid p-0'>
                <div className="slider-container-home">
      {/* Slide lớn bên trái */}
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs]}
        className="main-slider"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index}`} className="main-image" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Slide hình thu nhỏ bên phải (dọc) */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        direction="vertical"
        slidesPerView={4}
        watchSlidesProgress
        modules={[Thumbs]}
        className="thumb-slider"
        style={{paddingLeft:"12px"}}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Thumbnail ${index}`} className="thumb-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
    
  );
}
