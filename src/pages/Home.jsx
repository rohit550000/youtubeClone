import React, { useMemo, useContext } from 'react'
import Sidebar from '../components/homePageComponents/sideBare/Sidebar'
import MainContent from '../components/homePageComponents/mainVideos/MainContent'
import { FirstContext } from '../context/firstcontext/Context'
import { useLocation } from 'react-router-dom'
import { faker } from "@faker-js/faker";

const Home = () => {
  const { setMenuBar, setFackeImage } = useContext(FirstContext)
  const { pathname } = useLocation()
  const fakeImage = useMemo(() => faker?.image?.url(), [])
  setFackeImage(fakeImage)
  const locationName = useMemo(() => pathname.split('/').filter(Boolean)[0], [pathname])
  locationName === 'video' ? setMenuBar(false) : setMenuBar(true)
  return (
    <>
      <div className="home-content grid  grid-cols-1 md:grid-cols-[minmax(13rem,14rem)_1fr]  bg-black">
        <Sidebar />
        <MainContent />
      </div>
    </>
  )
}

export default Home