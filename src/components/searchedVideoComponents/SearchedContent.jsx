import React, { useEffect,useContext } from 'react'
import { FirstContext } from '../../context/firstcontext/Context'
import { useParams,Link  } from 'react-router-dom'
import { NumberFormatter } from '../../utils/Constant'

const SearchedContent = () => {
  const { query } = useParams()
  const { categorydata: { contents }, loading, setCategory, fackeImage } = useContext(FirstContext);
  useEffect(() => {
    !query || query.length == 0 ? 'Loading' : setCategory(query)
  }, [query])

  return (<>
    <div className="CategoryContent col-[2_/_span_3] text-white justify-center items-center p-10">
      <div className="content grid grid-cols-1 gap-8">
        {
          loading ? <h1 className="text-3xl">Loding...</h1> : contents.map((ele, index) => (
            <>
              <Link to={`/video/${ele?.video?.videoId}`} key={index}>
                <div className="singlevideo cursor-pointer grid grid-cols-[.9fr,1fr] sm:grid-cols-[.5fr,1fr]  gap-5" >
                  <div className="thumbnail h-[100%] w-[100%] ">
                    <img
                      src={(ele?.video?.thumbnails[0]?.url) ? (ele?.video?.thumbnails[0]?.url) : (fackeImage)} alt="thumbnail"
                      className="rounded-xl h-full w-full object-fill"
                    />
                  </div>

                  <div className="creator flex gap-3 flex-col ">
                    <div className="mainTitle">
                      <span className="title text-lg sm:text-xl md:text-2xl lg:text-3xl">{(ele?.video?.title) ? (ele?.video?.title.slice(0, 70) + '...') : 'Oops,media is not availabe'}</span>
                      <div className="videoanddate flex gap-2 text-gray-400">
                        <span className="view">{NumberFormatter(ele?.video?.viewCountText) === 'NaN' ? 'Please Search valid things' : NumberFormatter(ele?.video?.viewCountText)}</span>
                        <span className="date">{ele?.video?.publishedTimeText}</span>
                      </div>
                    </div>
                    <div className="channelInf flex gap-2 items-center">
                      <img src={(ele?.video?.thumbnails[0]?.url) ? (ele?.video?.thumbnails[0]?.url) : (fackeImage)} alt="avtaar" className="creatorIcon h-12 w-12 rounded-full" />
                      <span className="creatorName text-gray-400 text-xl">{ele?.video?.channelName}</span>
                    </div>
                    <span className="title text-base sm:text-lg md:text-xl  text-gray-400">{ele?.video?.title.slice(0, 78) + '...'}</span>
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

export default SearchedContent