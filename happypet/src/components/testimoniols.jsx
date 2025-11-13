import React from 'react'

const testimoniols = () => {
  return (
    <div className="w-full bg-[#f8f8f8] py-10">
     
      <div className="max-w-5xl mx-auto text-right mb-6">
        <span className="inline-block bg-white px-4 py-2 rounded shadow text-gray-700 font-semibold">
 
  
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 max-w-5xl mx-auto">
      
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
       
            <div className="relative flex-1 group overflow-hidden rounded-lg">
              <img
                src="/public/images/cat.png"
                alt="Relief"
                className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-4 left-4">
                <span className="block text-white font-bold text-lg drop-shadow-md mb-2">Relief</span>
                <button className="px-4 py-1 bg-green-700 bg-opacity-70 text-white rounded text-xs font-medium hover:bg-green-800 transition">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="flex gap-2 h-44">
           
            <div className="relative flex-1 group overflow-hidden rounded-lg">
              <img
                src="/public/images/pug.jpg"
                alt="Wellness"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-4 left-4">
                <span className="block text-white font-bold text-base drop-shadow-md mb-2">Wellness</span>
                <button className="px-4 py-1 bg-green-700 bg-opacity-70 text-white rounded text-xs font-medium hover:bg-green-800 transition">Buy Now</button>
              </div>
            </div>
         
            <div className="relative flex-1 group overflow-hidden rounded-lg">
              <img
                src="/public/images/pugs.png"
                alt="Mobility"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-4 left-4">
                <span className="block text-white font-bold text-base drop-shadow-md mb-2">Mobility</span>
                <button className="px-4 py-1 bg-green-700 bg-opacity-70 text-white rounded text-xs font-medium hover:bg-green-800 transition">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
       
        <div className="relative h-full group overflow-hidden rounded-lg min-h-[370px]">
          <img
            src="/public/images/dogInBa.jpg"
            alt="Relaxation"
            className="w-full h-full object-cover min-h-[370px] max-h-[90%] transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute bottom-4 right-4 text-right">
            <span className="block text-white font-bold text-lg drop-shadow-md mb-2">Relaxation</span>
            <button className="px-4 py-1 bg-green-700 bg-opacity-70 text-white rounded text-xs font-medium hover:bg-green-800 transition">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default testimoniols
