import React from 'react'
import Sidebar from '../components/Sidebar'
import SearchedContent from '../components/SearchedContent'

const Searched = () => {
  return <>
  <div className="home-search grid grid-cols-1 md:grid-cols-[minmax(13rem,14rem)_1fr] bg-black"> 
  <Sidebar/>
  <SearchedContent/>
  </div>
  </>
}

export default Searched