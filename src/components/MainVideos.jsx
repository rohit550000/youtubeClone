import React from "react";
import { NumberFormatter } from "../utils/Constant";
import { Link } from "react-router-dom";


const MainVideos = ({ele}) => {
  return (
    <> 
    <Link to={`/video/${ele?.video?.videoId}`}>
      <div className="singlevideo cursor-pointer" >
        <div className="thumbnail">
          <img
            src={ele?.video?.thumbnails[0]?.url}alt="thumbnail"
            className="rounded-xl h-full w-full"
          />
          <span className="videoLength"></span>
        </div>
        <div className="creator">
          <div className="creatorDetail flex pt-4 gap-2">
            <img src={ele?.video?.thumbnails[0]?.url} alt="avtaar" className="creatorIcon h-12 w-12 rounded-full" />
            <div className="creator flex flex-col">
            <span className="title text-xl">{ele?.video?.title.slice(0,70)+'...'}</span>
            <span className="creatorName text-gray-500">{ele?.video?.channelName}</span>
            <div className="videoanddate">
              <span className="view">{NumberFormatter(ele?.video?.viewCountText)==='NaN' ? Math.floor(Math.random()*66)+'M':NumberFormatter(ele?.video?.viewCountText)}</span>
              <span className="date">{ele?.video?.publishedTimeText}</span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </Link>
    </>
  );
};

export default MainVideos;
