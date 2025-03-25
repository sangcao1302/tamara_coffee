import React ,{ useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "../Scss/contact.scss";

export default function Contact() {
  return (
    <div className="container-fluid  p-0">
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
