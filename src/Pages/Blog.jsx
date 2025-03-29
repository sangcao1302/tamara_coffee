import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HTMLFlipBook from "react-pageflip";
import "../Scss/blog.scss";
import { div } from "framer-motion/client";

export default function MotionSlider() {
  const [index, setIndex] = useState(0);
  const flipbookRef = useRef(null);
    const changeSlide=()=>{
        setIndex((prev) => (prev + 1) % slides.length);

}
  const slides = [
    <div className="slide-content text-white ">
        <div className="slideFirst d-flex align-items-center">
            <img src="../assets/image/cauchuyen1.jpg" alt="" />
            <div className="textFristSlide text-center">
                 <h2 className="">Vườn chà là Sa Đéc – Hành trình của những giấc mơ xanh </h2>
                 <span className="bg-danger p-2 fs-5" style={{cursor:"pointer"}} onClick={changeSlide}>Đọc thêm</span>
            </div>
        </div>
    </div>,
    <div className="flipbook-container">
      <HTMLFlipBook
        ref={flipbookRef}
        width={800}
        height={850}
        size="stretch"
        minWidth={300}
        maxWidth={900}
        minHeight={500}
        maxHeight={800}
        showCover={false}
        mobileScrollSupport={true}
        className="flipbook"
      >
        <div className="page"><p>Giữa lòng làng hoa Sa Đéc, nơi thiên nhiên và lịch sử giao thoa, tồn tại một khu vườn chà là rộng 4.000 mét vuông – minh chứng sống động cho niềm đam mê của những người nông dân đã mang một loài cây từ phương xa về trồng trên mảnh đất màu mỡ này. Từ xưa, chà là được xem là biểu tượng của sức mạnh và trường tồn. Tại những miền đất Trung Đông và Bắc Phi, nơi loài cây đã được gọi trìu mến là “Cô dâu của mọi loại cây” suốt hơn 5.000 năm, nó không chỉ mang lại bóng mát giữa những vùng sa mạc khô cằn mà còn cung cấp nguồn thực phẩm quý giá, trở thành một phần không thể thiếu của đời sống. Ở Việt Nam, chà là bén duyên với miền Tây qua nhiều thế hệ. Ban đầu, nó chỉ là cây cảnh tô điểm cho làng hoa, nhưng dần dần, những chùm quả cam rực rỡ, vị ngọt thanh tự nhiên cùng giá trị dinh dưỡng đã biến nó thành nét chấm phá độc đáo, mang đến hơi thở mới lạ cho không gian thơ mộng vốn đã nổi tiếng của Sa Đéc. Giữa không gian ấy, quán cà phê Tamara – Taste of Joy được chủ quán dày công kiến tạo trở thành điểm đến của những tâm hồn yêu cuộc sống. Nơi đây, du khách có thể ngồi dưới tán lá xanh mát, lắng nghe tiếng gió thì thầm và cảm nhận sự ấm áp của ánh nắng len qua từng kẽ lá. Tamara không chỉ là nơi thưởng thức hương vị cà phê nguyên chất với lớp xoắn mịn béo ngậy mà còn là chốn lưu giữ những kỷ niệm khó quên, nơi câu chuyện của quá khứ hòa cùng cảm xúc hiện tại. Không ngừng sáng tạo để mang đến trải nghiệm độc đáo cho khách hàng, Tamara luôn chú trọng nghiên cứu những món mới. Một trong những dự án thú vị hiện nay là “Matcha Coffee of ‘Date’” – sự kết hợp độc đáo giữa vị đắng nhẹ của matcha, độ đậm đà của cà phê và vị ngọt tự nhiên của quả chà là. Món mới này không chỉ gợi nhớ hương vị truyền thống của vùng đất Sa Đéc mà còn tạo nên trải nghiệm mới mẻ, hiện đại, đánh thức tất cả giác quan của thực khách.</p></div>

        
        {/* <div className="page"><p> </p></div> */}

        <div className="page"><p>Giữa không gian ấy, quán cà phê Tamara – Taste of Joy được chủ quán dày công kiến tạo trở thành điểm đến của những tâm hồn yêu cuộc sống. Nơi đây, du khách có thể ngồi dưới tán lá xanh mát, lắng nghe tiếng gió thì thầm và cảm nhận sự ấm áp của ánh nắng len qua từng kẽ lá. Tamara không chỉ là nơi thưởng thức hương vị cà phê nguyên chất với lớp xoắn mịn béo ngậy mà còn là chốn lưu giữ những kỷ niệm khó quên, nơi câu chuyện của quá khứ hòa cùng cảm xúc hiện tại. Không ngừng sáng tạo để mang đến trải nghiệm độc đáo cho khách hàng, Tamara luôn chú trọng nghiên cứu những món mới. Một trong những dự án thú vị hiện nay là “Matcha Coffee of ‘Date’” – sự kết hợp độc đáo giữa vị đắng nhẹ của matcha, độ đậm đà của cà phê và vị ngọt tự nhiên của quả chà là. Món mới này không chỉ gợi nhớ hương vị truyền thống của vùng đất Sa Đéc mà còn tạo nên trải nghiệm mới mẻ, hiện đại, đánh thức tất cả giác quan của thực khách.</p></div>

          {/* <div className="page"><p> </p></div> */}
            <div className="page"><p>Bên cạnh những hương vị độc đáo, vườn chà là Sa Đéc cũng chứng kiến những câu chuyện tình nhẹ nhàng nhưng đầy tiếc nuối. Một cô gái hiền hậu, với trái tim tràn đầy yêu thương, luôn âm thầm quan tâm và chăm sóc một chàng trai tốt bụng như cách người bạn tri kỷ, dù những rào cản nội tâm chưa cho phép cô bộc lộ trọn vẹn tình cảm. Những cử chỉ giản dị và lời nói ân cần của cô đã tạo nên một bản hòa ca đầy cảm xúc, in sâu vào tâm trí những kỷ niệm không thể phai mờ dưới mái vòm của thiên nhiên Sa Đéc. Chủ quán Tamara, người luôn tin vào sức mạnh của tình yêu được bộc lộ, mong rằng không ai phải gánh chịu nỗi cô đơn của những tâm hồn chưa đủ can đảm chia sẻ cảm xúc. Ông tin rằng mỗi trái tim đều xứng đáng được yêu thương và trân trọng, rằng những câu chuyện tình đẹp nên được dám kể để mỗi khoảnh khắc bên nhau trở thành ký ức ngọt ngào và trọn vẹn.

 </p></div>
              <div className="page"><p>Không chỉ là nơi lưu giữ những kỷ niệm đẹp, vườn chà là Sa Đéc và Tamara – Taste of Joy còn là địa điểm lý tưởng cho các sự kiện đặc biệt, đặc biệt là những tiệc cưới mang phong cách thiên nhiên lãng mạn. Tại Tamara, mỗi lễ cưới được tổ chức trong không gian xanh mát của vườn chà là, với ánh sáng tự nhiên dịu dàng và những chi tiết được thiết kế riêng biệt theo cá tính của từng cặp đôi. “Nơi tinh thần thăng hoa cùng thiên nhiên và những ký ức bền lâu” không chỉ là khẩu hiệu mà còn là triết lý sống của Tamara – nơi mỗi khoảnh khắc yêu thương đều được trân trọng và lưu giữ mãi mãi. Tại đây, những giây phút hạnh phúc được vẽ nên bằng cảm xúc chân thật, để mỗi lần nhớ về, lòng người lại ấm áp và tràn đầy hy vọng. </p></div>
      </HTMLFlipBook>
    </div>,
    // <div className="slide-content">Slide 3</div>,
  ];

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="container-fluid p-0">
                 <div className="slider-container-story p-0">
      <button className="prev-btn" onClick={prevSlide}>⬅</button>

      <div className="slider">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="slide"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {slides[index]}
          </motion.div>
        </AnimatePresence>
      </div>

      <button className="next-btn" onClick={nextSlide}>➡</button>
    </div>
    </div>
   
  );
}
