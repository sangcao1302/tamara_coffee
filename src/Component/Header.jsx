import React, { useState } from 'react'
import '../Scss/header.scss'
import {NavLink} from "react-router-dom"
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='container-fluid'>
      {/* Nút mở menu */}
      <div className='d-flex align-items-center'>
        <div className='logo text-white'>
            <NavLink to={"/home"} className="item-menu"><img src="/assets/image/tamara3white.png" alt="" /></NavLink>
        </div>
      <div className='menu w-50 d-flex justify-content-end align-items-center'>
             <button className="btn text-white fs-3 rounded-1" onClick={toggleSidebar}>
                <i className="fas fa-bars"></i>
      </button>
      </div>
     
      </div>
     

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""} `} style={{background:"rgba(0,0,0,0.8)"}}>
        <button className="close-btn" onClick={toggleSidebar}>&times;</button>
        <h4 className="text-white text-center py-3">Menu</h4>
        <ul className="menu-reponsive mt-4" >
            <li className='d-flex flex-column gap-4'>
                <NavLink to={"/home"} className="item-menu" onClick={toggleSidebar}>🏠 Home</NavLink>
                <NavLink to={"/about"} className="item-menu" onClick={toggleSidebar}>ℹ️ Giới thiệu</NavLink>
                <NavLink to={"/serve"} className="item-menu" onClick={toggleSidebar}>🛎️ Dịch vụ</NavLink>
                <NavLink to={"/memory"} className="item-menu" onClick={toggleSidebar}>🖼️ Hình ảnh</NavLink>
                 <NavLink to={"/blog"} className="item-menu" onClick={toggleSidebar}>📝 Câu chuyện</NavLink>
                 <NavLink to={"/contact"} className="item-menu" onClick={toggleSidebar}>📞 Liên hệ - Đặt chỗ</NavLink>
            </li>
        </ul>
      </div>

      {/* Overlay khi mở menu */}
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}


    </div>
  );
}




