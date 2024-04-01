import React from "react";
import { FormattedMessage } from "react-intl";

const AddRevenue = () => {
  return (
    <>
      <div
        className="bg-white absolute top-40 left-2 right-2 md:left-44 md:right-44 lg:top-20 lg:right-96 lg:left-96 rounded-lg overflow-auto"
        style={{ zIndex: 1100 }}
      >
        <div className="flex flex-col-reverse md:flex-row md:justify-between bg-green-700 p-10 rounded-bl-lg rounded-br-lg md:items-center gap-y-2">
          <div className="flex flex-col  gap-y-4">
            <span className="text-white font-medium">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id,
              voluptates.
            </span>
            <button className="bg-gray-200 text-gray-800 font-medium px-16 py-3 rounded-lg shadow-inner shadow-gray-300 mr-auto">
              <FormattedMessage id="Submit"/>
            </button>
          </div>
          <img src="/src/assets/money.png" alt="" className="w-40" />
        </div>
        <div className="bg-white flex flex-col mx-7 py-8 gap-y-2">
          <div className="flex flex-col">
            <label
              htmlFor="revenueDescription"
              className="font-semibold text-gray-700"
            >
              <FormattedMessage id="Revenue Description"/>
            </label>
            <textarea
              name="revenueDescription"
              id="revenueDescription"
              cols="20"
              rows="3"
              className="rounded-lg focus:outline-none focus:border focus:border-textActive focus:ring-0"
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label htmlFor="amount" className="font-semibold text-gray-700">
              <FormattedMessage id="Add Amount"/>
            </label>
            <input
              type="number"
              name="amount"
              id="amount"
              className="rounded-lg focus:outline-none focus:border focus:border-textActive focus:ring-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddRevenue;
