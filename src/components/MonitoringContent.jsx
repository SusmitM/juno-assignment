import React, { useState } from "react";

import DashboardHeader from "./DashboardHeader";
const MonitoringContent = () => {
  const [selectedTab, setSelectedTab] = useState("Pending");

  const handelTabChange=(newTabValue)=>{
    setSelectedTab(newTabValue)
  }
  return (
    <div className="sm:mx-12 mx-2 w-full">
      <p className="text-3xl font-medium sm:mt-12 mt-4">Monitoring</p>
    <DashboardHeader selectedTab={selectedTab} handelTabChange={handelTabChange}/>
    
    </div>
  );
};

export default MonitoringContent;
