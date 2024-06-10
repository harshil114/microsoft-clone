import React from "react";
import searchIcon from "../assets/search.svg";
import msLogo from "../assets/logo.png";
import cartLogo from "../assets/cart.svg";
import accLogo from "../assets/acc.svg";

export default function Navbar() {
  return (
    <div>
      <div className="navbar flex justify-between items-center px-4 ">
        <div className="flex justify-center items-center md:order-2">
          <div className="hamburger inline-block cursor-pointer md:hidden">
            <div className="line h-0.5 w-6 my-1 bg-black"></div>
            <div className="line h-0.5 w-6 my-1 bg-black"></div>
            <div className="line h-0.5 w-6 my-1 bg-black"></div>
          </div>
          <div className="search md:hidden mx-6">
            <img src={searchIcon} alt="" />
          </div>
        </div>

        <div className="logo text-center flex md:order-1">
          <div className="py-4 flex items-center justify-center">
            <a href="/">
              <img className="w-[50%] cursor-pointer" src={msLogo} alt="" />
            </a>
          </div>
          <div className="nav-items font-normal text-sm absolute w-fit md:static md:w-auto bg-gray-200 md:bg-white inset-0 md:flex md:items-center md:space-x-4 -translate-x-96 md:translate-x-0">
            <div className="nitem hover:underline underline-offset-8 cursor-pointer">
              Microsoft 365
            </div>
            <div className="nitem hover:underline underline-offset-8 cursor-pointer">
              Teams
            </div>
            <div className="nitem hover:underline underline-offset-8 cursor-pointer">
              Copilot
            </div>
            <div className="nitem hover:underline underline-offset-8 cursor-pointer">
              Windows
            </div>
            <div className="nitem hover:underline underline-offset-8 cursor-pointer">
              Surface
            </div>
            <div className="nitem hover:underline underline-offset-8 cursor-pointer">
              Xbox
            </div>
            <div className="nitem hover:underline underline-offset-8 cursor-pointer">
              Support
            </div>
          </div>
        </div>
        <div className="cart text-center md:order-3 flex">
          <div className="search hidden md:block mr-3 md:mt-1 text-sm hover:underline underline-offset-8 cursor-pointer">
            All microsoft
          </div>
          <img className=" mr-3" src={searchIcon} alt="" />
          <div className="flex">
            <img className=" mr-3" src={cartLogo} alt="" />
            <img className=" mr-3" src={accLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
