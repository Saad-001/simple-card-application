import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const SingleCard = (props) => {
  const { index, Icon, title, description, image, colorCode } = props;
  return (
    <ScrollAnimation animateIn="animate__fadeIn" duration={5}>
      <div
        style={{ boxShadow: `15px 15px ${colorCode}` }}
        className="p-10 xl:max-w-2xl mx-auto border-4 border-black rounded-2xl mt-28 lg:mt-36 bg-white"
      >
        <Icon className="text-3xl" />
        <h1 className="text-2xl sm:text-3xl font-semibold mt-5">{title}</h1>
        <p className="mt-5 text-base sm:text-lg text-gray-700 font-normal">
          {description}
        </p>
        <div className="mt-7">
          <img
            src={image}
            className={`h-60 ${index === 1 ? "w-96" : "w-auto"}`}
            alt="img"
          />
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default SingleCard;
