import React, { useState } from "react";
import { RiExternalLinkLine } from "react-icons/ri";
import { FaCircle } from "react-icons/fa";
import UpDownIcon from "../assets/UpDownIcon.svg";
const DashboardTable = ({ selectedTab, DashboardData,sortByQueue }) => {
  return (
    <>
      <div className="overflow-x-auto sm:overflow-x-hidden w-full my-5">
        {DashboardData?.length > 0 ? (
          <table className="text-gray-500  w-full border border-slate-200">
            <thead className="text-xs text-black font-medium text-left bg-gray-100 border border-slate-300 ">
              <tr>
                <th className=" px-6 py-3">User</th>

                <th className=" px-6">
                  <span className="flex gap-1 items-center">
                    Risk level
                    <img
                      className="cursor-pointer"
                      src={UpDownIcon}
                      alt="UpDownIcon"
                    />
                  </span>
                </th>

                {selectedTab === "Pending" && (
                  <th className=" px-6">Trigger reason</th>
                )}
                {selectedTab === "Pending" && (
                  <th className="px-6">
                    <p className="flex gap-1 items-center">
                      In queue for
                      <img onClick={()=>sortByQueue()} className="h-4" src={UpDownIcon} alt="UpDownIcon" />
                    </p>
                  </th>
                )}

                {selectedTab === "Completed" && (
                  <th className=" px-6">Action reason</th>
                )}

                {selectedTab === "Completed" && (
                  <th className=" pl-3 pr-6">
                    <p className="flex  gap-1 items-center">
                      Time to close
                      <img className="h-4" src={UpDownIcon} alt="UpDownIcon" />
                    </p>
                  </th>
                )}

                <th className="">
                  <p className="flex gap-1 items-center">
                    Date added on
                    <img className="h-4" src={UpDownIcon} alt="UpDownIcon" />
                  </p>
                </th>

                {selectedTab === "Pending" && (
                  <th className=" px-6">Previously reviewed</th>
                )}
                {selectedTab === "Completed" && (
                  <th className=" px-3">Action taken by</th>
                )}
              </tr>
            </thead>

            <tbody>
              {DashboardData?.map((data) => {
                return (
                  <tr className="bg-white border-b text-center " key={data.id}>
                    <td className="flex items-center justify-between  text-left  pl-6 pr-4  py-4">
                      <p className="flex flex-col">
                        <span className="font-medium  text-sm text-black">
                          {data.userName}
                        </span>
                        <span className="font-medium text-xs text-current">
                          {data.userEmail}
                        </span>
                      </p>
                      <p className="text-indigo-700 text-lg cursor-pointer">
                        <RiExternalLinkLine />
                      </p>
                    </td>
                    <td className="text-left  px-6 ">
                      <p
                        className="flex items-baseline font-medium text-sm gap-x-1.5"
                        style={{
                          color:
                            data.riskLevel === "High"
                              ? "#7D2424"
                              : data.riskLevel === "Low"
                              ? "#006540"
                              : "#88670F",
                        }}
                      >
                        <span className="text-xs">
                          <FaCircle />
                        </span>
                        {data.riskLevel}
                      </p>
                    </td>

                    {selectedTab === "Pending" && (
                      <td className=" text-left font-medium text-sm text-black  px-6 ">
                        {data.triggerReason}
                      </td>
                    )}

                    {selectedTab === "Pending" && (
                      <td className="text-left font-medium text-base text-black  px-6">
                        {data.queueFor} days
                      </td>
                    )}

                    {selectedTab === "Completed" && (
                      <td className=" font-medium text-sm text-black text-left  px-6">
                        {data.actionReason}{" "}
                      </td>
                    )}
                    {selectedTab === "Completed" && (
                      <td className="font-medium text-base text-black text-left   pl-3 pr-6">
                        {data.timeToClose} days{" "}
                      </td>
                    )}
                    <td className="font-medium text-sm text-left  ">
                      {data.dateAdded}
                    </td>

                    {selectedTab === "Pending" && (
                      <td className=" px-6">
                        <p className="flex flex-col text-left">
                          <span className="font-medium text-base text-black">
                            {data.reviewStatus}
                          </span>
                          {data.reviewDate && (
                            <span className="font-medium text-xs">
                              {data.reviewDate}
                            </span>
                          )}
                        </p>
                      </td>
                    )}

                    {selectedTab === "Completed" && (
                      <td className=" pl-3">
                        <p className="flex flex-col text-left">
                          <span className="font-medium text-sm text-black">
                            {data.actionTakenByName}
                          </span>
                          <span className="font-medium text-sm">
                            {data.actionTakenByEmail}
                          </span>
                        </p>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p className="h-screen text-center mt-8 font-bold text-xl">No Results Found</p>
        )}
      </div>
    </>
  );
};

export default DashboardTable;
