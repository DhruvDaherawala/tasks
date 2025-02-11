import { ChevronDown } from "lucide-react";
import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between items-center rounded-lg p-4 w-full  mt-4">
      <div>
        <h1 className="text-2xl font-semibold text-gray-700">Dashboard</h1>
        <p className="text-gray-400 text-sm pt-1">Hi, Samantha. Welcome back to Sedap Admin!</p>
      </div>
      <div className="flex items-center bg-white shadow-md rounded-2xl p-3">
        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
          <FaCalendarAlt className="text-blue-500 text-xl" />
        </div>
        <div className="ml-2 text-gray-600">
          <p className="text-sm font-medium">Filter Periode</p>
          <p className="text-xs">17 April 2020 - 21 May 2020</p>
        </div>
        <ChevronDown />
      </div>
    </div>
  );
};

export default Header;
