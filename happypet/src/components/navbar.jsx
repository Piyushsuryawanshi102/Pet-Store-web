import React from 'react'
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
    
      <div className="w-full bg-pink-200 text-center text-xs text-white py-1  ">
        Free <span className="underline">Shipping</span> within Bhopal on orders over <b>above 500 rupee </b>
      </div>
   
  <nav className={`px-6 p-6 flex items-center justify-between fixed left-0 w-full  z-50 transition-all duration-300 ${isScrolled ? 'top-0 bg-blue-200' : 'top-5 bg-transparent'}`}>
        
      
        <div className="flex items-center gap-3">
   
          <img 
            src="/images/hero/product/icons/firstlogo.png"
            alt="Happy Pets Logo"
            className="w-40 h-10 object-contain mr-2"
            style={{ minWidth: "40px", minHeight: "40px" }}
          />
          <span className="font-bold text-3xl text-white drop-shadow-lg tracking-tight font-sans" style={{ letterSpacing: ".06em" }}>
            Happy pets
          </span>
        </div>
     
        <ul className="flex items-center gap-7 text-sm font-normal sticky top-0 z-30">
          <li><a className="hover:underline" href="#">Home</a></li>
          <li><a className="hover:underline" href="#">Shop by Pet</a></li>
          <li><a className="hover:underline" href="#">Education Center</a></li>
          <li><a className="hover:underline" href="#">About Us</a></li>
          <li><a className="hover:underline" href="#">Contact Us</a></li>
        </ul>
   
        <div className="flex items-center gap-4 text-lg">
          <svg
            className="w-6 h-6 cursor-pointer"
            fill="none"
            stroke="white"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
            onClick={() => window.location.href = '/login'}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 14c2.21 0 4 1.79 4 4v2H4v-2c0-2.21 1.79-4 4-4h8Zm-4-2a4 4 0 100-8 4 4 0 000 8z"
            />
          </svg>

          <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3.172 5.172a4 4 0 015.656 0L12 8.343l3.172-3.171a4 4 0 115.656 5.656L12 21.343 3.172 10.828a4 4 0 010-5.656z" /></svg>

          <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.34 2m.66 7h13.11a2 2 0 001.98-1.72l1.36-8H6.42m0 0L5 3M6.42 3l1.49 9M17 21a1 1 0 100-2 1 1 0 000 2zm-10 0a1 1 0 100-2 1 1 0 000 2z" /></svg>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
