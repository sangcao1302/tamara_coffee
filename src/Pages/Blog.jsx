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
        <div className="page">
            <p className="mt-5">Giữa làng hoa Sa Đéc, nơi thiên nhiên và lịch sử giao thoa, hiện hữu một khu vườn chà là cổ thụ rộng 4.000 mét vuông – minh chứng sống động cho niềm đam mê của những người nông dân đã mang một loài cây quý mang giống từ phương xa về trồng trên mảnh đất màu mỡ này. Từ xưa, chà là được xem là biểu tượng của sức mạnh và trường tồn, tại những miền đất Trung Đông và Bắc Phi, nơi loài cây đã được gọi trìu mến là "Cô dâu của mọi loại cây" suốt hơn 5.000 năm, nó không chỉ mang lại bóng mát giữa những vùng sa mạc khô cằn mà còn cung cấp nguồn thực phẩm quý giá, trở thành một phần không thể thiếu của đời sống và gắn liền với văn hóa Trung đông.  </p>          
        </div>
        <div className="page">
            <p className="mt-5">Ở Việt Nam, Chà là bén duyên với làng hoa Sadec qua nhiều thế hệ; ban đầu chỉ là cây cảnh tô điểm cho làng hoa, nhưng dần dần, Trên thân cây xù xì ấy đã vươn mình thẳng tấp, hiên ngang, tán lá xòe rộng phủ bóng mát và đủ sức đơm hoa - những chùm hoa tỏa hương thơm ngọt ngào rồi kết trái từng ngày chuyển mình đầy sức sống từ màu xanh non rồi xanh đậm dần chuyển sang màu vàng óng ánh và rực rỡ màu cam từng chùm sai quả tạo cho khu vườn trở nên đẹp lung linh và vô cùng đặc biệt. Khi trái Chà là chuyển sang màu nâu thì du khách có thể thưởng thức vị bùi, ngọt thanh tự nhiên cùng giá trị dinh dưỡng.Vườn Chà là đã trở thành thành nét chấm phá độc đáo, mang đến hơi thở mới lạ cho không gian thơ mộng vốn đã nổi tiếng của Sa Đéc.</p>
            <div className="navigation-arrow right text-dark">
              <i className="fa fa-arrow-right fs-4 " aria-hidden="true"></i>
            </div>
        </div>     
        <div className="page">
            <p className="mt-5">Giữa không gian ấy, Tamara Coffee với slogan "Taste of Joy" được chủ quán dày công kiến tạo trở thành điểm đến của những tâm hồn yêu thiên nhiên và tìm đến nơi lưu giữ ký ức đầy thơ mộng. Nơi đây, du khách có thể ngồi dưới tán lá xanh mát, lắng nghe tiếng gió thì thầm và cảm nhận sự ấm áp của ánh nắng len qua từng kẽ lá, khẽ chạm bước châm mình trên thảm cỏ để cảm nhận sự bình yên đến lạ.</p>
            <div className="navigation-arrow left text-dark">
              <i className="fa fa-arrow-left fs-4" aria-hidden="true"></i>
            </div>
        </div>       
        <div className="page">
            <p className="mt-5">Và không chỉ dành riêng cho những đôi lứa yêu nhau, vườn chà là cũng là điểm đến lý tưởng cho những buổi dã ngoại gia đình, những buổi team-building của công ty hay đơn giản là một chốn yên bình để tạm rời xa nhịp sống hối hả. Mỗi mùa quả chín, những chùm chà là cam rực lại khiến không gian nơi đây càng thêm phần quyến rũ, tựa như một bức tranh thiên nhiên sống động mà bất cứ ai cũng muốn lưu giữ lại trong ký ức. Nếu một ngày nào đó, bạn muốn tìm về một nơi không chỉ có hoa thơm cỏ lạ mà còn có câu chuyện của những con người tận tụy, nơi có những hương vị riêng biệt không thể tìm thấy ở bất kỳ đâu, hãy đến với Tamara – Taste of Joy tại vườn chà là Sa Đéc. Dù là một chuyến đi thư giãn, một cuộc gặp gỡ ấm áp, hay một khoảnh khắc quan trọng của cuộc đời, nơi đây luôn chào đón bạn với vẻ đẹp dịu dàng và những kỷ niệm khó quên.</p>
            <div className="navigation-arrow right text-dark">
              <i className="fa fa-arrow-right fs-4" aria-hidden="true"></i>
            </div>
        </div>
        <div className="page">
            <p className="mt-5">Đến Tamara Coffee – Vườn Chà là, Quý khách sẽ dược thưởng thức nhiều món nước uống thú vị và độc đáo: Các món nước uống được chế biến từ trái cây địa phương Miền Tây, đặc biệt một trong những món "Best Seller" của quán là món "Trà Sen Hoa Nguyệt" mang hương thơm và mùi vị đặt trưng của vùng đất Sen hồng Đồng Tháp, hòa cùng với vị trà hương sen thơm mát lành và vị bùi ngọt ngào từ hạt sen tươi, thêm lớp topping củ năng và sợi rau câu hồng đẹp mắt làm nên món ngon đậm vị đặt trưng mà nếu thử một lần sẽ lưu giữ ký ức và luôn muốn là món "guộc" khi đến đây. "Trà Sen Hoa Nguyệt" là một trong chuỗi các món "Trà Hoa" của nơi này mà chủ quán muốn lưu giữ ký ức khi quý khách đi thăm quan Làng hoa. còn gì hơn khi đi Làng Hoa để ngắm hoa, ngồi ở quán Cà fê Tamara giữa Làng hoa để uống "Trà Hoa" </p>
             <div className="navigation-arrow left text-dark">
              <i className="fa fa-arrow-left fs-4" aria-hidden="true"></i>
            </div>
        </div>
        <div className="page">
            <p className="mt-5">Không ngừng sáng tạo để mang đến trải nghiệm độc đáo cho khách hàng, Tamara luôn chú trọng nghiên cứu những món mới. Một trong những dự án thú vị hiện nay  là "Matcha of 'Date'" – sự kết hợp độc đáo giữa vị đắng nhẹ của matcha, độ đậm đà của sữa yến mạch và vị ngọt tự nhiên của quả chà là. Món mới này không chỉ thơm ngon đặc biệt mà còn tạo sự trải nghiệm mới mẻ, hiện đại, đánh thức tất cả giác quan của thực khách. Món ""Matcha of 'Date'" là một trong chuỗi các món được chế biến từ trái chà là giàu dinh dưỡng và rất tốt cho sức khỏe - Quý khách thử trải nghiệm  
            <p className="p-0 mt-3 fw-bold">Các món "Signature" khác: </p>
            <ul>
                <li className="py-2">Cà phê Trà Bá tước </li>
                <li className="py-2">Cà phê Tamara </li>
                <li className="py-2">Cà phê kem kiểu ý </li>
                <li className="py-2">Matcha chà là </li>
                <li className="py-2">Trà sữa chà là đặc biệt </li>
            </ul>         
            </p>   
             <div className="navigation-arrow right text-dark">
              <i className="fa fa-arrow-right fs-4" aria-hidden="true"></i>
            </div>    
        </div>
        <div className="page mt-5">
            <p>
                Tamara không chỉ là nơi thưởng thức hương vị cà phê nguyên chất với lớp xoắn mịn béo ngậy mà còn là chốn lưu giữ những kỷ niệm khó quên, nơi câu chuyện của quá khứ hòa cùng cảm xúc hiện tại tạo ra những trải nghiệm đáng nhớ cho du khách về vùng đất Sađec xưa và nay. Từ thuở xưa, Sa Đéc vẫn là một vùng đất trũng, khí hậu khá ẩm ướt nước ngập bốn bề. Sa Đéc là theo tiếng Khmer theo chữ "Phsar- Dek" là tên một vị thủy thần mà họ rất tôn sùng. Theo thuyết dân gian, Sa Đéc còn là tên gọi của một cô gái xinh đẹp, mỹ miều. Vì tình yêu đau khổ, không thành nên đã xuống tóc xuất gia thành Phật. Sau này, cô gái lại quay về lại chốn cũ, lập ra khu chợ này, cư dân vì tưởng nhớ công ơn mà lấy tên của nàng làm chợ cho đến tận bây giờ. 
            </p>
             <div className="navigation-arrow left text-dark">
              <i className="fa fa-arrow-left fs-4" aria-hidden="true"></i>
            </div>
        </div>
        <div className="page mt-5">
            <p>
                Cái tên Sa Đéc được ra đời với nhiều yếu tố, truyền thuyết khác nhau. Song, thành phố Sa Đéc vẫn luôn lưu giữ những nét đẹp riêng biệt vốn có từ Làng hoa rộng cả hàng ngàn hecta, Làng bột truyền thống và các sản phẩm từ bột gạo như những tô hủ tiếu thơm lừng vang danh, món bánh tầm bì đặc trưng của Sa Đéc, sản phẩm "bột Bích Chi" nổi tiếng, sản phấm "Bánh phòng tôm Sa giang"  là món ăn quen thuộc trên các bàn tiệc món ăn Việt. Hay những ngôi chùa cổ kính hấp dẫn, những ngôi nhà cổ kiến trúc pháp nhẹ nhàng và iên bình bên dòng Sa Giang thơ mộng,  Đưa đến cho mọi du khách các góc nhìn đặc sắc về một nơi du lịch hấp dẫn, đầy màu sắc mà không hề mất đi cái bình dị vốn có.  
             </p>
              <div className="navigation-arrow right text-dark">
              <i className="fa fa-arrow-right fs-4" aria-hidden="true"></i>
            </div>
        </div>
        <div className="page mt-5">
            <p>
                Giữa không gian yên bình ấy, câu chuyện tình nhẹ nhàng nhưng đầy tiếc nuối cũng được viết nên cái tên "Sa đéc". in sâu vào tâm trí những kỷ niệm không thể phai mờ dưới mái vòm của thiên nhiên Làng hoa Sa Đéc. Chủ quán Tamara, người luôn tin vào sức mạnh của tình yêu được bộc lộ, mong rằng không ai phải gánh chịu nỗi cô đơn của những tâm hồn chưa đủ can đảm chia sẻ cảm xúc. Ông tin rằng mỗi trái tim đều xứng đáng được yêu thương và trân trọng, rằng những câu chuyện tình đẹp nên được kể để mỗi khoảnh khắc bên nhau trở thành ký ức ngọt ngào và trọn vẹn, và đã thiết kế không gian hẹn hò của đôi lứa yêu nhau và những khoảnh khắc tỏ tình – cầu hôn đầy lãng mạn 
            </p>
             <div className="navigation-arrow left text-dark">
              <i className="fa fa-arrow-left fs-4" aria-hidden="true"></i>
            </div>
        </div>
        <div className="page mt-5">
            <p>Câu chuyện tỏ tình- cầu hôn là sự bắt đầu cho một giai đoạn của đôi lứa yêu nhau. Vườn chà là Sa Đéc không chỉ là nơi chứng kiến khoản khắc đẹp của lời tỏ tình, những câu chuyện tình lãng mạn, và là địa điểm chụp ảnh cưới tuyệt đẹp lưu giữ những hình ảnh và kỷ niệm theo thời gian cho các cặp đôi.</p>
             <div className="navigation-arrow right text-dark">
              <i className="fa fa-arrow-right fs-4" aria-hidden="true"></i>
            </div>
        </div>
        <div className="page mt-5">
            <p>Đặc biệt, Tamara – Vườn chà là cam kết mang đến những trải nghiệm tiệc cưới độc đáo và tinh tế, nơi mà mỗi cô dâu đều được tôn vinh với những khoảnh khắc riêng biệt, ấn tượng và đầy cảm xúc, mỗi lễ cưới được tổ chức dưới bầu không khí thiên nhiên tràn ngập sức sống, ánh sáng tự nhiên dịu dàng, những hàng chà là xanh mướt và tiếng gió thì thầm qua từng chiếc lá tạo nên khung cảnh như một bức tranh sống động. Đây chính là nơi giúp tinh thần thăng hoa cùng thiên nhiên, mang đến cho căp đôi không chỉ là một lễ cưới, mà còn là một hành trình cảm xúc, nơi mà lời hẹn ước, nụ cười và ánh mắt, cái chạm nhẹ hay những giọt nước mắt hạnh phúc đều được ghi dấu thành những ký ức bền lâu.</p>
             <div className="navigation-arrow left text-dark">
              <i className="fa fa-arrow-left fs-4" aria-hidden="true"></i>
            </div>
        </div>
        <div className="page mt-5">
                <p>Tamara hiểu rằng, mỗi người đều có một câu chuyện riêng và mỗi cô dâu, chú rễ xứng đáng có một ngày trọng đại thật trọn vẹn với những khoảng khắc riêng biệt, được chăm chút tỉ mỉ theo cá tính và tâm hồn của mình. Chính vì thế, mỗi tiệc cưới tại đây được thiết kế với sự cá nhân hoá, từ không gian, trang trí cho đến những hoạt động chắp cánh cho tình yêu. Mỗi chi tiết nhỏ đều được chăm chút một cách tinh tế, từ trang trí hoa tươi hòa quyện với thiên nhiên, đến ánh đèn lung linh, đều góp phần tạo nên một bối cảnh lãng mạn, ấm áp và tràn đầy niềm tin yêu hạnh phúc.
                 <p className="p-0 mt-3">
                   <span className="fw-bold"> "Taste of joy"</span> không chỉ là khẩu hiệu của Tamara mà còn là triết lý sống, là lời cam kết mang đến cho mỗi cặp đôi một hành trình tình yêu đẹp, nơi mọi khoảnh khắc đều được yêu thương và ghi dấu mãi mãi. Đây là nơi mà những giây phút hạnh phúc được vẽ nên bằng cảm xúc chân thật, để mỗi lần nhớ về, lòng người lại ấm áp và tràn đầy hy vọng.
                </p>    
                 </p>
               
        </div>
      </HTMLFlipBook>
    </div>,
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
