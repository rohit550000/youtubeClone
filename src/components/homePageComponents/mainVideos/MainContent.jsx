import React, { useContext, useEffect, useMemo, useState } from "react";
import { FirstContext } from "../../../context/firstcontext/Context";
import MainVideos from "../../homePageComponents/mainVideos/MainVideos";

const MainContent = () => {
  const { categorydata: { contents }, loading } = useContext(FirstContext);
  return (
    <>
      {
        loading ?
        (<div className="col-[2_/_span_3] h-[calc(100vh-5rem)] w-[100%] flex flex-col justify-center items-center bg-black">
          <div class="loader"></div> 
          <div class="twoloader"></div>
          </div>
        )
        :
        (
        <div className="CategoryContent col-[2_/_span_3] text-white justify-center items-center p-10">
        <div className="content grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
         {
            contents?.map((ele, index) => (
              <MainVideos
                key={index}
                ele={ele}
              />
            ))
          }
        </div>
      </div>
      )
}
    </>
  );
};

export default MainContent;
