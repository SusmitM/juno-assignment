import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const ReasonValues = ["Flagging logics triggered", "Flagged", "Closed"];
const CloseAccountModal = ({ closeModal }) => {
  const [accountData, setAccountData] = useState({
    email: "",
    uar: "",
    reason: "",
    note: "",
    closureFees: "",
  });

  const [openReasonTab, setOpenReasonTab] = useState(false);

  const isFormFilled = () => {
    for (let formItem in accountData) {
      if (accountData[formItem] === "") {
        return false;
      }
    }
    return true;
  };

  const handelFormSubmit = (e) => {
    e.preventDefault();
    if (isFormFilled()) {
      closeModal();
    }
  };

  return (
    <div
      onClick={closeModal}
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50"
    >
      <div
        className="bg-white p-5 rounded-lg w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header flex justify-between items-center mb-4">
          <h2 className="text-center text-lg font-bold">Close Account</h2>
          <button onClick={closeModal} className="text-gray-500">
            <RxCross2 />
          </button>
        </div>
        <form onSubmit={handelFormSubmit}>
          <div className="modal-body mt-8">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-normal text-gray-400"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-white border border-gray-300 text-black p-2 rounded focus:outline-none focus:border-indigo-500 w-full"
              placeholder="Enter your email"
              onChange={(e) => {
                setAccountData((prev) => ({ ...prev, email: e.target.value }));
              }}
            />

            <div className="flex gap-x-9 items-baseline mt-6">
              <p className="text-black text-sm font-medium ">
                Want to file UAR?
              </p>
              <label htmlFor="uar-yes" className="mr-4">
                <input
                  type="radio"
                  id="uar-yes"
                  name="uar"
                  value="yes"
                  className="mr-2"
                  onChange={(e) => {
                    setAccountData((prev) => ({
                      ...prev,
                      uar: e.target.value,
                    }));
                  }}
                />
                Yes
              </label>
              <label htmlFor="uar-no">
                <input
                  type="radio"
                  id="uar-no"
                  name="uar"
                  value="no"
                  className="mr-2"
                  onChange={(e) => {
                    setAccountData((prev) => ({
                      ...prev,
                      uar: e.target.value,
                    }));
                  }}
                />
                No
              </label>
            </div>

            <p className="block mt-6 text-sm font-normal text-gray-400">
              Reason
            </p>
            <div className="relative flex flex-col items-center rounded mt-1.5 px-2 w-full">
              <button
                className="bg-white border border-gray-300 text-black p-2 w-full text-left items-center justify-between font-normal text-sm rounded-lg flex gap-1.5"
                onClick={(e) => {
                  setOpenReasonTab((prev) => !prev);
                  e.stopPropagation();
                }}
              >
                <span className="flex-grow">{accountData.reason}</span>
                <span>
                  {openReasonTab ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </button>

              {openReasonTab && (
                <div className="bg-white z-10 absolute top-10 p-2 text-slate-500 font-medium text-sm w-full border border-slate-200 rounded-lg ">
                  {ReasonValues.map((value, index) => (
                    <div
                      onClick={() => {
                        setAccountData((prev) => ({ ...prev, reason: value }));
                        setOpenReasonTab(false);
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

            <label
              htmlFor="note"
              className="block mt-6 mb-2 text-sm font-normal text-gray-400"
            >
              Note
            </label>
            <textarea
              id="note"
              name="note"
              className="appearance-none border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-500 w-full"
              placeholder="Enter your note"
              rows="2"
              onChange={(e) => {
                setAccountData((prev) => ({ ...prev, note: e.target.value }));
              }}
            ></textarea>
          </div>

          <div className="modal-footer flex items-baseline justify-between mt-7">
            <label
              htmlFor="charge-closure-fees"
              className="mr-4 text-gray-500 text-sm font-normal"
            >
              <input
                type="radio"
                id="charge-closure-fees"
                name="chargeFees"
                value="yes"
                className="mr-2"
                onChange={(e) => {
                  setAccountData((prev) => ({
                    ...prev,
                    closureFees: e.target.value,
                  }));
                }}
              />
              Charge Closure Fees
            </label>
            <button
              type="submit"
              disabled={!isFormFilled()}
              style={{
                backgroundColor: isFormFilled() ? "#5234f8" : "#E4E4E4",
                color: isFormFilled() ? "white" : "#ADADAD",
              }}
              className="px-8 py-4 rounded-lg text-sm font-medium"
            >
              Close Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CloseAccountModal;
