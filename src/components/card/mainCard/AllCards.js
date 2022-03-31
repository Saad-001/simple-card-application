import React from "react";
import cardData from "../../../fakeData/cardData";
import SingleCard from "./SingleCard";

const AllCards = () => {
  return (
    <div className="mt-18 md:mt-36 lg:mt-44 mb-24 md:mb-32 mx-6 sm:mx-16 md:mx-32 lg:mx-52 xl:mx-64 2xl:mx-auto">
      {cardData.map((card, index) => (
        <SingleCard
          key={index}
          index={index}
          Icon={card.icon}
          title={card.title}
          description={card.description}
          image={card.image}
          colorCode={card.colorCode}
        />
      ))}
    </div>
  );
};

export default AllCards;
