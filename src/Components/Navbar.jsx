import React from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoIosCart } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";

const Navbar = ({ cartCount, onCartClick,}) => {

  return(
    <nav className="bg-white p-4 shadow flex justify-between items-center">
      <h1 className="text-2xl font-extrabold font-style: italic flex justify-evenly gap-2 text-emerald-700 ">Trendy Mart <span><FaBagShopping size={30}/></span></h1>
      <div className="flex items-center gap-2">
        <div className="flex items-center border rounded px-2 py-1 bg-gray-100">
          <FaMagnifyingGlass className="h-5 w-5 text-gray-600" />
          <input
            type="text"
            placeholder="Search..."
            className="ml-2 outline-none bg-transparent text-black"
          />
        </div>
        <button onClick={onCartClick} className="relative bg-red-500 text-white px-4 py-2 flex justify-evenly gap-2 rounded hover:scale-110 transition"><IoIosCart size={25} />
          Cart <span>({cartCount})</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;