import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full mt-16 bg-white text-neutral-700 text-xs">
      <div className="max-w-6xl mx-auto px-4 pt-6 pb-2">
        <div>
          <div className="mb-2 font-semibold text-[13px]">Latest info for you</div>
          <p className="font-medium">
            Happy Pets will donate a percentage of its total revenue to the SAP Society for Animal Protection in Switzerland.
          </p>
        </div>
      </div>
   
      <div className="bg-[#e0b6ae] w-full">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-20 py-6">
          <img src="/public/images/hero/product/icons/natureIcon.png" alt="AGILA" className="h-20 w-20" />
          <img src="/public/images/hero/product/icons/vitl.png" alt="Getty Images" className="h-10 w-25" />
          <img src="/public/images/hero/product/icons/bird.png" alt="Paracetam" className="h-20 w-20" />
          <img src="/public/images/hero/product/icons/al.png" alt="JUMBO" className="h-20 w-25" />
          <img src="/public/images/hero/product/icons/shell.png" alt="Animalia" className="h-20 w-20" />
          <img src="/public/images/hero/product/icons/paw.png" alt="Blue Win" className="h-20 w-20" />
        </div>
      </div>
   
      <div className="max-w-6xl mx-auto pt-8 pb-2 text-center">
        <div className="font-semibold mb-1">Disclaimer</div>
        <p className="mb-2 text-[10px] text-neutral-500">
          All information given on this website has been carefully checked, but is provided without warranty. 
          Happy Pets is not responsible for the content of other websites linked to its own pages. 
          Information about which data is stored and for what purpose can be found in our privacy policy.
        </p>
      </div>
    
      <div className="bg-[#90a18a] w-full py-8 border-t border-neutral-300">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between text-xs text-white gap-6 px-4">
        
          <div className="min-w-[110px]">
            <div className="mb-1 font-semibold">Company</div>
            <ul>
              <li>About Us</li>
              <li>Team</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
    
          <div className="min-w-[110px]">
            <div className="mb-1 font-semibold">Service</div>
            <ul>
              <li>FAQs</li>
              <li>Pricing</li>
              <li>Affiliates</li>
              <li>Account</li>
            </ul>
          </div>
   
          <div className="min-w-[110px]">
            <div className="mb-1 font-semibold">Legal</div>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Imprint</li>
            </ul>
          </div>
       
          <div className="min-w-[110px]">
            <div className="mb-1 font-semibold">Category of services</div>
            <ul>
              <li>Pet Insurance</li>
              <li>Accessories</li>
              <li>Foods</li>
              <li>Training</li>
            </ul>
          </div>
       
          <div className="flex flex-col min-w-[200px]">

            <span className="mb-2 font-semibold">Subscribe</span>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded bg-white text-neutral-900 px-2 py-1 text-xs outline-none"
              />
              <button
                type="submit"
                className="bg-green-800 text-white px-3 py-1 rounded text-xs font-medium hover:bg-green-900 transition"
              >
                Subscribe
              </button>
            </form>
            <span className="mt-1 text-[10px] text-white/80">
              Receive updates & offers
            </span>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
