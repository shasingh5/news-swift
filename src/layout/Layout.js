import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = () => {
  return (
    <>
      {/* Your navbar component */}
      <Header />

      {/* This Outlet is the place in which react-router will render your components that you need with the navbar */}
      <main class="flex-shrink-0">
        <Outlet /> 
      </main>
      
      {/* You can add a footer to get fancy in here :) */}
      <Footer />
    </>
  )
}

export default Layout;