import React, { useState } from "react";
import SearchIcon from "../assets/SearchIcon.svg";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

//Dropdown Values
const TriggerReasonValues = [
  "Hard flag",
  "Temp flag",
  "Restructed unflag",
  "Un flag",
  "Reviewed",
  "FIFO",
  "IP Change",
];
const ActionReasonValues = ["Flagged", "Closed", "Cleared", "SOI requested"];
const RiskLevelValues = ["Low", "Medium", "High"];

const DashboardFilters = ({
  searchInput,
  setSearchInput,
  selectedTab,
  triggerFilterValue,
  setTriggerFilterValue,
  actionFilterValue,
  setActionFilterValue,
  selectedRiskValue,
  setSelectedRiskValue,
}) => {
  // states to manage opening and closing of dropdowns
  const [openTriggerReason, setOpenTriggerReason] = useState(false);
  const [openActionReason, setOpenActionReason] = useState(false);
  const [openRiskValue, setOpenRiskValue] = useState(false);

  return (
    <div className="mt-9 w-fit flex flex-col sm:flex-row gap-3 justify-center align-center m-auto">
      {/* Search Bar */}
      <div className="relative">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="Search"
          className="sm:w-96 w-48 h-10 pl-10 pr-4 rounded-lg border border-slate-300 bg-white  focus:border-indigo-500 focus:outline-none "
        />
        <span className="absolute left-3 top-2 text-gray-400">
          <img src={SearchIcon} alt="Search Icon" className="h-6 w-6 " />
        </span>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
          {/* Trigger Reason Filter*/}

      {selectedTab === "Pending" && (
        <div className="relative flex flex-col items-center rounded-lg mx-3 px-2 w-44">

          <button
            className="bg-gray-100 text-slate-500 p-2 w-full items-center justify-between font-medium text-sm rounded-lg flex gap-1.5"
            onClick={() => setOpenTriggerReason((prev) => !prev)}
          >
            {triggerFilterValue ? triggerFilterValue : "Trigger Reason"}{" "}
            {openTriggerReason ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>

          {openTriggerReason && (
            <div className="bg-white z-10 absolute top-10 p-2 text-slate-500 font-medium text-sm w-full border border-slate-200 rounded-lg ">
              <div
                onClick={() => {
                  setTriggerFilterValue(null);
                  setOpenTriggerReason(false);
                }}
                className="p-1.5  cursor-pointer hover:bg-indigo-100 hover:text-black rounded-lg"
              >
                <h3>Reset</h3>
              </div>
              {TriggerReasonValues.map((value, index) => (
                <div
                  onClick={() => {
                    setTriggerFilterValue(value);
                    setOpenTriggerReason(false);
                  }}
                  className="p-1.5 cursor-pointer hover:bg-indigo-100 hover:text-black rounded-lg"
                  key={index}
                >
                  <h3>{value}</h3>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      {/* Action Reason Filter*/}

      {selectedTab === "Completed" && (
        <div className="relative flex flex-col items-center rounded-lg mx-3 px-2 w-44">
          <button
            className="bg-gray-100 text-slate-500 p-2 w-full items-center justify-between font-medium text-sm rounded-lg flex gap-1.5"
            onClick={() => setOpenActionReason((prev) => !prev)}
          >
            {actionFilterValue ? actionFilterValue : "Action Reason"}{" "}
            {openActionReason ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>

          {openActionReason && (
            <div className="bg-white absolute z-10 top-10 p-2 text-slate-500 font-medium text-sm w-full border border-slate-200 rounded-lg ">
              <div
                onClick={() => {
                  setActionFilterValue(null);
                  setOpenActionReason(false);
                }}
                className="p-1.5 cursor-pointer hover:bg-indigo-100 hover:text-black rounded-lg"
              >
                <h3>Reset</h3>
              </div>
              {ActionReasonValues.map((value, index) => (
                <div
                  onClick={() => {
                    setActionFilterValue(value);
                    setOpenActionReason(false);
                  }}
                  className="p-1.5 cursor-pointer hover:bg-indigo-100 hover:text-black rounded-lg"
                  key={index}
                >
                  <h3>{value}</h3>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Risk Reason Filter*/}
      <div className="relative flex flex-col items-center rounded-lg mx-3 px-2 w-44">
        <button
          className="bg-gray-100 z-0 text-slate-500 p-2 w-full items-center justify-between font-medium text-sm rounded-lg flex gap-1.5"
          onClick={() => setOpenRiskValue((prev) => !prev)}
        >
          {selectedRiskValue ? selectedRiskValue : "Risk level"}{" "}
          {openActionReason ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>

        {openRiskValue && (
          <div className="bg-white z-10 absolute top-10 p-2 text-slate-500 font-medium text-sm w-full border border-slate-200 rounded-lg ">
            <div
              onClick={() => {
                setSelectedRiskValue(null);
                setOpenRiskValue(false);
              }}
              className="p-1.5 cursor-pointer hover:bg-indigo-100 hover:text-black rounded-lg"
            >
              <h3>Reset</h3>
            </div>
            {RiskLevelValues.map((value, index) => (
              <div
                onClick={() => {
                  setSelectedRiskValue(value);
                  setOpenRiskValue(false);
                }}
                className="p-1.5 cursor-pointer hover:bg-indigo-100 hover:text-black rounded-lg"
                key={index}
              >
                <h3>{value}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
      </div>

    
    </div>
  );
};

export default DashboardFilters;
