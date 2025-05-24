// import React from "react";
// import "../Scss/menu.scss";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// export default function Menu() {
//   const images = [
//     "/assets/image/menu10.png",
//     "/assets/image/menu1.png",
//     "/assets/image/menu2.png",
//     "/assets/image/menu3.png",
//     "/assets/image/menu4.png",
//     "/assets/image/menu5.png",
//     "/assets/image/menu6.png",
//     "/assets/image/menu7.png",
//     "/assets/image/menu8.png",
//     "/assets/image/menu9.png",
//   ];

//   return (
    
//      <div className='container-fluid p-0 ' >
//                 <Swiper
//                     effect="coverflow"
//                     grabCursor={true}
//                     centeredSlides={true}
//                     slidesPerView={2}
//                     coverflowEffect={{
//                         rotate: 0,
//                         stretch: 0,
//                         depth: 200,
//                         modifier: 1,
//                         slideShadows: true,
//                     }}
//                     loop={true}
//                     pagination={{ clickable: true }} // ✅ Pagination dots only
//                     modules={[EffectCoverflow, Pagination]}
//                                          breakpoints={{
//         320: { slidesPerView: 1, spaceBetween: 10 }, // For small screens
//         640: { slidesPerView: 2, spaceBetween: 20 }, // Tablets
//         1024: { slidesPerView: 3, spaceBetween: 35 }, // Desktops
//       }}    
//                     className="custom-swiper-menu"
//                 >
//                     {images.map((image, index) => (
//                         <SwiperSlide key={index} className="gallery-slide-menu" >
//                             <img src={image} alt={`Slide ${index}`} className="gallery-image-menu" />
                                            
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>

      
//         </div>
//   );
// }


// import React, { useState, useRef } from "react";
// import "../Scss/menu.scss";

// export default function Menu() {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [isFlipping, setIsFlipping] = useState(false);
//   const [flipDirection, setFlipDirection] = useState(null);
//   const [isFirstFlip, setIsFirstFlip] = useState(true);
//   const bookRef = useRef(null);

//   const images = [
//     "/assets/image/menu10.png",
//     "/assets/image/menu1.png",
//     "/assets/image/menu2.png",
//     "/assets/image/menu3.png",
//     "/assets/image/menu4.png",
//     "/assets/image/menu5.png",
//     "/assets/image/menu6.png",
//     "/assets/image/menu7.png",
//     "/assets/image/menu8.png",
//     "/assets/image/menu9.png",
//   ];

//   const handleFlip = (direction) => {
//     if (isFlipping) return;
    
//     setIsFlipping(true);
//     setFlipDirection(direction);
    
//     if (direction === 'next' && currentPage < images.length - 2) {
//       setCurrentPage(prev => prev + 2);
//       if (isFirstFlip) {
//         setIsFirstFlip(false);
//       }
//     } else if (direction === 'prev' && currentPage > 0) {
//       setCurrentPage(prev => prev - 2);
//     }
    
//     setTimeout(() => {
//       setIsFlipping(false);
//       setFlipDirection(null);
//     }, 1000);
//   };

//   const renderPage = () => {
//     if (currentPage === 0) {
//       return (
//         <div className="book-container">
//           <div className={`double-pages-back ${!isFirstFlip ? 'visible' : ''}`}>
//             <div className="static-page">
//               <img src={images[1]} alt="Page 1" className="page-image" />
//             </div>
//             <div className="static-page">
//               <img src={images[2]} alt="Page 2" className="page-image" />
//             </div>
//           </div>
//           <div className={`cover-page ${isFlipping ? 'flipping' : ''}`}>
//             <div className="page-content">
//               <img src={images[0]} alt="Menu Cover" className="page-image" />
//             </div>
//             {currentPage < images.length - 2 && (
//               <div className="corner next" onClick={() => handleFlip('next')}></div>
//             )}
//           </div>
//         </div>
//       );
//     } else {
//       const leftPage = images[currentPage];
//       const rightPage = images[currentPage + 1] || null;

//       return (
//         <div className="book-container">
//           <div className={`static-page ${isFlipping ? 'flipping' : ''}`}>
//             <img src={leftPage} alt={`Page ${currentPage}`} className="page-image" />
//           </div>
//           <div className="static-page">
//             <div className="page-content">
//               {rightPage ? (
//                 <img src={rightPage} alt={`Page ${currentPage + 1}`} className="page-image" />
//               ) : (
//                 <div className="empty-page"></div>
//               )}
//             </div>
//             {currentPage > 0 && (
//               <div className="corner prev" onClick={() => handleFlip('prev')}></div>
//             )}
//             {currentPage < images.length - 2 && (
//               <div className="corner next" onClick={() => handleFlip('next')}></div>
//             )}
//           </div>
//         </div>
//       );
//     }
//   };

//   return (
//     <div className="container-fluid p-0">
//       <div className="custom-flipbook">
//         <div className="book" ref={bookRef}>
//           {renderPage()}
//         </div>
//       </div>

//       <style jsx>{`
//         .custom-flipbook {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           height: 100vh;
//           background: #f5f5f5;
//         }

//         .book {
//           position: relative;
//           width: 1100px;
//           height: 500px;
//           perspective: 2000px;
//         }

//         .book-container {
//           position: relative;
//           display: flex;
//           width: 100%;
//           height: 100%;
//           justify-content: center;
//         }

//         .double-pages-back {
//           position: absolute;
//           display: flex;
//           width: 100%;
//           height: 100%;
//           z-index: 1;
//           opacity: 0;
//           transition: opacity 0.5s ease;
//           justify-content: center;
//         }

