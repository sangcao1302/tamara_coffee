import React ,{ useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Scss/contact.scss";

export default function Contact() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [formData, setFormData] = useState({
    service: "Cafe",
    name: "",
    phone: "",
    email: "",
    date: selectedDate, // Set giá trị mặc định là ngày hiện tại
    note: "",
  });

  const API_URL = "https://script.google.com/macros/s/AKfycbzC56FRPDq-T0G7BbpvXeiX5N-PYf6m3igYhsgXqE4hO-eGe95IshbEXZEnFmTMqL3w/exec"; // Thay bằng API của bạn

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(API_URL, {
                redirect: "follow",

      method: "POST",
      body: JSON.stringify(formData),
       headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json(); // Ensure JSON response
    alert(result.message); // ✅ Show success message
  } catch (error) {
    console.error("Error:", error);
    alert("Gửi dữ liệu thất bại!");
  }
  console.log(formData)
};


  return (
    <div className="container  p-0">
            <div className="booking-form">
      <h2>Đặt Dịch Vụ</h2>
      <form className="form-container p-5" onSubmit={handleSubmit}>
        {/* Cột 1 */}
        <div className="form-column">
          <label>Dịch vụ muốn đặt:</label>
          <select name="service" onChange={handleChange} value={formData.service}>
            <option value="Cafe">Cà phê</option>
            <option value="Workshop">Workshop</option>
            <option value="Wedding">Đám cưới</option>
          </select>

          <label>Họ và Tên:</label>
          <input
  type="text"
  name="name"
  placeholder="Nhập họ và tên"
  value={formData.name} // ✅ Controlled input
  onChange={handleChange}
  required
/>

          <label>Số điện thoại:</label>
          <input type="tel" name="phone" placeholder="Nhập số điện thoại" onChange={handleChange} value={formData.phone} required />
        </div>

        {/* Cột 2 */}
        <div className="form-column">
          <label>Email:</label>
          <input type="email" name="email" placeholder="Nhập email" onChange={handleChange} value={formData.email}  required />

              <label>Ngày & Giờ đặt:</label>
      
    <DatePicker
  selected={selectedDate}
  onChange={(date) => {
    setSelectedDate(date);
    setFormData({ ...formData, date }); // ✅ Ensure formData updates
  }}
  showTimeSelect
  timeFormat="HH:mm"
  timeIntervals={15}
  dateFormat="dd/MM/yyyy HH:mm"
  className="custom-datepicker"
/>
          <label>Ghi chú:</label>
          <textarea name="note" placeholder="Nhập ghi chú" onChange={handleChange}  value={formData.note} />
        </div>

        {/* Nút Gửi (full width) */}
        <div className="form-submit">
          <button type="submit">Gửi Yêu Cầu</button>
        </div>
      </form>
    </div>
        <div className="locationTamara">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.2562905579944!2d105.7373358758351!3d10.321362667420878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a7d61b18d4e59%3A0xd9a790b2ca575df!2zVGFtYXJhLVbGsOG7nW4gQ2jDoCBMw6A!5e0!3m2!1svi!2s!4v1742789199587!5m2!1svi!2s"

                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
        </div>
     
          <footer className="bg-dark text-light py-5">
      <div className="container-fluid text-center">
        <div className="row ">
          {/* Cột 1: Logo & Giới thiệu */}
          <div className="col-md-4">
            <div className="logo-tamara w-100">
                <img src="../assets/image/tamara3white.png" alt="" />
            </div>
          </div>

          {/* Cột 2: Địa chỉ quán */}
          <div className="col-md-4 col-12">
            <h5 className="text-uppercase">Địa chỉ</h5>
            <p>📍 Tân Quy Đông, Thành phố Sa Đéc, Đồng Tháp, Việt Nam</p>
            <p>☎ 094 380 00 68</p>
            <p>📧 tamara020124@gmail.com</p>
          </div>

          {/* Cột 3: Liên kết nhanh */}
          <div className="col-md-4 col-12">
                  <div>
            <a href="#" className="text-light mx-2">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-light mx-2">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-light mx-2">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          </div>
        </div>

        {/* Dòng ngang */}
        <hr className="mt-3" />

        {/* Cột cuối cùng: Bản quyền & MXH */}
        <div className="text-center ">
          <p>© 2025 Tamara Coffee. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>  
  );
}
