import React from "react";
import { CiSearch } from "react-icons/ci";
import { FormattedMessage } from "react-intl";

const SearchArea = () => {

  const placeholderMessage = <FormattedMessage id="Search By Order Id" />;


  return (
    <>
      <div className="flex  md:flex-row flex-col gap-y-3 justify-between items-center mt-5 lg:pr-5 px-4 lg:px-0 gap-x-2 md:mx-3 lg:mx-0">
        <div className="relative">
          <input
            type="text"
            name="searchByOrder"
            id="searchByOrder"
            className="lg:p-2 p-1 w-[250px]  rounded-md placeholder:text-gray-500 focus:outline-none focus:border focus:border-textActive focus:ring-0"
            placeholder="Search By Order Id"
          />
          <CiSearch className="lg:absolute lg:block top-3 right-2 text-gray-500 hidden" />
        </div>
        <select
          name="searchByDateRange"
          className="lg:p-2 p-1 w-[250px]  rounded-md placeholder:text-gray-500  text-[15px] bg-white focus:outline-none focus:border focus:border-textActive focus:ring-0"
          id="SearchByDateRange"
        >
          <option value="#"><FormattedMessage id="Filter By Date Range"/></option>
          <option value="Today"><FormattedMessage id="Today"/></option>
          <option value="Yesterday"><FormattedMessage id="Yesterday"/></option>
          <option value="Last 7 Days"><FormattedMessage id="Last 7 Days"/></option>
          <option value="Last 30 Days"><FormattedMessage id="Last 30 Days"/></option>
          <option value="Last 90 Days"><FormattedMessage id="Last 90 Days"/></option>
          <option value="Last 365 Days"><FormattedMessage id="Last 365 Days"/></option>
        </select>
      </div>
    </>
  );
};

export default SearchArea;
