import React, { useState } from "react";

import DashboardHeader from "./DashboardHeader";
import CloseAccountModal from "./CloseAccountModal";
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
  return (
    <div className="sm:mx-12 mx-2 w-full">
      <p className="text-3xl font-medium sm:mt-12 mt-4">Monitoring</p>
    <DashboardHeader selectedTab={selectedTab} handelTabChange={handelTabChange} openModal={openModal}/>
    {showModal && <CloseAccountModal closeModal={closeModal} />}
    </div>
  );
};

export default MonitoringContent;
