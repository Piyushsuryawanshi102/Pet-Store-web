import React from 'react'

const Product = () => {
  return (
    <div>
    <div className="w-full min-h-[540px] bg-white flex flex-col justify-between">
    
      <div className="flex flex-row items-start w-full pt-6 pb-10 px-6 md:px-16">

        <div className="flex flex-col items-center min-w-[190px] max-w-[220px] md:min-w-[220px] md:max-w-[260px]">
          <img 
            src="/public/images/pic6.jpg" 
            alt="Hemp Oil for Dogs"
            className="w-[220px] object-contain rounded-lg shadow-md mb-2"
          />
          <span className="text-xs text-neutral-400 text-center">Hemp Oil 500 mg for Dogs (more than 15kg) <br/> 30ml | PAWHEALTH</span>
        </div>
       
        <div className="flex-1 flex flex-col items-center">
          <button
            className="mt-20 md:mt-28 px-8 py-2 rounded bg-pink-200 text-white font-semibold tracking-wider text-sm shadow transition hover:bg-pink-300"
          >
            Enter My Bag
          </button>
        </div>
      </div>

   
      <div className="w-full bg-[#9CA398] py-7 px-2 flex flex-col md:flex-row items-center justify-around gap-6">
        <div className="flex flex-col items-center">
          <svg className="w-7 h-7 mb-1" fill="none" stroke="#242424" strokeWidth="1.3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 14c2.21 0 4 1.79 4 4v2H4v-2c0-2.21 1.79-4 4-4h8Zm-4-2a4 4 0 100-8 4 4 0 000 8z" />
          </svg>
          <span className="font-semibold text-sm mb-1">Free Shipping</span>
          <span className="text-xs text-gray-700 text-center">On orders above 500 rupee</span>
        </div>
        <div className="flex flex-col items-center">
          <svg className="w-7 h-7 mb-1" fill="none" stroke="#242424" strokeWidth="1.3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l-2 5v1a2 2 0 002 2h15m-1-8v3a2 2 0 002 2h6m-8-5v2" />
          </svg>
          <span className="font-semibold text-sm mb-1">Quick Delivery</span>
          <span className="text-xs text-gray-700 text-center">We deliver within 48h in Bhopal</span>
        </div>
        <div className="flex flex-col items-center">
          <svg className="w-7 h-7 mb-1" fill="none" stroke="#242424" strokeWidth="1.3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 17v.01M5 7h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2zm14 0V5a2 2 0 00-2-2H7a2 2 0 00-2 2v2" />
          </svg>
          <span className="font-semibold text-sm mb-1">100% Secure Payment</span>
          <span className="text-xs text-gray-700 text-center">Protected with safe, quick checkouts</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Product
