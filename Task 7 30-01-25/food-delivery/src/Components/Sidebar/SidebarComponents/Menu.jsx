import { Home, List, Users, BarChart, Star, Calendar, MessageSquare, Wallet} from "lucide-react";
import React from "react";

function Menu() {
  return (
    <nav className="flex flex-col gap-6">
      <NavItem icon={<Home size={24} />} label="Dashboard" />
      <NavItem icon={<List size={24} />} label="Order List" />
      <NavItem icon={<List size={24} />} label="Order Detail" />
      <NavItem icon={<Users size={24} />} label="Customers" />
      <NavItem icon={<BarChart size={24} />} label="Analytics" />
      <NavItem icon={<Star size={24} />} label="Reviews" />
      <NavItem icon={<Star size={24} />} label="Foods" />
      <NavItem icon={<Star size={24} />} label="Foods Detail" />
      <NavItem icon={<Star size={24} />} label="Customer Detail" />
      <NavItem icon={<Calendar size={24} />} label="Calendar" />
      <NavItem icon={<MessageSquare size={24} />} label="Chat" />
      <NavItem icon={<Wallet size={24} />} label="Wallet" />
    </nav>
  );
}

const NavItem = ({ icon, label }) => {
    return (
      <div className="flex items-center gap-4 px-5  cursor-pointer top-[204px] left-[-4px] w-[303px] h-[54.03px] hover:bg-green-200 rounded-2xl hover:text-[#00B074]">
        {icon}
        <span className="text-lg">{label}</span>
      </div>
    );
  };

export default Menu;
