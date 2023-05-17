import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Pngtree01 from '../assets/Pngtree01.png';
import Pngtree02 from '../assets/Pngtree02.png';
import food01 from '../assets/food01.png';
import food02 from '../assets/food02.png';
import tickMark from '../assets/tickMark.png';
import Ellipse from '../assets/Ellipse 1.png';



const Banner = () => {
  const circleStyle = {
    borderRadius: '100%'
  };
  return (
    <div className='lg:flex px-5 lg:px-0'>
      <div className="lg:w-[50%] ">
        <img className='mt-3 hidden lg:block' src={Pngtree01} alt="" />
        <div className="lg:ml-[100px] lg:mt-[-15px] mt-8">
          <h1 className='text-[#396C03] font-bold text-[50px] lg:text-[65px]' style={{ fontFamily: 'Merienda' }}>Order food online from your favourite local restaurants.</h1>

          <h4 className=' text-2xl font-semibold text-[#676767] mt-[27px]'>Freshly made food delivered to your door.</h4>

          <div className="lg:flex mt-[27px]">

            <div className="flex">
              <img className='w-[49px] h-[49px] mr-[-56px] z-10 mt-[8px]' src={Ellipse} alt="" />

              <input type="text" placeholder="Enter your location" className="input input-bordered w-full lg:w-[600px] h-[65px] pl-16" />
            </div>
            <button className='btn btn-lg bg-[#396C03] text-white normal-case border-0 text-[22px] font-medium px-[50px] py-[15px] lg:ml-[-60px] mt-5 lg:mt-0'><AiOutlineSearch className='w-[24px] h-[24px] mr-2'></AiOutlineSearch> Search</button>
          </div>

        </div>
      </div>

      <div className="lg:w-[50%] mt-12 lg:mt-0">

        <div className="lg:w-[245px] h-[118] bg-white py-2 z-10 lg:absolute lg:ml-[245px] bg-opacity-50 lg:mt-[100px] flex justify-center rounded-md">
          <div className="">
            <div className="flex items-center ">
              <img className='w-[40px] h-[40px] mr-[13px]' src={tickMark} alt="" />
              <h2 className='text-[#FF8B00] text-[40px] font-bold mt-1'>200k+</h2>
            </div>
            <h4 className='text-center text-[#838383] text-[17px] font-semibold'>People Delivered</h4>
          </div>
        </div>

        <div className=" lg:relative mt-5 lg:mt-0">
          <div className=" flex justify-center lg:justify-between">
            <img className='w-[100%] lg:w-[200px] lg:h-[200px] mt-5 lg:mt-[100px]' src={food01} alt="" />
            <img className='w-[250px] h-[250px] mt-[100px] hidden lg:block' src={Pngtree02} alt="" />
          </div>

          <div className="flex justify-center mt-5 lg:mt-[-200px]">
            <img className='w-[100%] lg:w-[533px] lg:h-[528px]' src={food02} alt="" />
          </div>
        </div>



      </div>
    </div >
  );
};

export default Banner;