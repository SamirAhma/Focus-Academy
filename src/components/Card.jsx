import React from "react";

const Card = ({ result }) => {
  return (
    <>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 p-9">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={result.picture.medium}
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {result.name.last} {result.name.first}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {result.email}
          </span>
          <div className="flex mt-4 space-x-3 md:mt-6"></div>
        </div>
      </div>
    </>
  );
};

export default Card;
