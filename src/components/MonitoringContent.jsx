import React, { useState } from "react";

import DashboardHeader from "./DashboardHeader";
import CloseAccountModal from "./CloseAccountModal";
import DashboardTable from "./DashboardTable";
import { MonitoringData } from "../Data/MonitoringData";
import DashboardFilters from "./DashboardFilters";
const MonitoringContent = () => {
  const [selectedTab, setSelectedTab] = useState("Pending");
  const [showModal, setShowModal] = useState(false);

  //states to manage Filters
  const [searchInput, setSearchInput] = useState("");
  const [triggerFilterValue, setTriggerFilterValue] = useState(null);
  const [actionFilterValue, setActionFilterValue] = useState(null);
  const [selectedRiskValue, setSelectedRiskValue] = useState(null);

  //state to manage sorting
  const [selectedSortType,setSelectedSortType]=useState({queue:null});

  const handelTabChange = (newTabValue) => {
    setSelectedTab(newTabValue);
    setTriggerFilterValue(null);
    setActionFilterValue(null);
    setSelectedRiskValue(null);
  };
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const filteredData = () => {
    let finalResult = MonitoringData;

    if (searchInput !== "") {
      let searchFilteredData = finalResult.filter(({ userName }) =>
        userName.toLowerCase().includes(searchInput.toLowerCase())
      );
      finalResult = searchFilteredData;
    }
    if (triggerFilterValue) {
      finalResult = finalResult.filter(
        ({ triggerReason }) => triggerReason === triggerFilterValue
      );
    }
    if (actionFilterValue) {
      finalResult = finalResult.filter(
        ({ actionReason }) => actionReason === actionFilterValue
      );
    }
    if (selectedRiskValue) {
      finalResult = finalResult.filter(
        ({ riskLevel }) => riskLevel === selectedRiskValue
      );

    }

    if(selectedSortType.queue){
      
         if(selectedSortType.queue==="decreasing"){
          finalResult=[...finalResult].sort((a,b)=>b.queueFor-a.queueFor);
        
         }
         else if(selectedSortType.queue==="increasing"){
          finalResult=[...finalResult].sort((a,b)=>a.queueFor-b.queueFor);
         
         }
      
    }

    return finalResult;
  };

// function to enable sorting wrt In queue for
  const sortByQueue=()=>{
    setSelectedSortType(prev=>({...prev,queue:selectedSortType.queue==="decreasing"?"increasing":"decreasing"}))
  }

  let DashboardData = filteredData();

  return (
    <div className="sm:ml-72 sm:mr-12 ml-16 mx-2 w-full overflow-x-hidden">
      <p className="text-3xl font-medium sm:mt-12 mt-4">Monitoring</p>
      <DashboardHeader
        selectedTab={selectedTab}
        handelTabChange={handelTabChange}
        openModal={openModal}
      />

      <DashboardFilters
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        selectedTab={selectedTab}
        triggerFilterValue={triggerFilterValue}
        setTriggerFilterValue={setTriggerFilterValue}
        actionFilterValue={actionFilterValue}
        setActionFilterValue={setActionFilterValue}
        selectedRiskValue={selectedRiskValue}
        setSelectedRiskValue={setSelectedRiskValue}
      />

      <DashboardTable selectedTab={selectedTab} DashboardData={DashboardData} sortByQueue={sortByQueue} />

      {showModal && <CloseAccountModal closeModal={closeModal} />}
    </div>
  );
};

export default MonitoringContent;
