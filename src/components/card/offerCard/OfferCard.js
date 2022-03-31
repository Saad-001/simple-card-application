import React from "react";
import { BsArrowRightShort, BsCheckCircle } from "react-icons/bs";
import Button from "../../button/Button";

const OfferCard = () => {
  return (
    <div className="p-5 sm:p-10 lg:p-16 bg-[#fcc419] mt-16 md:mt-24 sm:max-w-xl mx-4 lg:max-w-2xl sm:mx-auto rounded-lg">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide">
        Get this today for free.
      </h1>
      <p className="text-base md:text-lg mt-3 sm:mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in
        rutrum neque, at porttitor massa.
      </p>
      <div className="flex flex-col space-y-2 mt-5 mb-5">
        <div className="flex items-center space-x-3 text-lg sm:text-xl">
          <BsCheckCircle />
          <p>First item</p>
        </div>
        <div className="flex items-center space-x-3 text-lg sm:text-xl">
          <BsCheckCircle />
          <p>Second item</p>
        </div>
        <div className="flex items-center space-x-3 text-lg sm:text-xl">
          <BsCheckCircle />
          <p>Third item</p>
        </div>
      </div>
      <Button text="Get Access $0" Icon={BsArrowRightShort} />
    </div>
  );
};

export default OfferCard;
