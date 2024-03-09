import React, { useContext, useEffect, useState } from "react";
import SidebarMenuItem from "./SidebarMenuItem";
import Constant from "../utils/Constant";
import { FirstContext } from "../context/firstcontext/Context";
import { useNavigate } from "react-router-dom";


const Sidebar = () => {
  const MenuItems = Constant();
  const{setCategory,category,hideSideBar,setHideSiderBar}=useContext(FirstContext)
  const[minWidth,setMinWidth]=useState();
  const navigate = useNavigate()

  const FetchOnHome=(name,type)=>{
   switch(type){
    case 'home':
      setCategory(name)
    case 'category':
      setCategory(name)
    case 'menu':
      return
   }
  }


  useEffect(()=>{
    window.addEventListener('resize',()=>{
      setMinWidth(window.innerWidth)
    })
  },[])

  useEffect(()=>{
    if(minWidth <= 767){
      setHideSiderBar(true)
    }else{
      setHideSiderBar(false)
    }
    
  },[minWidth])
  // console.log(minWidth)
  // console.log('abhi'+hideSideBar)
  
  return (
    <>
      <div className={"fixed h-full bg-black text-white min-w-[13rem] "+(hideSideBar?'translate-x-[-100%]':'')}>
        <div className="menuitem">
          {MenuItems.map((ele, index) => (
            <>
              <SidebarMenuItem key={index} name={ele.name==='trending hindi'?'Home':ele.name} icon={ele.icon} newClasses={category === ele.name ? 'bg-white/[0.3]':''} action={()=>{FetchOnHome(ele.name,ele.type);navigate('/');}}/>
              {ele.divider && <hr />}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
