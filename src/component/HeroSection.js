import React, { useEffect, useRef, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import image01 from '../assets/image01.png';
import './Hero.css';



const HeroSection = () => {
  const cycleRef = useRef(null);

  useEffect(() => {
    const cycleElement = cycleRef.current;

    const animation = cycleElement.animate(
      [
        { transform: 'translateX(0%)' },
        { transform: 'translateX(80%)' },
      ],
      {
        duration: 5000,
        iterations: Infinity,
        easing: 'linear',
      }
    );

    return () => {
      animation.cancel();
    };
  }, []);

  return (
    <div className='mt-[146px] mb-28 px-5 lg:px-0 lg:flex gap-2'>
      <div className="lg:w-[40%] lg:ml-[100px]">
        <h2 className='text-[#396C03] font-bold text-[50px]' style={{ fontFamily: 'Merienda' }}>Explore your favourite city’s food.</h2>

        <p className='text-lg text-[#676767] mt-[10px]'>Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh tristique. Non ligula tristique ut ut libero sit convallis maecenas. At egestas auctor porta mattis.</p>

        <button className='btn btn-lg bg-[#396C03] text-white normal-case border-0 text-[22px] font-medium px-[50px] py-[15px] mt-4'>Explore <BsArrowRight className='w-[24px] h-[24px] font-bold ml-2'></BsArrowRight></button>
      </div>
      <div className="lg:w-[60%] cycle-bg-img mt-5 lg:mt-0">

        <div className="app-container">
          <div className="cycle-photo" ref={cycleRef}>
            <img src={image01} alt="" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;