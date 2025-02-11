  // import React from "react";

  // const Stats = () => {
  //   return (
  //     <div className="grid grid-cols-4 gap-4 my-4">
  //       <div className="bg-white p-4 shadow-md rounded-lg text-center">
  //         <h3 className="text-lg font-bold">Total Orders</h3>
  //         <p className="text-2xl">75</p>
  //       </div>
  //       <div className="bg-white p-4 shadow-md rounded-lg text-center">
  //         <h3 className="text-lg font-bold">Total Delivered</h3>
  //         <p className="text-2xl">357</p>
  //       </div>
  //       <div className="bg-white p-4 shadow-md rounded-lg text-center">
  //         <h3 className="text-lg font-bold">Total Canceled</h3>
  //         <p className="text-2xl">65</p>
  //       </div>
  //       <div className="bg-white p-4 shadow-md rounded-lg text-center">
  //         <h3 className="text-lg font-bold">Total Revenue</h3>
  //         <p className="text-2xl">$128</p>
  //       </div>
  //     </div>
  //   );
  // };

  // export default Stats;

  // import React from "react";

  // const statsData = [
  //   { title: "Total Orders", value: 75 },
  //   { title: "Total Delivered", value: 357 },
  //   { title: "Total Canceled", value: 65 },
  //   { title: "Total Revenue", value: "$128" },
  // ];
  
  // const Stats = () => {
  //   return (
  //     <div className="grid lg:grid-cols-4 gap-6 my-6">
  //       {statsData.map((stat, index) => (
  //         <div
  //           key={index}
  //           className="bg-white w-[337.24px] h-[172px] shadow-lg rounded-xl flex flex-col justify-center px-6"
  //         >
  //           <h3 className="text-base font-medium text-gray-500">{stat.title}</h3>
  //           <p className="text-4xl font-bold text-gray-800 mt-2">{stat.value}</p>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // };
  
  // export default Stats;
  
  import { ArrowUp } from "lucide-react";
import React from "react";

  const statsData = [
    { title: "Total Orders", value: 75, change: "4%", left: 402, images:"../../public/images/Icon_Order.png"},
    { title: "Total Delivered", value: 357, change: "6%", left: 778, images:"../../public/images/Group82.png"},
    { title: "Total Canceled", value: 65, change: "-2%", left: 1156, images:"../../public/images/Group118.png"},
    { title: "Total Revenue", value: "$128", change: "3%", left: 1532.76, images:"../../public/images/Group84.png"},
  ];
  
  const Stats = () => {
    return (
      <div className="flex gap-6">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow-lg justify-center rounded-2xl flex items-center px-6 py-4 "
            style={{
              width: "337.24px",
              height: "172px",
              left: `${stat.left}px`,
              top: "253px",
            }}
          >
            {/* Circular Icon Placeholder */}
            <div className="w-18 h-18 bg-green-100 rounded-full flex items-center justify-center">
              <img src={stat.images}/>
            </div>
  
            {/* Text Content */}
            <div className="ml-6">
              <p className="text-4xl font-bold text-gray-900">{stat.value}</p>
              <h3 className="text-lg font-medium text-gray-600">{stat.title}</h3>
  
              {/* Growth Indicator */}
              <div className="flex items-center mt-1 text-sm text-gray-400">
                <span className="text-green-500 rounded-full text-[#00A389] bg-[#2ED6A326] p-1"><ArrowUp size={13}/></span> {stat.change} (30 days)
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Stats;
  