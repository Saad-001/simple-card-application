import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#e6e5e1] mt-6 lg:mt-24 p-5 flex justify-between">
      <p className="text-gray-400 text-sm sm:text-base">
        Company name © Copyright {new Date().getFullYear()}
      </p>
      <div className="text-gray-400 space-x-2 text-sm sm:text-base">
        <a
          href="#twitter"
          className="underline hover:no-underline underline-offset-0"
        >
          Twitter
        </a>
        <a
          href="#instagram"
          className="underline hover:no-underline underline-offset-0"
        >
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Footer;
