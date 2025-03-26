import React from 'react'
import "../Scss/menu.scss"
import HTMLFlipBook from "react-pageflip";
export default function Menu() {
    const images = [
    "../assets/image/menu0.png",
    "../assets/image/menu1.png",
    "../assets/image/menu2.png",
    "../assets/image/menu3.png",
    "../assets/image/menu4.png",
    "../assets/image/menu5.png",
    "../assets/image/menu6.png",
    "../assets/image/menu7.png",
    "../assets/image/menu8.png",
    "../assets/image/menu9.png",
];
  return (
    <div className='container-fluid p-0 overflow-hidden  position-absolute top-0 menutamaracoffee'>
                 <div className="flipbook-container  " >
      <HTMLFlipBook 
  width={window.innerWidth / 2} // Each page takes half of the screen
  height={window.innerHeight} // Full height of the screen
  size="stretch" // Ensure it fits properly
  showCover={false} 
  drawShadow={true} 
  flippingTime={1000} 
  maxShadowOpacity={0.5} 
  useMouseEvents={true}
  mobileScrollSupport={true}
  autoSize={true}
  clickEventForward={true}
  startZIndex={0}
  usePortrait={false} // Disable portrait mode
  showPageCorners={true}
  className='custom-flipbook p-0'
>
  {/* Display each image as a book page */}
  {images.map((image, index) => (
    <div key={index} className="page">
      <img src={image} alt={`Page ${index + 1}`} className="book-image" />
    </div>
  ))}
</HTMLFlipBook>

    </div>
    </div>
    
  )
}
