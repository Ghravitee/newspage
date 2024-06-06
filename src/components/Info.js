import React from "react";
import retroPc from "../images/image-retro-pcs.jpg";
import topLaptops from "../images/image-top-laptops.jpg";
import gamingGrowth from "../images//image-gaming-growth.jpg";

const Info = () => {
  return (
    <div className="mt-12 xl:mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      <div className="grid grid-cols-[100px_1fr]  gap-5">
        <picture>
          <img src={retroPc} alt="" className="w-full"/>
        </picture>

        <div className="flex flex-col gap-2 self-baseline">
          <h3 className="text-Soft-Red text-[1.6rem] font-bold">01</h3>
          <h4 className="text-Very-Dark-Blue text-xl font-bold xl:text-lg hover:text-Soft-Red hover:cursor-pointer">
            Reviving Retro PCs
          </h4>
          <p className="text-Dark-Grayish-Blue leading-6 xl:text-[.9rem]">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className="grid grid-cols-[100px_1fr] gap-5">
        <picture>
          <img src={topLaptops} alt="" className="w-full"/>
        </picture>

        <div className="flex flex-col gap-2">
          <h3 className="text-Soft-Red text-[1.6rem] font-bold">02</h3>
          <h4 className="text-Very-Dark-Blue text-xl font-bold xl:text-lg hover:text-Soft-Red hover:cursor-pointer">
          Top 10 Laptops of 2022
          </h4>
          <p className="text-Dark-Grayish-Blue leading-6 xl:text-[.9rem]">
          Our best picks for various needs and budgets.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-[100px_1fr] gap-5">
        <picture>
          <img src={gamingGrowth} alt="" className="w-full"/>
        </picture>

        <div className="flex flex-col gap-2">
          <h3 className="text-Soft-Red text-[1.6rem] font-bold">03</h3>
          <h4 className="text-Very-Dark-Blue text-xl font-bold xl:text-lg hover:text-Soft-Red hover:cursor-pointer">
          The Growth of Gaming
          </h4>
          <p className="text-Dark-Grayish-Blue leading-6 xl:text-[.9rem]">
          How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
