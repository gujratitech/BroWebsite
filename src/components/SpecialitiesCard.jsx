import React from "react";

const SpecialitiesCard = (props) => {
  return (
    <div className="max-w-sm p-6 bg-whit hover:shadow-2xl bg-white  text-center flex flex-col gap-4 shadow-xl transition-all cursor-pointer duration-300 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
      <img
        src={props.image}
        className="mx-auto w-16 text-[#0274be] fill-[#0274be]"
        alt="icon"
      />
      <div>
        <a href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {props.heading}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default SpecialitiesCard;
