import React from 'react'
import ms365 from "../assets/ms-365.svg";
import Xbox from "../assets/Xbox.svg";
import surfaceDevice from "../assets/surface-device.svg";



export default function List() {
  return (
    <div>
        <div className="list relative md:static md:mt-10">
            <ul className="flex flex-wrap justify-center text-center absolute top-72 space-x-5 space-y-3 md:static ">
                <li className=" space-y-3 flex flex-col justify-center items-center md:mt-3 cursor-pointer text-[#0067b8] underline font-medium ">
                    <img className="w-10"  src={ms365} alt=""/>
                   <a href="/" className="focus:outline-dashed outline-[#0067b8]">Choose your Microsoft 365</a>
                </li>
                <li className="space-y-3 flex flex-col justify-center items-center md:m-7 cursor-pointer text-[#0067b8] underline font-medium focus:outline-dashed outline-[#0067b8]">
                    <img className="w-10"  src={Xbox}alt=""/>
                    <a href="/" className="focus:outline-dashed outline-[#0067b8]">Shop Xbox</a>
                </li>
                <li className="space-y-3 flex flex-col justify-center items-center md:m-7 cursor-pointer text-[#0067b8] underline font-medium focus:outline-dashed outline-[#0067b8]">
                    <img className="w-10"  src={ms365}alt=""/>
                    <a href="/" className="focus:outline-dashed outline-[#0067b8]">Get Windows 11</a>
                </li>

                <li className="space-y-3 flex flex-col justify-center items-center md:m-7 cursor-pointer text-[#0067b8] underline font-medium focus:outline-dashed outline-[#0067b8]">
                    <img className="w-10" src={surfaceDevice} alt=""/>
                    <a href="/" className="focus:outline-dashed outline-[#0067b8]">Explore Surface devices</a>
                </li>
            </ul>
        </div>
      
    </div>
  )
}