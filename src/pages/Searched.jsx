import React, { useMemo, useContext } from 'react'
import Sidebar from '../components/homePageComponents/sideBare/Sidebar'
import SearchedContent from '../components/searchedVideoComponents/SearchedContent'
import { FirstContext } from '../context/firstcontext/Context'
import { useLocation } from 'react-router-dom'

const Searched = () => {
  const { setMenuBar } = useContext(FirstContext)
  const { pathname } = useLocation()
  const locationName = useMemo(() => pathname.split('/').filter(Boolean)[0], [pathname])
  locationName === 'video' ? setMenuBar(false) : setMenuBar(true)
  return <>
    <div className="home-search grid grid-cols-1 md:grid-cols-[minmax(13rem,14rem)_1fr] bg-black">
      <Sidebar />
      <SearchedContent />
    </div>
  </>
}

export default Searched