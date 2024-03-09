import React, { useContext, useEffect } from 'react'
import VideoDetails from '../components/VideoDetails'
import RelatedVideo from '../components/RelatedVideo'
import { useParams } from 'react-router-dom'
import { FirstContext } from '../context/firstcontext/Context'

const VideoInfo = () => {
  const { id } = useParams()

  return <>
  <div className="flex">
    <VideoDetails id={id}/>
    <RelatedVideo/>
  </div>
  </>
}

export default VideoInfo