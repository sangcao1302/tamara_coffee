import React from 'react'
import Header from '../Component/Header'
import { Outlet } from "react-router-dom";
import Footer from '../Component/Footer';

export default function HomeTemplate() {
  return (
    <>
        <Header></Header>
        <div className='content-layout p-0' >
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </>
  )
}
