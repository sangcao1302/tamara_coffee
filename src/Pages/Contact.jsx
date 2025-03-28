import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { format, parse } from "date-fns";
import { vi } from "date-fns/locale"; // Vietnamese locale
import "../Scss/contact.scss"
const Contact = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzXp3VnxqwDeJWxP5CNgHqNlK0dxGRYXoatp6eIbwNlbv_6pVbjdNKaIVPPkYHavPLRMg/exec";

  const [formData, setFormData] = useState({
    service: "",
    name: "",
    phone: "",
    email: "",
    date: null, // Store date as a Date object, not a string
    note: "",
  });

  // Handle text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle date selection
  const handleDateChange = (date) => {
    if (date) {
      setFormData({
        ...formData,
        date: date, // Keep it as a Date object
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formattedDate = formData.date
        ? format(formData.date, "dd-MM-yyyy HH:mm", { locale: vi })
        : "";

      const data = new FormData();
      data.append("service", formData.service);
      data.append("name", formData.name);
      data.append("phone", formData.phone);
      data.append("email", formData.email);
      data.append("date", formattedDate); // Send formatted date
      data.append("note", formData.note);

      const response = await fetch(scriptURL, {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        Swal.fire("Success", "Your request has been submitted!", "success");
        setFormData({
          service: "",
          name: "",
          phone: "",
          email: "",
          date: null,
          note: "",
        });
      } else {
        Swal.fire("Error", "Something went wrong!", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Submission failed!", "error");
      console.error("Error:", error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="form-container">
        <h4 className="text-center mb-4">Form Submission to Google Sheet</h4>
        <form className="form-container p-5" onSubmit={handleSubmit}>
          <div className="form-column">
            <label>Service:</label>
            <select name="service" onChange={handleChange} value={formData.service}>
              <option value="">Select Service</option>
              <option value="Cafe">Cafe</option>
              <option value="Workshop">Workshop</option>
              <option value="Wedding">Wedding</option>
            </select>

            <label>Name:</label>
            <input type="text" name="name" placeholder="Enter full name" value={formData.name} onChange={handleChange} required />

            <label>Phone:</label>
            <input type="tel" name="phone" placeholder="Enter phone number" onChange={handleChange} value={formData.phone} required />
          </div>

          <div className="form-column">
            <label>Email:</label>
            <input type="email" name="email" placeholder="Enter email" onChange={handleChange} value={formData.email} required />

            <label>Date and Time:</label>
            <DatePicker
              selected={formData.date}
              onChange={handleDateChange}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="dd-MM-yyyy HH:mm"
              locale={vi}
              className="form-control"
              name="date"
              required
            />

            <label>Notes:</label>
            <textarea name="note" placeholder="Enter notes" onChange={handleChange} value={formData.note} />
          </div>

          <div className="form-submit">
            <button type="submit">Submit Request</button>
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
};

export default Contact;
