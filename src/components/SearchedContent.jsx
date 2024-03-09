import React, { useEffect } from 'react'
import { FirstContext } from '../context/firstcontext/Context'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { FetchData } from '../utils/api'
import { Link } from 'react-router-dom'
import { NumberFormatter } from '../utils/Constant'

const SearchedContent = () => {
  const {query} = useParams()
  const {categorydata:{contents},loading,setCategory} = useContext(FirstContext);

  !query || query.length==0 ? 'Loading': setCategory(query)
   
  return (  <>
    <div className="CategoryContent">
      <div className="content grid grid-cols-4 gap-4">
        {
       loading ? <h1 className="text-3xl">Loding...</h1>: contents.map((ele,index) => (
        <>
        <Link to={`/video/${ele?.video?.videoId}`} key={index}>
         <div className="singlevideo cursor-pointer border-8">
           <div className="thumbnail">
             <img
               src={ele?.video?.thumbnails[0]?.url} alt="thumbnail"
             />
             <span className="videoLength"></span>
           </div>
           <div className="creator">
             <div className="creatorDetail flex">
               <img src={ele?.video?.thumbnails[0]?.url} alt="avtaar" className="creatorIcon h-8 w-8 rounded-full" />
               <div className="creator flex flex-col">
               <span className="title">{ele?.video?.title}</span>
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
       ))
        }
      </div>
    </div>
  </>)
}

export default SearchedContent