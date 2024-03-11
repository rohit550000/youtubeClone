import React, { useContext, useEffect, useState } from 'react'
import { FetchData } from '../../utils/api'
import YouTube from 'react-youtube'
import { FirstContext } from '../../context/firstcontext/Context'
import { FaBell } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";
import { HiDownload } from "react-icons/hi";
import { IoIosMore } from "react-icons/io";


const VideoDetails = ({ id }) => {
  const [videoDeta, setVideoDeta] = useState({})
  const [channelDeta, setChannelDeta] = useState({})
  const [loading, setLoading] = useState(false)
  const { setCategory, fackeImage } = useContext(FirstContext)
  const [showMore, setShowMore] = useState(false)


  const FetchChannel = (channelId) => {
    FetchData(`/channel/about?id=${channelId}`).then(({ data }) => {
      !data ? 'Loading..' : setChannelDeta(data)
    })
  }
  useEffect(() => {
    FetchData(`/video?id=${id}`).then(({ data }) => {
      if (!data) {
        setLoading(true)
      }
      setVideoDeta(data?.videoDetails)
      setCategory(data?.videoDetails?.title)
      console.log(data?.videoDetails?.title)
      console.log(data?.videoDetails?.title)
      setLoading(false)
      const channelId = data?.videoDetails?.channelId
      const defauldId = 'UCE_M8A5yxnLfW0KghEeajjw'
      FetchChannel(!channelId ? defauldId : channelId)
    })
  }, [id])

  const opts = {
    height: '490',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };


  return <>
    {
      loading ? 'Loading...' : (
        <div className="videoContainer flex flex-col ">
          <div className="videoContainerMain">
            <div className="ytVideo overflow-hidden rounded-2xl ">
              <YouTube videoId={id} opts={opts} />
            </div>
          </div>

          <div className="videoDetails text-white pt-5 grid grid-cols-1">
            <span className='title text-3xl font-bold'>{videoDeta?.title?.slice(0, 90)}</span>
            <div className="creatorDetails pt-5 flex justify-center sm:justify-between flex-wrap gap-5">

              <div className="partOne flex gap-4 items-center">
                <img src={(channelDeta?.avatar?.thumbnails[0]?.url) ? (channelDeta?.avatar?.thumbnails[0]?.url) : (fackeImage)} alt="avatar" className='h-16 w-16 rounded-full' />
                <div className="creatorName flex flex-col">
                  <span className='name text-2xl font-bold'>{videoDeta?.author}</span>
                  <spna className="subscriber text-gray-400 text-xl">{channelDeta?.subscriberCountText}</spna>
                </div>
                <div className="subscribe flex items-center bg-white/[0.2] gap-3 py-2 px-4 rounded-full cursor-pointer">
                  <FaBell className='text-3xl' />
                  <span className='text-xl font-bold'>Subscribe</span>
                </div>

              </div>

              <div className="partTwo flex items-center gap-3 ">
                <div className="share flex items-center bg-white/[0.2] gap-3 py-2 px-4 rounded-full cursor-pointer">
                  <IoMdShareAlt className='text-3xl' />
                  <span className='text-xl font-bold'>Share</span>
                </div>
                <div className="download flex items-center bg-white/[0.2] gap-3 py-2 px-4 rounded-full cursor-pointer">
                  <HiDownload className='text-3xl' />
                  <span className='text-xl font-bold'>Download</span>
                </div>
                <div className="subMenu flex items-center bg-white/[0.2] gap-3 py-2 px-4 rounded-full cursor-pointer">
                  <IoIosMore className='text-3xl' />
                </div>
              </div>

            </div>

            <div className="discription p-6">
              <div className="discription bg-white/[0.1] rounded-2xl p-5">
                <span className="videoInfor text-xl text-justify">
                  {showMore ? (channelDeta?.description) : (channelDeta?.description?.slice(0, 200) + '...')}
                  <br />
                  <button className='text-3xl pt-2' onClick={() => setShowMore(!showMore)}>{showMore ? 'Show less' : '...More'}</button>
                </span>
              </div>
            </div>

          </div>
        </div>
      )
    }
  </>
}

export default VideoDetails