import React, { useState } from "react";

import DashboardHeader from "./DashboardHeader";
import CloseAccountModal from "./CloseAccountModal";
import DashboardTable from "./DashboardTable";
import {MonitoringData} from "../Data/MonitoringData"
const MonitoringContent = () => {

  const [selectedTab, setSelectedTab] = useState("Pending");
  const [showModal,setShowModal]=useState(false);


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

    return finalResult
  }
  return (
    <div className="sm:mx-12 mx-2 w-full">
      <p className="text-3xl font-medium sm:mt-12 mt-4">Monitoring</p>
    <DashboardHeader selectedTab={selectedTab} handelTabChange={handelTabChange} openModal={openModal}/>

    {showModal && <CloseAccountModal closeModal={closeModal} />}

    <DashboardTable selectedTab={selectedTab} filteredData={filteredData}/>


    </div>
  );
};

export default MonitoringContent;
