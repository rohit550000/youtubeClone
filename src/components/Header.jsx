import React, { useCallback, useContext, useEffect, useState ,useMemo } from "react";
import img from "../images/yt-logo.png";
import { CiSearch } from "react-icons/ci";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { faker } from "@faker-js/faker";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FirstContext } from "../context/firstcontext/Context";

const Header = () => {
  const [query, setQuery] = useState('');
  const [hideandShow, setHideandShow] = useState(false)
  const randomAvatar = useMemo(() => faker.image.avatar(), [])
  const { hideSideBar, setHideSiderBar, menuBar } = useContext(FirstContext)
  const [hideInput, setHideInput] = useState(false)
  const [minWidth, setMinWidth] = useState();
  const navigate = useNavigate()


  const handleQueryChange = useCallback((e) => {
    setQuery(e.target.value);
  }, []); // Empty dependency array means this function won't change


  const handleSearch = useCallback((e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      if (query.trim().length === 0) {
        return;
      }
      navigate(`/search/${query.trim()}`);
    }
  }, [query]);

  const HandleFocus = useCallback((e) => {
    e.type === 'focus' ? setHideandShow(true) : e.type === 'blur' ? setHideandShow(false) : setHideandShow(true)
  }, [])


  useEffect(() => {
    window.addEventListener('resize', () => {
      setMinWidth(window.innerWidth)
    })
  }, [])

  useEffect(() => {
    if (minWidth <= 767) {
      setHideInput(true)
    } else {
      setHideInput(false)
    }

  }, [minWidth])

  return (
    <>
      <div className="header sticky top-0 left-0 grid  grid-cols-3 w-[100%]  items-center bg-black py-4 px-7 text-white">

        <div className="youtub-icon flex  items-center gap-4">
          {menuBar && <GiHamburgerMenu size={24} onClick={() => setHideSiderBar(!hideSideBar)} className="cursor-pointer"/>}
          <img src={img} alt="youtube-logo" className="h-7 w-27 cursor-pointer" onClick={() => navigate('/')}/>
        </div>

        {
          hideInput ?
            (
              <div className="mobileSearch flex justify-center" onClick={() => setHideInput(!hideInput)}>
                <button onClick={handleSearch} className="px-5 bg-white/[0.2]">
                  <CiSearch size={30} />
                </button>
              </div>)
            :
            (<div className="searchbar flex justify-between items-center border-[2px] rounded-full outline-none overflow-hidden ">
              {hideandShow && (<button className="h-full px-2 cursor-default"><CiSearch size={24} /></button>)}
              <input type="text" placeholder="Search" onChange={handleQueryChange} onKeyUp={handleSearch} value={query} onFocus={HandleFocus} onBlur={HandleFocus} className="text-white text-2xl  px-4 h-full w-[13rem] sm:w-[14rem] md:w-[20rem] lg:w-[30rem] xl:w-[35rem] 2xl:w-[45rem] bg-black" />
              <button onClick={handleSearch} className=" px-5 bg-white/[0.2]">
                <CiSearch size={30} />
              </button>
            </div>)
        }

        <div className="otherdetails flex justify-end items-center gap-5">
          <AiOutlineVideoCameraAdd size={26} className="cursor-pointer"/>
          <IoIosNotificationsOutline size={26} className="cursor-pointer"/>
          <img src={randomAvatar} alt="random-avatar" className="h-10 rounded-full cursor-pointer" />
        </div>

      </div>
    </>
  );
};

export default Header;
