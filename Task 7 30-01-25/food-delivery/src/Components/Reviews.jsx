// import React from "react";

// const ReviewCard = () => {
//   return (
//     <div className="relative w-[458px] h-[271px] bg-[#FDFDFD] shadow-md rounded-lg p-6 flex flex-col gap-5">
//       {/* Profile Section */}
//       <div className="flex items-center gap-4">
//         <img
//           src="/../../public/Images/placeholder.png"
//           alt="User Avatar"
//           className="w-[54px] h-[54px] rounded-full"
//         />
//         <div>
//           <h3 className="text-[21px] font-medium text-[#464255]">Jons Sena</h3>
//           <p className="text-[15px] text-[#A3A3A3]">2 days ago</p>
//         </div>
//       </div>

//       {/* Review Text */}
//       <p className="text-[14px] text-[#464255] leading-[23px]">
//         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//         Lorem Ipsum has been the industry's standard dummy text.
//       </p>

//       {/* Rating Section */}
//       <div className="flex items-center gap-2">
//         {[...Array(4)].map((_, index) => (
//           <span key={index} className="text-[#F7C604] text-lg">★</span>
//         ))}
//         <span className="text-[#B9BBBD] text-lg">★</span>
//         <span className="text-[#464255] text-[18px] font-medium">4.5</span>
//       </div>

//       {/* Food Image */}
//       <div className="absolute w-[223px] h-[223px] top-[30px] right-[-67px] shadow-lg rounded-full overflow-hidden">
//         <img
//           src="/../../public/Images/Dish1.png"
//           alt="Food"
//           className="w-full h-full object-cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default ReviewCard;


import React from "react";

const ReviewCard = () => {
  return (
    <div className="relative w-[458px] h-[271px] bg-[#FDFDFD] shadow-md rounded-lg p-6 flex flex-col gap-5 ">
      {/* Top Section - Profile and Review Text */}
      <div className="flex flex-col gap-2">
        {/* Profile Section */}
        <div className="flex items-center gap-4">
          <img
            src="/../../public/Images/placeholder.png"
            alt="User Avatar"
            className="w-[54px] h-[54px] rounded-full"
          />
          <div>
            <h3 className="text-[21px] font-medium text-[#464255]">Jons Sena</h3>
            <p className="text-[15px] text-[#A3A3A3]">2 days ago</p>
          </div>
        </div>

        {/* Review Text */}
        <div className="pr-[100px]">
          <p className="w-[248px] text-[14px] text-[#464255] leading-[20px] text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>
      </div>

      {/* Bottom Section - Rating */}
      <div className="flex items-center gap-2">
        {[...Array(4)].map((_, index) => (
          <span key={index} className="text-[#F7C604] text-lg">★</span>
        ))}
        <span className="text-[#B9BBBD] text-lg">★</span>
        <span className="text-[#464255] text-[18px] font-medium text-Barlow">4.5</span>
      </div>

      {/* Food Image */}
      <div className="absolute w-[223px] h-[223px] top-[30px] right-[-50px] shadow-lg rounded-full overflow-hidden">
        <img
          src="/../../public/Images/Dish1.png"
          alt="Food"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ReviewCard;
