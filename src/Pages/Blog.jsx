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
        <div className="page"><p>Giữa lòng làng hoa Sa Đéc, có một khu vườn đặc biệt đang trở thành điểm đến yêu thích của du khách gần xa. Vườn chà là rộng 4.000 mét vuông không chỉ mang đến cảnh quan xanh mát mà còn chứa đựng những câu chuyện về hành trình đầy đam mê của những người nông dân, những người đã mang một loài cây từ phương xa về trồng trên mảnh đất màu mỡ này. Chà là từ lâu đã được xem là biểu tượng của sự mạnh mẽ và trường tồn. Ở Trung Đông và Bắc Phi, nơi loài cây này xuất hiện từ hơn 5.000 năm trước, người ta gọi nó bằng cái tên đầy trìu mến: “Cô dâu của mọi loại cây.” Không chỉ mang lại bóng mát giữa những vùng sa mạc khô cằn, chà là còn cung cấp nguồn thực phẩm quý giá, trở thành một phần không thể thiếu trong đời sống của con người nơi đây. Ở Việt Nam, chà là bén duyên với miền Tây từ nhiều thập kỷ trước. Ban đầu, người ta trồng nó như một loài cây kiểng, nhưng rồi những chùm quả cam rực rỡ, vị ngọt thanh và giá trị dinh dưỡng của nó đã khiến chà là dần trở thành một phần của hệ sinh thái đặc trưng nơi này. Ở Sa Đéc, chà là không chỉ được trồng để tô điểm cho làng hoa, mà còn trở thành một nét chấm phá độc đáo, mang đến một hơi thở mới lạ giữa không gian thơ mộng vốn đã nổi tiếng từ lâu. </p></div>

        
        {/* <div className="page"><p> </p></div> */}

        <div className="page"><p>Một trong những điểm nhấn thú vị nhất của vườn chà là chính là quán cà phê Tamara – Taste of Joy, nơi mà thiên nhiên và hương vị hòa quyện vào nhau. Ngồi dưới những tán chà là đu đưa trong gió, thưởng thức một tách cà phê nguyên chất với lớp xoắn mịn béo ngậy, lắng nghe tiếng lá xào xạc, lòng người như chậm lại giữa những bộn bề của cuộc sống. Tamara không chỉ là một quán cà phê mà còn là một không gian trải nghiệm, nơi du khách có thể tìm hiểu về lịch sử hình thành của cây chà là, cách người nông dân đã mang nó về trồng, chăm sóc và biến nó thành một phần không thể thiếu của vùng đất này. Không dừng lại ở đó, Tamara – Taste of Joy còn đang ấp ủ một món nước đặc trưng, chỉ có riêng tại nơi đây – Matcha Coffee of “Date”. Đây là sự kết hợp tinh tế giữa vị đắng nhẹ của matcha, độ đậm đà của cà phê và vị ngọt thanh tao từ quả chà là, tạo nên một hương vị vừa lạ, vừa quen, vừa mang hơi thở của thiên nhiên, vừa phảng phất nét hiện đại. Khi cầm trên tay ly Matcha Coffee of “Date”, ngắm nhìn những chùm chà là đong đưa trong nắng, người ta sẽ cảm nhận được sự giao thoa giữa văn hóa, thiên nhiên và tình yêu dành cho vùng đất này. </p></div>

          {/* <div className="page"><p> </p></div> */}
            <div className="page"><p>Nhưng có lẽ, điều làm cho vườn chà là trở nên đặc biệt hơn cả chính là những khoảnh khắc ý nghĩa mà nó mang đến cho mọi người. Không chỉ là nơi để du khách thưởng thức hương vị thiên nhiên, Tamara – Taste of Joy còn khẳng định sẽ mang lại những phút giây tuyệt vời nhất cho những lễ cưới ngoài trời, nơi những cô dâu trở thành nhân vật đặc biệt nhất trong một không gian tự nhiên thơ mộng. Tamara tin rằng, mọi cô dâu đều xứng đáng có một ngày trọng đại thật trọn vẹn – nơi mà từng chiếc lá chà là cũng như đang thì thầm lời chúc phúc, nơi ánh nắng nhẹ nhàng vờn trên mái tóc, và nơi mỗi khoảnh khắc đều được lưu giữ như một phần của câu chuyện tình yêu diệu kỳ. Không gian rộng rãi với những hàng chà là xanh mướt, ánh sáng tự nhiên tuyệt đẹp cùng bầu không khí trong lành sẽ tạo nên một khung cảnh đầy lãng mạn cho những lời thề nguyện. Không chỉ dành cho những đám cưới trong mơ, Tamara còn là điểm đến hoàn hảo cho những màn cầu hôn bất ngờ, nơi mà tình yêu được thể hiện một cách chân thành nhất, giữa thiên nhiên khoáng đạt và những ánh mắt ngập tràn hạnh phúc. Từ những bữa tiệc cưới ấm áp bên gia đình, những buổi chụp ảnh cưới nên thơ cho đến những khoảnh khắc đáng nhớ khi người ấy nói lời “đồng ý,” tất cả đều có thể diễn ra tại đây – trong không gian mang đậm hơi thở của sự gắn kết và yêu thương. 

 </p></div>
              <div className="page"><p>Và không chỉ dành riêng cho những đôi lứa yêu nhau, vườn chà là cũng là điểm đến lý tưởng cho những buổi dã ngoại gia đình, những buổi team-building của công ty hay đơn giản là một chốn yên bình để tạm rời xa nhịp sống hối hả. Mỗi mùa quả chín, những chùm chà là cam rực lại khiến không gian nơi đây càng thêm phần quyến rũ, tựa như một bức tranh thiên nhiên sống động mà bất cứ ai cũng muốn lưu giữ lại trong ký ức. Nếu một ngày nào đó, bạn muốn tìm về một nơi không chỉ có hoa thơm cỏ lạ mà còn có câu chuyện của những con người tận tụy, nơi có những hương vị riêng biệt không thể tìm thấy ở bất kỳ đâu, hãy đến với Tamara – Taste of Joy tại vườn chà là Sa Đéc. Dù là một chuyến đi thư giãn, một cuộc gặp gỡ ấm áp, hay một khoảnh khắc quan trọng của cuộc đời, nơi đây luôn chào đón bạn với vẻ đẹp dịu dàng và những kỷ niệm khó quên.  </p></div>
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
