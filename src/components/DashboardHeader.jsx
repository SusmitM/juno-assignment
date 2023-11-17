import React from 'react'
import { RxCrossCircled } from "react-icons/rx";
const DashboardHeader = ({selectedTab,handelTabChange}) => {
  return (
    <div className="relative mt-7 sm:mt-2">

        <div style={{borderBottom:"2px solid #9ca3af"}} className="flex gap-5 items-baseline">

          <span style={{color:selectedTab==="Pending"?"#5234f8":"#9ca3af",borderBottom:selectedTab==="Pending"?"2px solid #5234f8":"2px solid #9ca3af"}} className="pb-5 font-medium border-b-2 relative z-10 top-0.5 cursor-pointer" onClick={()=>handelTabChange("Pending")}>
            Pending
          </span>

          <span style={{color:selectedTab==="Completed"?"#5234f8":"#9ca3af",borderBottom:selectedTab==="Completed"?"2px solid #5234f8":"2px solid #9ca3af"}}  className="pb-5 font-medium border-b-2 relative z-10 top-0.5 cursor-pointer" onClick={()=>handelTabChange("Completed")}>Completed</span>

          <div className="flex flex-grow"></div>

          <button className="flex items-center gap-1 h-auto w-auto rounded-7 bg-red-300 p-2 rounded-md"><span className="text-red-600 font-medium text-sm "><RxCrossCircled /></span><span className="text-red-600 font-medium text-sm">Close account</span></button>
        </div>
      </div>
  )
}

export default DashboardHeader