import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
 
  const images = [
    "/images/pic1.jpg",
    "/images/pic2.png",
    "/images/pic3.png",
    "/images/pic4.png",
    "/images/pic5.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className="relative w-full min-h-screen md:min-h-screen bg-pink-100 flex items-center justify-center overflow-hidden">
   
      <Slider {...settings} className="w-full h-screen md:h-screen">
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Adorable pet ${index + 1}`}
              className="w-full h-screen md:h-screen object-cover object-center brightness-[.89]"
            />
          </div>
        ))}
      </Slider>

      <div className="absolute inset-0 bg-pink-100 opacity-0"></div>


      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-5 md:px-16">
        <div className="max-w-3xl">
          <h1 className="text-white font-bold text-2xl md:text-4xl mb-2 drop-shadow-lg">
            Your One-Stop-Shop for Organic<br className="hidden md:block" /> Pet Products
          </h1>
          <p className="text-pink-100 mb-6 text-base md:text-lg drop-shadow-md">
            Putting Your pet’s Wellbeing First
          </p>
          <a
            href="#"
            className="inline-block bg-pink-300 hover:bg-pink-400 text-white font-semibold py-2 px-6 rounded shadow-md transition-colors duration-150 text-base md:text-lg"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
