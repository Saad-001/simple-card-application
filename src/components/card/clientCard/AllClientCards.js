import React from "react";
import clientData from "../../../fakeData/clientData";
import SingleClientCard from "./SingleClientCard";

const AllClientCards = () => {
  return (
    <div>
      <h1 className="text-center text-3xl sm:text-4xl font-bold mt-8 lg:mt-10 tracking-wide">
        Who is this for?
      </h1>
      <div className="flex flex-col md:flex-row mx-4 justify-center items-center lg:justify-between space-y-10 md:space-y-0 md:mx-16 lg:mx-20 xl:mx-36 mt-16 lg:mt-24">
        {clientData.map((data, index) => (
          <SingleClientCard
            key={index}
            Icon={data.icon}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
};

export default AllClientCards;
