import React from "react";

const CourseCard = (props) => {
  return (
    <div className="max-w-sm w-[350px] bg-white border border-gray-300  shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="w-full h-[200px]" src={props.image} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.heading}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
        <button className="flex justify-center text-center w-full items-center px-3 py-2 text-sm font-medium  text-white bg-[#428bca] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          See more...
        </button>

        <div class="w-full bg-gray-200 rounded-full mt-4 h-2 dark:bg-gray-700">
        </div>
        <p className="text-sm text-[#428bca] w-full text-right font-bold dark:text-gray-400">
            0% Complete
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
