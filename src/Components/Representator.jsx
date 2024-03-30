import React from "react";
import { FormattedMessage } from "react-intl";

const Representator = () => {
  return (
    <>
      <div
        className="bg-white fixed top-52 left-10 right-10 p-5 rounded-lg md:top-64 md:left-32 md:right-32 lg:top-40 lg:left-96 lg:right-96"
        style={{ zIndex: 1100 }}
      >
        <div className="flex flex-col ">
          <h1 className="text-2xl text-textActive md:text-center">
            <FormattedMessage id="Representative Data"/>
          </h1>
          <div className="flex flex-row justify-between items-center mt-5 gap-x-3">
            <span className="text-orange-600 font-semibold">Name:</span>
            <span className="text-gray-600 font-medium">Ajmal Khan</span>
          </div>
          <div className="flex flex-row justify-between items-center mt-2 gap-x-3">
            <span className="text-orange-600 font-semibold">Email:</span>
            <span className="text-gray-600 font-medium">
              ajmal.khan@gmail.com
            </span>
          </div>
          <div className="flex flex-row justify-between items-center mt-2 gap-x-3">
            <span className="text-orange-600 font-semibold">SkypeID:</span>
            <span className="text-gray-600 font-medium">ajmal.khan</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Representator;
