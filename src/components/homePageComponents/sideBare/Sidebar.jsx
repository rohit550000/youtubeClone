import React, { useContext, useEffect, useState } from "react";
import SidebarMenuItem from "../../homePageComponents/sideBare/SidebarMenuItem";
import Constant from "../../../utils/Constant";
import { FirstContext } from "../../../context/firstcontext/Context";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const MenuItems = Constant();
  const { setCategory, category, hideSideBar, setHideSiderBar,name} = useContext(FirstContext)
  const [minWidth, setMinWidth] = useState();
  const navigate = useNavigate()

  const FetchOnHome = (name, type) => {
    switch (type) {
      case 'home':
        setCategory(name)
      case 'category':
        setCategory(name)
      case 'menu':
        return
    }
  }


  useEffect(() => {
    window.addEventListener('resize', () => {
      setMinWidth(window.innerWidth)
    })
  }, [])

  useEffect(() => {
    if (minWidth <= 767) {
      setHideSiderBar(true)
    } else {
      setHideSiderBar(false)
    }
  }, [minWidth])


  return (
    <>
      <div className={"fixed h-full overflow-y-auto bg-black text-white min-w-[13rem] " + (hideSideBar ? 'translate-x-[-100%]' : '')}>
        <div className="menuitem">
          {MenuItems.map((ele, index) => (
            <>
              <SidebarMenuItem key={index} name={ele.name === 'trending hindi' ? 'Home' : ele.name} icon={ele.icon} newClasses={category === ele.name ? 'bg-white/[0.3]' : ''} action={() => { FetchOnHome(ele.name, ele.type); navigate('/'); }} />
              {ele.divider && <hr />}
            </>
          ))}
          <div className="loaderContent flex justify-center items-center">
            <div class="loader"></div>
          </div>
          <div className="developerDetails flex flex-col justify-center items-center" >
            <h />
            <span className="pt-2 text-gray-400">Developed by</span>
            <span className="text-2xl font-bold">{name}</span>
            <span className="pt-3 text-gray-400">Designed bY</span>
            <span className="text-2xl font-bold">{name}</span>
            <span className="text-2xl font-bold pt-3">&#169;2024</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
