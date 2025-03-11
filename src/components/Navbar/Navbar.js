import React from "react";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center px-6 py-4  border-b-2 mt-5">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Exclusive</h1>
      </div>

      <div>
        <ul className="flex gap-x-6 text-black">
          <li className="cursor-pointer hover:text-black transition">Home</li>
          <li className="cursor-pointer hover:text-black transition">About</li>
          <li className="cursor-pointer hover:text-black transition">
            Contact
          </li>
          <li className="cursor-pointer hover:text-black transition">
            Sign Up
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex gap-6 border rounded-sm bg-gray-100">
          <input type="text" placeholder="What are you looking for? " name="" id="" className="bg-gray-100 outline-none text-xs px-3"/>
          <img
            src={assets.search_icon}
            alt="Search"
            className="w-7 h-7 cursor-pointer p-1"
          />
        </div>
        <div>
          <img
            src={assets.wishlist_icon}
            alt="Wishlist"
            className="w-7 h-7 cursor-pointer"
          />
        </div>
        <div>
            <img
              src={assets.cart_icon}
              alt="Cart"
              className="w-6 h-6 cursor-pointer"
            />
          </div>
      </div>
    </div>
  );
};

export default Navbar;
