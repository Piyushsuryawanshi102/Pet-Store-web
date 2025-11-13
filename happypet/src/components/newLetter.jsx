import React from 'react';

const NewLetter = () => {
  return (
    <section className="w-full py-16 bg-white flex flex-col items-center justify-center text-center">
      <span className="uppercase text-xs tracking-widest text-pink-400 mb-3 font-semibold">
        At Happy Pets
      </span>
      <h2 className="text-2xl md:text-3xl font-bold mb-5">
        We believe that a happy pet <span role="img" aria-label="dog">🐶</span> is a happy you <span role="img" aria-label="smile">😊</span>
      </h2>
      <div className="flex justify-center mb-1">
        <svg width="50" height="10" viewBox="0 0 50 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="4" width="50" height="2" rx="1" fill="#F9A8D4"/>
        </svg>
      </div>
      <p className="text-base max-w-xl text-neutral-500 mx-auto mb-8">
        Our aim is to make it as easy as possible for you to find healthy, organic, and safe pet-related products available online to help you treat a beloved furry friend. Sincerely, we think you'll end up falling in love yourself as both they thrive and enjoy a fun time together.
      </p>
      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-4">
        Shop our natural solutions for a healthy pet
      </h3>
    </section>
  );
};

export default NewLetter;

