import React from 'react';
// import { a } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import arrow from '../assets/arrow.png';
import "./Navbar.css";



const Navbar = () => {
  const menuItems = <React.Fragment>
    <li className='font-medium header-nav-item'><a to='/'>Home</a></li>
    <li className='font-medium header-nav-item'><a to='/blog'>Blogs</a></li>
    <li className='font-medium header-nav-item'><a to='/aboutus'>About Us</a></li>

    <li tabIndex={0} className='header-nav-item'>
      <a to="/" className="justify-between">
        EN
        <IoIosArrowDown className='ml-[-10px]'></IoIosArrowDown>
      </a>
      <ul className="p-2">
        <li><a>EN 1</a></li>
        <li><a>EN 2</a></li>
      </ul>
    </li>

  </React.Fragment>;
  return (
    <div>
      <div className="navbar lg:px-[100px] border-b border-[#3F3F3F]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 text-lg font-medium text-[#3F3F3F]">
              {menuItems}
            </ul>
          </div>
          <div className="flex">
            <a to="/" className=" font-bold text-[28.3446px] text-[#396C03] header-title" style={{ fontFamily: 'Merienda' }}>FoodTime</a>
            <img className='w-[9px] h-[17.5px] ml-1 header-title' src={arrow} alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex header-nav">
          <ul className="menu menu-horizontal px-1 text-lg font-medium text-[#3F3F3F] ">
            {menuItems}
          </ul>
        </div>
        <div className="navbar-end mr-2 lg:mr-0">
          <a to="/" className="btn lg:px-[50px] normal-case bg-[#396C03] text-white border-0 text-xl font-medium mr-2 lg:mr-6">Login</a>

          <label tabIndex={0} className="btn bg-[#396C03] btn-circle border-0">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-[30px] w-[28px] text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <span className="badge indicator-item text-white text-base font-bold p-2 border-0 bg-[#FF8B00]">2</span>
            </div>
          </label>

        </div>

      </div>
    </div>
  );
};

export default Navbar;