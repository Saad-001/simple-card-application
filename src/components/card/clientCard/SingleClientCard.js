import React from "react";

const SingleClientCard = (props) => {
  const { Icon, title, description } = props;
  return (
    <div className="p-0 sm:p-5">
      <a
        href="#noWhere"
        className="p-2 inline-block border border-black rounded-lg"
      >
        <Icon className="text-xl" />
      </a>
      <h1 className="text-lg lg:text-xl font-bold mt:3 sm:mt-5 tracking-wide">
        {title}
      </h1>
      <p className="text-gray-700 text-base lg:text-lg mt-3 sm:mt-5 xl:mt-7">
        {description}
      </p>
    </div>
  );
};

export default SingleClientCard;
