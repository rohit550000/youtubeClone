import React from 'react'
import Sidebar from '../components/Sidebar'
import MainContent from '../components/MainContent'

const Home = () => {
  return (
    <>
    <div className="home-content grid  grid-cols-1 md:grid-cols-[minmax(13rem,14rem)_1fr]  bg-black"> 
    <Sidebar />
    <MainContent/>
    </div>
    </>
  )
}

export default Home