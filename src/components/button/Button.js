import React from "react";

const Button = ({ text, Icon }) => {
  // console.log(text);
  // let exactIcon;
  // if (text === "Learn More") {
  //   exactIcon = <AiOutlinePlus />;
  // } else if (text === "Get Access") {
  //   exactIcon = <BsArrowRightShort />;
  // } else {
  //   exactIcon = null;
  // }
  return (
    <button className="text-base md:text-lg font-normal md:font-medium text-white bg-[#07063b] px-5 py-2 rounded flex justify-center items-center space-x-2 hover:scale-110 transition duration-300 hover:bg-[#4a3f08] ">
      <Icon className="text-xl font-bold" />
      <span>{text}</span>
    </button>
  );
};

export default Button;
