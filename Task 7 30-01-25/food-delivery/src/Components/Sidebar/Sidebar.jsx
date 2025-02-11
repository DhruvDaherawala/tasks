// import React from "react";
// import MainLogo from "./SidebarComponents/MainLogo";

// const Sidebar = () => {
//   return (
//     <div className="w-[349px] bg-white p-4 shadow-md h-screen">
//       <MainLogo />
//       <ul>
//         <li className="py-2 cursor-pointer hover:bg-gray-200">Dashboard</li>
//         <li className="py-2 cursor-pointer hover:bg-gray-200">Order List</li>
//         <li className="py-2 cursor-pointer hover:bg-gray-200">Analytics</li>
//         <li className="py-2 cursor-pointer hover:bg-gray-200">Reviews</li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

import MainLogo from "./SidebarComponents/MainLogo";
import Menu from "./SidebarComponents/Menu";
import SidebarBanner from "./SidebarComponents/SidebarBanner";
import SidebarFooter from "./SidebarComponents/SidebarFooter";

const Sidebar = () => {
  return (
    <aside className="w-[345px] p-5 h-full bg-white shadow-full flex-col ">
      <MainLogo />
      <Menu />
      <SidebarBanner />
      <SidebarFooter />
    </aside>
  );
};

export default Sidebar;
