import React from "react";
import JunoLogo from "../assets/JunoLogo.svg";
import ElonProfilePic from "../assets/ElonProfilePic.svg";
import { GrOverview } from "react-icons/gr";
import { FaHandshake } from "react-icons/fa6";
import { MdMonitorHeart } from "react-icons/md";
import { FaFlag } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { MdReportGmailerrorred } from "react-icons/md";

const Sidepanel = () => {
  return (
    <div className="sm:max-w-[258px] max-w-[50px] flex flex-col h-screen sm:p-[32px] items-center justify-between border-r-2 border-gray-500 fixed">
      
      <div className="sm:w-[194px] flex flex-col items-center gap-[48px] ">
        <div>
          <img className="h-24" src={JunoLogo}  alt="JunoLogo" />
        </div>

        <ul className="flex flex-col  gap-[25px] sm:gap-[12px] w-auto sm:w-full">
          <li className="text-neutral-500 px-2  font-medium cursor-pointer">
            <span className="sm:hidden block text-2xl">
              <GrOverview />
            </span>
            <span className="hidden sm:block">Overview</span>
          </li>

          <li className="text-neutral-500 px-2 font-medium cursor-pointer">
            <span className="sm:hidden block text-2xl">
              <FaHandshake />
            </span>
            <span className="hidden sm:block"> Onboarding</span>
          </li>

          <li className="text-indigo-700 font-medium cursor-pointer bg-indigo-100 p-2  rounded-lg">
            <span className="sm:hidden block text-2xl">
              <MdMonitorHeart />
            </span>
            <span className="hidden sm:block"> Monitoring</span>
          </li>

          <li className="text-neutral-500 px-2 font-medium cursor-pointer">
            <span className="sm:hidden block text-2xl">
              <FaFlag/>
            </span>
            <span className="hidden sm:block"> Flagging</span>
          </li>

          <li className="text-neutral-500 px-2 font-medium cursor-pointer">
            {" "}
           
            <span className="sm:hidden block text-2xl">
              <FaMoneyBill />
            </span>
            <span className="hidden sm:block">Source of Income</span>
          </li>

          <li className="text-neutral-500  px-2 font-medium cursor-pointer">
          <span className="sm:hidden block text-2xl">
              <MdReportGmailerrorred />
            </span>
            <span className="hidden sm:block">UAR</span>
          </li>
        </ul>
      </div>

      <div className="flex sm:gap-[8px] w-full cursor-pointer">
        <img
          src={ElonProfilePic}
          alt="ElonProfilePic"
          className="h-[38px] w-[38px] "
        />
       
        <div className="sm:flex sm:flex-col hidden">
          <h4 className="text-black font-medium">Elon Musk</h4>
          <p className="text-neutral-500 text-sm">elon@twitter.com</p>
        </div>
      </div>
    </div>
  );
};

export default Sidepanel;
