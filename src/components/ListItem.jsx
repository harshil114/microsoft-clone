import React from "react";

export default function ListItem({image,title, description, showNewFlag, arrowImg}) {
    return (
        <div className="item mx-2 shadow-xl">
            <div>
                <img src={image} className="w-screen mx-auto" alt="" />
            </div>
            <div className="px-5 pt-12">
                <div className="h-28">
                    {showNewFlag && (
                        <div className="bg-[#ffb900] w-fit font-medium px-3 py-1">New</div>
                    )}
                    {!showNewFlag && <div className="w-fit font-medium px-3 py-1"> </div>}

                    <div className="text-2xl font-medium">{title}</div>
                </div>

                <div>{description}</div>

                {arrowImg && (
                    <div className="">
                        <span className="ml-10 text-[#0067b8] cursor-pointer relative md:flex md:flex-col md:ml-0 md:mt-2 font-semibold">
                            For up to six people
                            <img
                                src={arrowImg}
                                alt=""
                                className="absolute top-[0.4rem] left-[9.3rem]"
                            />
                        </span>
                    </div>
                )}

                <div className="h-32">
                    <button className="btn-primary">Learn more</button>
                </div>
            </div>
        </div>
    );
}
