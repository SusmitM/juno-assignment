import React from 'react'
import SearchIcon from "../assets/SearchIcon.svg"

const DashboardFilters = ({searchInput,setSearchInput}) => {
  return (
    <div className='mt-9 flex'>
        <div className="relative">
      <input
      value={searchInput}
      onChange={(e)=>setSearchInput(e.target.value)}
        type="text"
        placeholder="Search"
        className="w-96 h-10 pl-10 pr-4 rounded-lg border border-slate-300 bg-white  focus:border-indigo-500 focus:outline-none "
      />
      <span className="absolute left-3 top-2 text-gray-400">
       
     <img src={SearchIcon} alt="Search Icon" className="h-6 w-6" /> 
      </span>
    </div>
    </div>
  )
}

export default DashboardFilters