//         .double-pages-back.visible {
//           opacity: 1;
//         }

//         .cover-page, .static-page {
//           position: relative;
//           width: 550px;
//           height: 100%;
//           background: white;
//           transform-style: preserve-3d;
//           box-shadow: 0 0 10px rgba(0,0,0,0.1);
//         }

//         .cover-page {
//           z-index: 2;
//           transform-origin: right center;
//           transition: transform 0.8s ease;
//           position: relative;
//         }

//         .cover-page::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           right: 0;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(to left, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%);
//           opacity: 0;
//           transition: opacity 0.8s ease;
//           pointer-events: none;
//         }

//         .flipping::before {
//           opacity: 1;
//         }

//         .flipping {
//           animation: flipPage 0.8s ease;
//           transform-style: preserve-3d;
//         }

//         @keyframes flipPage {
//           0% {
//             transform: rotateY(0);
//           }
//           20% {
//             transform: rotateY(30deg);
//           }
//           40% {
//             transform: rotateY(60deg);
//           }
//           60% {
//             transform: rotateY(90deg);
//           }
//           80% {
//             transform: rotateY(120deg);
//           }
//           100% {
//             transform: rotateY(180deg);
//           }
//         }

//         .page-content {
//           position: relative;
//           width: 100%;
//           height: 100%;
//           transform-style: preserve-3d;
//           backface-visibility: visible;
//           background: white;
//         }

//         .page-image {
//           width: 100%;
//           height: 100%;
//           object-fit: contain;
//           pointer-events: none;
//           backface-visibility: visible;
//         }

//         .empty-page {
//           width: 100%;
//           height: 100%;
//           background: white;
//         }

//         .corner {
//           position: absolute;
//           width: 50px;
//           height: 50px;
//           cursor: pointer;
//           z-index: 3;
//         }

//         .corner.prev {
//           left: 0;
//           top: 0;
//           background: linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.1) 50%);
//         }

//         .corner.next {
//           right: 0;
//           top: 0;
//           background: linear-gradient(225deg, transparent 50%, rgba(0,0,0,0.1) 50%);
//         }

//         .corner:hover {
//           background-color: rgba(0,0,0,0.1);
//         }
//       `}</style>
//     </div>
//   );
// }


import { image } from 'framer-motion/client';
import React, { useState, useEffect } from 'react'
import HTMLFlipBook from "react-pageflip";

function Book() {
  const images = [
    "/assets/image/menu1.jpg",
    "/assets/image/menu2.jpg",
    "/assets/image/menu3.jpg",
    "/assets/image/menu4.jpg",
    "/assets/image/menu5.jpg",
    "/assets/image/menu6.jpg",
    "/assets/image/menu7.jpg",
    "/assets/image/menu8.jpg",
    "/assets/image/menu9.jpg",
    "/assets/image/menu10.jpg",
  ];
  const pokemonData = [
    {
      id: "006",
      name: "Charizard",
      types: ["Fire", "Flying"],
      description: "Flies in search of strong opponents. Breathes extremely hot fire that melts anything, but never uses it on weaker foes."
    },
    {
      id: "025",
      name: "Pikachu",
      types: ["Electric"],
      description: "When Pikachu meet, they touch tails to exchange electricity as a greeting."
    },
    {
      id: "125",
      name: "Electabuzz",
      types: ["Electric"],
      description: "Often kept at power plants to regulate electricity. Competes with others to attract lightning during storms."
    },
    {
      id: "185",
      name: "Sudowoodo",
      types: ["Rock"],
      description: "Despite looking like a tree, its body is more like rock. Hates water and hides when it rains."
    },
    {
      id: "448",
      name: "Lucario",
      types: ["Fighting", "Steel"],
      description: "Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario."
    },
    {
      id: "658",
      name: "Greninja",
      types: ["Water", "Dark"],
      description: "Creates throwing stars from compressed water that can slice through metal when thrown at high speed."
    },
    {
      id: "491",
      name: "Darkrai",
      types: ["Dark"],
      description: "A legendary Pokémon that appears on moonless nights, putting people to sleep and giving them nightmares."
    }
  ];

  return (
    <div className='container-fluid d-flex justify-content-center' style={{overflow:"hidden"}}>
             <HTMLFlipBook 
      width={680} 
      height={750}
      maxShadowOpacity={0.5}
      drawShadow={true}
      size='fixed'
    >
      {/* <div className="page" style={{ background: 'transparent' , overflow:'hidden' }}>
        <div className="page-content cover">
          <img 
            src={images[0]}
            alt="Pokémon Logo" 
            className="pokemon-logo"
             width={800}
                height={790}
          />
        </div>
      </div> */}

      {images.map((image) => (
        <div className="page"style={{overflow:"hidden"}} >
          <div className="page-content">
            <div className="pokemon-container">
              <img 
                src={image} 
                width={680}
                height={700}
              />
              {/* <div className="pokemon-info">
                <h2 className="pokemon-name">{pokemon.name}</h2>
                <p className="pokemon-number">#{pokemon.id}</p>
                <div>
                  {pokemon.types.map((type) => (
                    <span key={type} className={`pokemon-type type-${type.toLowerCase()}`}>
                      {type}
                    </span>
                  ))}
                </div>
                <p className="pokemon-description">{pokemon.description}</p>
              </div> */}
            </div>
          </div>
        </div>
      ))}
    </HTMLFlipBook>
    </div>
   
  );
}

export default Book