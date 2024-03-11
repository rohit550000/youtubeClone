import React, { useEffect, useState } from 'react'
import { FirstContext } from './Context'
import { FetchData } from '../../utils/api'

const FirstContextCompo = ({ children }) => {
  const [category, setCategory] = useState('trending hindi')
  const [categorydata, setCategorydata] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [hideSideBar, setHideSiderBar] = useState(false);
  const [menuBar, setMenuBar] = useState(true);
  const [fackeImage, setFackeImage] = useState('')
  const name ='Rohit kanojiya'

  const FetchByCategory = (endpoint) => {
    FetchData(`/search?query=${endpoint}`).then(({ data, status }) => {
      setLoading(true)
      if (status === 200) {
        console.log(data)
        setCategorydata(data)
        setLoading(false)
      }
    }).catch((error) => {
      setError(error)
    })
  }

  useEffect(() => {
    FetchByCategory(category)
  }, [category])

  const GlobalData = {
    setCategory,
    category,
    categorydata,
    loading,
    setHideSiderBar,
    hideSideBar,
    setMenuBar,
    menuBar,
    setFackeImage,
    fackeImage,
    name
  }
  return (
    <>
      <FirstContext.Provider value={GlobalData}>
        {children}
      </FirstContext.Provider>
    </>
  )
}

export default FirstContextCompo