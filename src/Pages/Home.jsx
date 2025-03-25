import React from 'react'
import "../Scss/home.scss"
import { NavLink} from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Home() {
    
    const handleClick=()=>{
        window.scrollTo({top:"0"})
        
    }
    const settings = {
       
        arrows:true,    
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        swipeToSlide: true,
        autoplay:true,
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              swipeToSlide: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              
              swipeToSlide: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              swipeToSlide: true,
              swiptouch:true
            }
          }
        ]
      }
    
  return (
    <div className='container-fluid p-0 home'> 
        {/* <Slider {...settings} className='slide' style={{objectFit:"cover"}}>
            <div>
                <img src="../assets/image/slides1.jpg" className="img" alt=""  />
            </div>
            <div>
                <img src="../assets/image/slides2.jpg" className="img" alt=""  />
            </div>
           
        </Slider> */}
         <div className='img-home'>
                {/* <img src="../assets/image/bannerhome.jpg" className="background-home" alt=""  /> */}
                <div className='textHome text-center text-white fs-3'>
                    <p>Bắt đầu ngày mới với ly cà phê đậm đà!</p>
                    <p>Giảm ngay 50% – Thưởng thức hương vị tuyệt vời hôm nay!</p>
                </div>
        </div>
        
    </div>
  )
}
