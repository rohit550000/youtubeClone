import React, { useState } from 'react'

const SidebarMenuItem = ({name,icon,action,newClasses}) => {
  const[bgChanger,setBgChanger]=useState(true)
  return <>
  <div  className={'flex gap-4 cursor-pointer text-xl p-3 rounded-lg items-center hover:bg-white/[0.3] '+newClasses} onClick={action}>
     <span>{icon}</span>
    <span>{name}</span>
  </div>
  </>
}

export default SidebarMenuItem