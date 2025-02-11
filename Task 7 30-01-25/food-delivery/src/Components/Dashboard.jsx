import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header";
import Stats from "./Stats";
import Charts from "./Charts";
import Reviews from "./Reviews";
import Navbar from "./Navbar/Navbar";

const Dashboard = () => {
  return (
    <div className="bg-gray-100">
    <div className="flex h-screen ">
      <Sidebar/>
      <div className="flex flex-col p-6 ">
        <Navbar/>
        <Header />
        <Stats />
        <Charts /> 
       <Reviews />
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
