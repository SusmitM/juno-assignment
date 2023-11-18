import React, { useState } from "react";

import DashboardHeader from "./DashboardHeader";
import CloseAccountModal from "./CloseAccountModal";
import DashboardTable from "./DashboardTable";
import {MonitoringData} from "../Data/MonitoringData"
import DashboardFilters from "./DashboardFilters";
const MonitoringContent = () => {

  const [selectedTab, setSelectedTab] = useState("Pending");
  const [showModal,setShowModal]=useState(false);
  
  //states to manage Filters
  const[searchInput,setSearchInput]=useState("");
  const [triggerFilterValue, setTriggerFilterValue] = useState(null);
  const [actionFilterValue, setActionFilterValue] = useState(null);
  const [selectedRiskValue,setSelectedRiskValue]=useState(null);

  
  const handelTabChange=(newTabValue)=>{
    setSelectedTab(newTabValue);
    setTriggerFilterValue(null);
    setActionFilterValue(null);
    setSelectedRiskValue(null);
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
      finalResult=searchFilteredData
    }
    if(triggerFilterValue){
      finalResult=finalResult.filter(({triggerReason})=>triggerReason===triggerFilterValue);
       
    }
    if(actionFilterValue){
      finalResult=finalResult.filter(({actionReason})=>actionReason===actionFilterValue);
        
    }
    if(selectedRiskValue){
      finalResult=finalResult.filter(({riskLevel})=>riskLevel===selectedRiskValue);
    }

    return finalResult
  }

  return (
    <div className="sm:mx-12 mx-2 w-full overflow-x-hidden">
      <p className="text-3xl font-medium sm:mt-12 mt-4">Monitoring</p>
    <DashboardHeader selectedTab={selectedTab} handelTabChange={handelTabChange} openModal={openModal}/>

    <DashboardFilters searchInput={searchInput} setSearchInput={setSearchInput} selectedTab={selectedTab} triggerFilterValue={triggerFilterValue} setTriggerFilterValue={setTriggerFilterValue} actionFilterValue={actionFilterValue} setActionFilterValue={setActionFilterValue} selectedRiskValue={selectedRiskValue} setSelectedRiskValue={setSelectedRiskValue}/>

    <DashboardTable selectedTab={selectedTab} filteredData={filteredData}/>

    {showModal && <CloseAccountModal closeModal={closeModal} />}
    </div>
  );
};

export default MonitoringContent;
