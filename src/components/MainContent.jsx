import React, { useContext, useEffect, useState } from "react";
import { FetchData } from "../utils/api";
import { FirstContext } from "../context/firstcontext/Context";
import MainVideos from "./MainVideos";

const MainContent = () => {
  const {categorydata:{contents},loading} = useContext(FirstContext);

  return (
    <>
      <div className="CategoryContent col-[2_/_span_3] text-white justify-center items-center p-10">
        <div className="content grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {
         loading ? <h1 className="text-3xl">Loding...</h1>: contents.map((ele,index) => (
            <MainVideos
            key={index}
            ele={ele}
            />
         ))
          }
        </div>
      </div>
    </>
  );
};

export default MainContent;
