import React, { useMemo } from 'react'
import VideoDetails from '../components/VideoDetails'
import RelatedVideo from '../components/RelatedVideo'
import { useLocation, useParams } from 'react-router-dom'
import { useContext } from 'react'
import { FirstContext } from '../context/firstcontext/Context'

const VideoInfo = () => {
  const { id } = useParams()
  const { setMenuBar } = useContext(FirstContext)
  const { pathname } = useLocation()
  const locationName = useMemo(() => pathname.split('/').filter(Boolean)[0], [pathname])
  locationName === 'video' ? setMenuBar(false) : setMenuBar(true)

  return <>
    <div className="grid lg:grid-cols-[2fr,1fr] grid-flow-row px-6 sm:px-10 md:px-14 lg:px-12 xl:px-36  pt-10 gap-5 bg-black">
      <VideoDetails id={id} />
      <RelatedVideo />
    </div>
  </>
}

export default VideoInfo