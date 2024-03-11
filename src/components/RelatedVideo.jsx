import React, { useContext } from 'react'
import { FirstContext } from '../context/firstcontext/Context'
import { NumberFormatter } from '../utils/Constant'
import { Link } from 'react-router-dom'


const RelatedVideo = () => {
  const { categorydata: { contents }, loading, fackeImage } = useContext(FirstContext);

  return (<>
    <div className="CategoryContent  text-white justify-center items-center px-1 sm:px-10 pb-10">
      <div className="content grid grid-cols-1 gap-8">
        {
          loading ? <h1 className="text-3xl">Loding...</h1> : contents.map((ele, index) => (
            <>
              <Link to={`/video/${ele?.video?.videoId}`} key={index}>
                <div className="singlevideo cursor-pointer grid grid-cols-[.9fr,1fr] lg:grid-cols-[1fr,1fr]  gap-5" >
                  <div className="thumbnail h-[100%] w-[100%] ">
                    <img
                      src={(ele?.video?.thumbnails[0]?.url) ? (ele?.video?.thumbnails[0]?.url) : (fackeImage)} alt="thumbnail"
                      className="rounded-xl h-full w-full object-fill"
                    />
                  </div>

                  <div className="creator flex gap-3 flex-col text-white">
                    <span className="title text-lg sm:text-xl md:text-2xl lg:text-xl">{(ele?.video?.title) ? (ele?.video?.title.slice(0, 70) + '...') : 'Oops,media is not availabe'}</span>
                    <span className="creatorName text-gray-400 text-xl">{ele?.video?.channelName}</span>
                    <div className="videoanddate flex gap-2 text-gray-400">
                      <span className="view">{NumberFormatter(ele?.video?.viewCountText) === 'NaN' ? 'Please Search valid things' : NumberFormatter(ele?.video?.viewCountText)}</span>
                      <span className="dat">{ele?.video?.publishedTimeText}</span>
                    </div>
                  </div>

                </div>
              </Link>
            </>
          ))
        }
      </div>
    </div>
  </>)
}

export default RelatedVideo