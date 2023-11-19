import React, { useState } from "react";

import DashboardHeader from "./DashboardHeader";
import CloseAccountModal from "./CloseAccountModal";
import DashboardTable from "./DashboardTable";
import { MonitoringData } from "../Data/MonitoringData";
import DashboardFilters from "./DashboardFilters";
const MonitoringContent = () => {
  // state to manage selected tab
  const [selectedTab, setSelectedTab] = useState("Pending");
  // state to manage close account modal visibility
  const [showModal, setShowModal] = useState(false);

  //states to manage Filters
  const [searchInput, setSearchInput] = useState("");
  const [triggerFilterValue, setTriggerFilterValue] = useState(null);
  const [actionFilterValue, setActionFilterValue] = useState(null);
  const [selectedRiskValue, setSelectedRiskValue] = useState(null);

  //state to manage sorting
  const [selectedSortType, setSelectedSortType] = useState({
    queue: null,
    closeTime: null,
    riskType: null,
  });

  //function to switch tabs
  const handelTabChange = (newTabValue) => {
    setSelectedTab(newTabValue);
    setTriggerFilterValue(null);
    setActionFilterValue(null);
    setSelectedRiskValue(null);
    setSelectedSortType({
      queue: null,
      closeTime: null,
      riskType: null,
    });
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Sorting Order For RiskLevel
  const riskOrderHtL = ["High", "Medium", "Low"];
  const riskOrderLtH = ["Low", "Medium", "High"];

  // function to filter Data based on selected filters
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
    // sort wrt Queue
    if (selectedSortType.queue) {
      if (selectedSortType.queue === "decreasing") {
        finalResult = [...finalResult].sort((a, b) => b.queueFor - a.queueFor);
      } else if (selectedSortType.queue === "increasing") {
        finalResult = [...finalResult].sort((a, b) => a.queueFor - b.queueFor);
      }
    }
    //sort by close time
    if (selectedSortType.closeTime) {
      if (selectedSortType.closeTime === "decreasing") {
        finalResult = [...finalResult].sort(
          (a, b) => b.timeToClose - a.timeToClose
        );
      } else if (selectedSortType.closeTime === "increasing") {
        finalResult = [...finalResult].sort(
          (a, b) => a.timeToClose - b.timeToClose
        );
      }
    }

    // sort by risk level
    if (selectedSortType.riskType) {
      let sortOrder;
      if (selectedSortType.riskType === "HtL") {
        sortOrder = riskOrderHtL;
      } else if (selectedSortType.riskType === "LtH") {
        sortOrder = riskOrderLtH;
      }
      finalResult = [...finalResult].sort((a, b) => {
        return sortOrder.indexOf(a.riskLevel) - sortOrder.indexOf(b.riskLevel);
      });
    }

    return finalResult;
  };

  // function to enable sorting wrt In queue for
  const sortByQueue = () => {
    setSelectedSortType((prev) => ({
      ...prev,
      queue:
        selectedSortType.queue === "decreasing" ? "increasing" : "decreasing",
    }));
  };
  // function to enable sorting wrt Time to close
  const sortByClosingTime = () => {
    setSelectedSortType((prev) => ({
      ...prev,
      closeTime:
        selectedSortType.closeTime === "decreasing"
          ? "increasing"
          : "decreasing",
    }));
  };
  // function to enable sorting wrt Risk Level
  const sortByRiskLevel = () => {
    setSelectedSortType((prev) => ({
      ...prev,
      riskType: selectedSortType.riskType === "HtL" ? "LtH" : "HtL",
    }));
  };

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

      <DashboardTable
        selectedTab={selectedTab}
        DashboardData={filteredData}
        sortByQueue={sortByQueue}
        sortByClosingTime={sortByClosingTime}
        sortByRiskLevel={sortByRiskLevel}
      />

      {showModal && <CloseAccountModal closeModal={closeModal} />}
    </div>
  );
};

export default MonitoringContent;
