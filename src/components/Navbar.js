import React, { useState } from "react";
import logo from "../images/logo.svg";
import iconClose from "../images/icon-menu-close.svg";
import iconOpen from "../images/icon-menu.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="font-inter">
      <div className="hidden lg:flex justify-between items-center">
        <a href="/">
          <img src={logo} alt="logo" width={50} height={50} />
        </a>
        <div className="flex gap-4 justify-center items-center">
          <a href="/" className="text-lg text-Very-Dark-Blue hover:text-Soft-Red">
            Home
          </a>
          <a href="#new" className="text-lg text-Very-Dark-Blue hover:text-Soft-Red">
            New
          </a>
          <a href="#popular" className="text-lg text-very-Dark-Blue hover:text-Soft-Red">
            Popular
          </a>
          <a href="#trending" className="text-lg text-Very-Dark-Blue hover:text-Soft-Red">
            Trending
          </a>
          <a href="#categories" className="text-lg text-Very-Dark-Blue hover:text-Soft-Red">
            Categories
          </a>
        </div>
      </div>

      {/* mobile view */}

      <div className="lg:hidden flex items-center justify-between">
      <div>
          <img src={logo} alt="logo" width={40} height={40} />
        </div>
        <div>
          <img src={iconOpen} alt="" width={30} height={30} onClick={() => setIsOpen(true)} />
        </div>

        
        {isOpen && (
          <div className="fixed h-full w-screen lg:hidden backdrop-blur-sm bg-black/50 top-0 left-0" onClick={() => setIsOpen(false)}>
            <div className="bg-white text-black absolute right-0 top-0 h-screen w-64 p-8 gap-8 z-50 flex flex-col slide-in-right">
              <img src={iconClose} alt="" className="cursor-pointer self-end mb-10" width={30} height={30} onClick={() => setIsOpen(false)}/>
              <a href="/" className="text-Very-Dark-Blue">
            Home
          </a>
          <a href="#new" className="text-Very-Dark-Blue">
            New
          </a>
          <a href="#popular" className="text-Very-Dark-Blue">
            Popular
          </a>
          <a href="#trending" className="text-Very-Dark-Blue">
            Trending
          </a>
          <a href="#categories" className="text-Very-Dark-Blue">
            Categories
          </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
