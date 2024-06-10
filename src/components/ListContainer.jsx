import React from "react";
import surfaceLaptop from "../assets/surface-laptop.avif";
import ms365LifeStyle from "../assets/microsoft-365-lifestyle.avif";
import gamePass from "../assets/game-pass.avif";
import xBoxSeries from "../assets/xbox-series-X.webp";

export default function ListContainer() {
  return (
    // <div className="container w-full flex justify-center">
    //   <div className="bg-red-600 h-full container-main absolute top-[50rem] md:left-1 flex flex-col md:flex-row md:justify-center md:gap-10">
    //     <div className="content-container ">
    //       <div className="content">
    //         <div><img src="" alt="" /></div>
    //         <div>Surface Laptop, Copilot+ PC</div>
    //         <div>Unlock next-gen AI experiences like Recall—so you can search your PC’s past to find the content you need.</div>
    //         <div className="button"><button>Learn more</button></div>

    //     </div>

    //       <div className="content">Maximise the everyday with Microsoft 365</div>
    //       <div className="content">Xbox Game Pass Ultimate</div>
    //       <div className="content">Xbox Series X</div>
    //     </div>
    //   </div>
    // </div>

    <div className="relative">
      <div className=" absolute top-[33.25rem] mx-auto">
        <div className="content grid grid-cols-1 w-screen space-y-10">
          <div className="item mx-2">
            <div>
              <img src={surfaceLaptop} className="w-screen mx-auto" alt="" />
            </div>
            <div className="px-5 pt-12">
              <div className="text-2xl font-medium mb-2">Surface Laptop, Copilot+ PC</div>
              <div>
              Unlock next-gen AI experiences like Recall—so you can search your PC’s past to find the content you need.
              </div>
              <div>
                <button>Learn more</button>
              </div>
            </div>
          </div>

          <div className="item mx-2">
            <div>
              <img src={ms365LifeStyle} className="w-screen mx-auto" alt="" />
            </div>
            <div className="px-5 pt-12">
              <div className="text-2xl font-medium mb-2">Maximise the everyday with Microsoft 365</div>
              <div>
                Get online protection, secure cloud storage and innovative apps
                designed to fit your needs – all in one plan.
              </div>
              <div>
                <button>Learn more</button>
              </div>
            </div>
          </div>

          <div className="item mx-2">
            <div>
              <img src={gamePass} className="w-screen mx-auto" alt="" />
            </div>
            <div className="px-5 pt-12">
              <div className="text-2xl font-medium mb-2">Xbox Game Pass Ultimate</div>
              <div>
                Play new games on day one. Plus, enjoy hundreds of high-quality
                games with friends on console and PC.
              </div>
              <div>
                <button>Learn more</button>
              </div>
            </div>
          </div>

          <div className="item mx-2">
            <div>
              <img src={xBoxSeries} className="w-screen mx-auto" alt="" />
            </div>
            <div className="px-5 pt-12">
              <div className="text-2xl font-medium mb-2">Xbox Series X</div>
              <div>                
                The fastest, most powerful Xbox ever.
              </div>
              <div>
                <button>Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
