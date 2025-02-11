import React from "react";
import MenuIcons from "./navbarcomponents/MenuIcons";
import User from "./navbarcomponents/User";
import SearchBar from "./navbarcomponents/SearchBar";
import Separator from "./navbarcomponents/Separator";

function Navbar() {
  return (
    <div className="bg-[#f3f2f7] flex items-center justify-between pt-[41px] px-[42px] space-x-4">
      <SearchBar />
      <MenuIcons />
      <Separator />
      <User />
    </div>
  );
}

export default Navbar;
