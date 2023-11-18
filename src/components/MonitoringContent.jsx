import React, { useState } from "react";

import DashboardHeader from "./DashboardHeader";
import CloseAccountModal from "./CloseAccountModal";
import DashboardTable from "./DashboardTable";
import {MonitoringData} from "../Data/MonitoringData"
import DashboardFilters from "./DashboardFilters";
const MonitoringContent = () => {

  const [selectedTab, setSelectedTab] = useState("Pending");
  const [showModal,setShowModal]=useState(false);
  const[searchInput,setSearchInput]=useState("")


  const handelTabChange=(newTabValue)=>{
    setSelectedTab(newTabValue)
  }
  const openModal=()=>{
    setShowModal(true)
  }

  const closeModal=()=>{
    setShowModal(false)
  }

  const filteredData=()=>{
    let finalResult=MonitoringData;

    if(searchInput!==""){
      let searchFilteredData=finalResult.filter(({userName})=>userName.toLowerCase().includes(searchInput.toLowerCase()));
      return searchFilteredData
    }

    return finalResult
  }
  return (
    <div className="sm:mx-12 mx-2 w-full">
      <p className="text-3xl font-medium sm:mt-12 mt-4">Monitoring</p>
    <DashboardHeader selectedTab={selectedTab} handelTabChange={handelTabChange} openModal={openModal}/>

    <DashboardFilters searchInput={searchInput} setSearchInput={setSearchInput}/>

    <DashboardTable selectedTab={selectedTab} filteredData={filteredData}/>

    {showModal && <CloseAccountModal closeModal={closeModal} />}
    </div>
  );
};

export default MonitoringContent;
