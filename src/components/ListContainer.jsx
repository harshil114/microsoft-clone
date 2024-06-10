import React from "react";
import surfaceLaptop from "../assets/surface-laptop.avif";
import ms365LifeStyle from "../assets/microsoft-365-lifestyle.avif";
import gamePass from "../assets/game-pass.avif";
import xBoxSeries from "../assets/xbox-series-X.webp";
import rightArrow from "../assets/right-arrow.png";

export default function ListContainer() {
  return (
    <div className="relative">
      <div className=" absolute top-[33.25rem] md:top-36 mx-auto h-screen">
        <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-screen space-y-10 md:space-y-0">
          <div className="item mx-2 shadow-xl">
            <div>
              <img src={surfaceLaptop} className="w-screen mx-auto" alt="" />
            </div>
            <div className="px-5 pt-12">
                <div className="bg-[#ffb900] w-fit font-medium px-3 py-1">New</div>
              <div className="text-2xl font-medium mb-2">Surface Laptop, Copilot+ PC</div>
              <div>
              Unlock next-gen AI experiences like Recall—so you can search your PC’s past to find the content you need.
              </div>
              <div className="my-6">
                <button className="btn-primary">Learn more</button>
              </div>
            </div>
          </div>

          <div className="item mx-2 shadow-xl">
            <div>
              <img src={ms365LifeStyle} className="w-screen mx-auto" alt="" />
            </div>
            <div className="px-5 pt-12">
              <div className="text-2xl font-medium mb-2">Maximise the everyday with Microsoft 365</div>
              <div>
                Get online protection, secure cloud storage and innovative apps
                designed to fit your needs – all in one plan.
              </div>
              <div className="my-6">
                <button className="btn-primary">For one person</button>
                <span className="ml-10 text-[#0067b8] cursor-pointer relative md:flex md:flex-col md:ml-0 md:mt-2 font-semibold">
                  For up to six people
                  <img src={rightArrow} alt="dfd" className="absolute top-[0.4rem] left-[9.3rem]" />
                </span>
                
              </div>
            </div>
          </div>

          <div className="item mx-2 shadow-xl">
            <div>
              <img src={gamePass} className="w-screen mx-auto" alt="" />
            </div>
            <div className="px-5 pt-12">
              <div className="text-2xl font-medium mb-2">Xbox Game Pass Ultimate</div>
              <div>
                Play new games on day one. Plus, enjoy hundreds of high-quality
                games with friends on console and PC.
              </div>
              <div className="my-6 md:mt-[4.9rem]">
                <button className="btn-primary">Join now</button>
              </div>
            </div>
          </div>

          <div className="item mx-2 shadow-xl">
            <div>
              <img src={xBoxSeries} className="w-screen mx-auto" alt="" />
            </div>
            <div className="px-5 pt-12">
              <div className="text-2xl font-medium mb-2">Xbox Series X</div>
              <div>                
                The fastest, most powerful Xbox ever.
              </div>
              <div className="my-6 md:mt-[7.8rem]">
                <button className="btn-primary">Shop Xbox </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
