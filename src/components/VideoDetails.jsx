import React, { useContext, useEffect, useState } from 'react'
import { FetchData } from '../utils/api'
import YouTube from 'react-youtube'
import { FirstContext } from '../context/firstcontext/Context'

const VideoDetails = ({id}) => {
  const[videoDeta,setVideoDeta] = useState({})
  const[channelDeta,setChannelDeta] = useState({})
  const[loading,setLoading] =useState(false)
  const {setCategory,category} = useContext(FirstContext)

  const FetchChannel=(channelId)=>{
    FetchData(`/channel/about?id=${channelId}`).then(({data})=>{
     !data ? 'Loading..':setChannelDeta(data)
    })
  }
  useEffect(()=>{
    FetchData(`/video?id=${id}`).then(({data})=>{
      if(!data){
        setLoading(true)
      }
        setVideoDeta(data?.videoDetails)
        setCategory(data?.videoDetails?.title)
        console.log(data?.videoDetails?.title)
        setLoading(false)
        const channelId = data?.videoDetails?.channelId
        const defauldId ='UCE_M8A5yxnLfW0KghEeajjw'
        FetchChannel(!channelId ? defauldId:channelId)
    })
  },[id])


  return <>
  {
    loading ? 'Loading...' :(
  <div className="videoContainer">
    <div className="ytVideo">
    <YouTube videoId={id} />
    </div>
    <div className="videoDetails">
      <span className='title'>{videoDeta?.title}</span>
      <div className="creatorDetails">

        <div className="partOne">
        <img src={channelDeta?.avatar?.thumbnails[0]?.url} alt="avatar"  className='h-10 w-10 rounded-full'/>
        <div className="creatorName">
          <span className='name'>{videoDeta?.author}</span>
          <spna className="subscriber">{channelDeta?.subscriberCountText}</spna>
        </div>
        <button className="subscrib">Subscribe</button>
        </div>

        <div className="partTwo">
          <div className="likes">

          </div>
          <div className="share">

          </div>
          <div className="download">

          </div>
          <div className="subMenu">

          </div>
        </div>
      </div>

      <div className="discription">
        <p className="videoInfor">
          {channelDeta?.description}
        </p>
      </div>







    </div>
  </div>
    )
 }
  </>
}

export default VideoDetails