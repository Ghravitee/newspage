import React from "react";
import mobileImage from "../images/image-web-3-mobile.jpg";
import desktopImage from "../images/image-web-3-desktop.jpg";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-[auto, 100px] gap-x-4 font-inter">
      <picture className="w-full lg:col-start-1 lg:col-end-3">
        <img src={mobileImage} alt="" className="lg:hidden w-full" />
        <img src={desktopImage} alt="" className="hidden lg:block" />
      </picture>

      <div className="my-5 lg:mb-0 lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3">
        <h1 className="text-Very-Dark-Blue text-[2.5rem] font-extrabold lg:text-[3.2rem]">
          The Bright Future of Web 3.0?
        </h1>
      </div>

      <div className="mb-10 lg:mb-0 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:mt-8">
        <p className="text-Dark-Grayish-Blue mb-5 text-[.95rem] lg:text-[.93rem] lg:mb-8 lg:leading-6">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <a
          href="/"
          className="hover:bg-Very-Dark-Blue hover:text-white flex justify-center items-center w-[40%] lg:w-1/2 text-xs bg-Soft-Red text-Very-Dark-Blue px-6 py-2 lg:py-3 uppercase font-bold tracking-widest"
        >
          Read more
        </a>
      </div>

      <div className="bg-Very-Dark-Blue p-6 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3">
        <h2 className="text-Soft-Orange text-[1.4rem] lg:text-[2rem] font-bold mb-4">
          New
        </h2>
        <div className="">
          <h3 className="text-white text-lg font-bold hover:text-Soft-Orange hover:cursor-pointer">
            Hydrogen VS Electric Cars
          </h3>
          <p className="text-Grayish-Blue text-sm font-normal leading-6">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </div>

        <hr className="bg-Grayish-Blue/75 my-6 lg:my-8" />

        <div>
          <h3 className="text-white text-lg font-bold hover:text-Soft-Orange hover:cursor-pointer">
            The Downsides of AI Artistry
          </h3>
          <p className="text-Grayish-Blue text-sm font-normal leading-6">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>

        <hr className="bg-Grayish-Blue/75 my-6 lg:my-8" />

        <div>
          <h3 className="text-white text-lg font-bold hover:text-Soft-Orange hover:cursor-pointer">
            Is VC Funding Drying Up?
          </h3>
          <p className="text-Grayish-Blue text-sm font-normal leading-6">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
