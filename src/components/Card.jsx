import React from "react";
import headImg from "../assets/head-img.avif";

export default function Card() {
  return (
    <div>
      <div className="card flex flex-col-reverse md:flex-row">
        <div className="right w-full md:relative mx-[0.3rem]">
          <img src={headImg} className="w-screen" alt="" />
          <div className="left bg-white md:p-11 p-3 md:w-[36%]  md: h-fit absolute md:top-12 md:left-14">
            <div className="bg-[#ffb900] w-fit px-3 py-[0.1rem] mb-2 font-semibold">
              New
            </div>
            <h1 className="text-3xl md:font-medium">Meet Surface Pro</h1>
            <p className="my-5 box-border md:w-[98.3333%]">
              This laptop's unrivalled flexibility and AI features like Recall
              and Cocreator, enable you to do more than you ever imagined.
            </p>
            <button className="bg-[#0067B8] hover:bg-blue-700 text-white font-bold p-2 md:px-4 rounded-sm focus:outline-dashed outline-blue-600 active:outline-dashed">
              <a href="/"> Learn more</a>
            </button>
            <hr className="md:hidden my-7" />
          </div>
        </div>
      </div>
    </div>
  );
}
