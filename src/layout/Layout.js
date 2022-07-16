import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../components/Header';

const Layout = () => {
  return (
    <div>
      {/* Your navbar component */}
      <Header />

      {/* This Outlet is the place in which react-router will render your components that you need with the navbar */}
      <Outlet /> 
      
      {/* You can add a footer to get fancy in here :) */}
    </div>
  )
}

export default Layout;