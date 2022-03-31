import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import Button from "../button/Button";

const HeroSection = () => {
  return (
    <div className="mt-20 lg:mt-24">
      <div className="lg:max-w-xl mx-4 lg:mx-auto text-center text-[#07063b] md:space-y-3 xl:space-y-5">
        <h1 className="text-3xl md:text-4xl xl:text-[3em] font-bold tracking-wider">
          Time to Supercharge
        </h1>
        <h1 className="text-3xl md:text-4xl xl:text-[3em] font-bold tracking-wider">
          and be Productive with
        </h1>
        <h1 className="text-3xl md:text-4xl xl:text-[3em] font-bold tracking-wider">
          {" "}
          your time.
        </h1>
        <p className="text-gray-500 text-base md:text-lg font-normal md:font-medium mt-5 tracking-normal">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima,
          aspernatur? Velit, eveniet id quo delectus cum, excepturi ipsa quidem
          at ratione commodi laboriosam ullam suscipit dolore amet reiciendis
          minima veniam.
        </p>
      </div>
      <div className="flex justify-center space-x-4 mt-5">
        <Button text="Learn More" Icon={AiOutlinePlus} />
        <Button text="Get Access" Icon={BsArrowRightShort} />
      </div>
    </div>
  );
};

export default HeroSection;
