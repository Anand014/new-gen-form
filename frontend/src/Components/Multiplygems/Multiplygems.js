import React, { useContext, useEffect, useState } from "react";
import purple from "../../assets/purple.svg";
import crystal from "../../assets/crystal.svg";
import "./Multiplygems.css";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../../Utility/AuthContext";
import { Redirect } from "react-router-dom";

const header = {
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
};

const Multiplygems = () => {
  const [addGems, setAddGems] = useState("");
  const [multiplier, setMultiplier] = useState("");
  const [winRate, setWinRate] = useState("0.000");

  useEffect(() => {
    if (multiplier !== "") {
      let percent;
      percent = ((addGems * 100) / multiplier).toFixed(3);
      setWinRate(percent);
      console.log(percent);
    }
  }, [multiplier]);

  const handleTen = () => {
    setAddGems(10);
  };
  const handleTwenty = () => {
    setAddGems(20);
  };
  const handleFifty = () => {
    setAddGems(50);
  };
  const handleHundred = () => {
    setAddGems(100);
  };
  const handleTwoHundred = () => {
    setAddGems(200);
  };
  const handleMultiplierone = () => {
    if (addGems !== "") {
      let multiply;
      multiply = 1.5 * addGems;
      setMultiplier(multiply);
    }
  };
  const handleMultiplierTwo = () => {
    if (addGems !== "") {
      let multiply;
      multiply = 2 * addGems;
      setMultiplier(multiply);
    }
  };
  const handleMultiplierFive = () => {
    if (addGems !== "") {
      let multiply;
      multiply = 5 * addGems;
      setMultiplier(multiply);
    }
  };
  const handleMultiplierTen = () => {
    if (addGems !== "") {
      let multiply;
      multiply = 10 * addGems;
      setMultiplier(multiply);
    }
  };
  const handleMultiplierTwenty = () => {
    if (addGems !== "") {
      let multiply;
      multiply = 20 * addGems;
      setMultiplier(multiply);
    }
  };
  const { currentUser } = useContext(AuthContext);
  if (currentUser === null) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <Navbar />
      <div className="flex justify-center static z-10">
        <div className="glasseffectuser w-4/5 p-5">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="rounded bg-yellow-50 shadow-lg bg-opacity-50">
              <div className="grid justify-items-center">
                <h1 className="text-2xl font-bold my-2 formtext">Your Gems</h1>
                <img className="w-1/3" src={purple} />
                <div className="">
                  <span className="z-10 h-full leading-snug font-normal absolute absolute items-center justify-center w-8 pl-3 py-3">
                    <img src={purple} />
                  </span>
                  <input
                    type="number"
                    value={addGems}
                    placeholder="Add Gems"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline pl-10"
                    onChange={(e) => setAddGems(e.target.value)}
                  />
                </div>
                <div className="flex flex-row mt-2">
                  <button
                    className="w-12 bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 m-2 rounded"
                    onClick={handleTen}
                  >
                    10
                  </button>
                  <button
                    className="w-12 bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 m-2 rounded"
                    onClick={handleTwenty}
                  >
                    20
                  </button>
                  <button
                    className="w-12 bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 m-2 rounded"
                    onClick={handleFifty}
                  >
                    50
                  </button>
                  <button
                    className="w-12 bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 m-2 rounded"
                    onClick={handleHundred}
                  >
                    100
                  </button>
                  <button
                    className="w-12 bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 m-2 rounded"
                    onClick={handleTwoHundred}
                  >
                    200
                  </button>
                </div>
              </div>
            </div>
            <div className="w-3/4 rounded bg-yellow-50 bg-opacity-50 shadow-lg justify-self-center m-2 midbox">
              <div className="grid justify-items-center">
                <h1 className="text-xl formtext font-black text-white my-2 mt-32 mb-32 z-10">
                  {winRate}%
                </h1>
                {/* <h1 className="text-xl font-black text-green-500 my-2 mt-32 mb-32 z-10">
                  Congrats You Won!!!
                </h1> */}
                {/* <h2 className="text-md font-black text-red-500 my-2 mt-32 mb-32 z-10">
                  Opps!!! Better luck next time.
                </h2> */}
              </div>
            </div>
            <div className="rounded bg-yellow-50 bg-opacity-50 shadow-lg">
              <div className="grid justify-items-center">
                <h1 className="text-2xl font-bold my-2 formtext">Upgrade</h1>
                <img className="w-1/3" src={crystal} />
                {/* <div className="grid grid-cols-2 justify-items-center mt-2"> */}
                {/* <input
                  type="number"
                  value={multiplier}
                  placeholder="Win Gems"
                  className="w-3/4 justify-self-end text-center placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline mr-1"
                  onChange={(e) => setMultiplier(e.target.value)}
                /> */}
                <div className="bg-yellow-50 px-4 rounded mt-1">
                  {" "}
                  {/* justify-self-start ml-5 */}
                  <h4 className="text-lg font-bold my-2 formtext">
                    {multiplier ? multiplier.toFixed(2) : "0"}
                  </h4>
                </div>
                {/* </div> */}
                <div className="flex flex-row mt-2">
                  <button
                    className="w-12 bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 m-2 rounded"
                    onClick={handleMultiplierone}
                  >
                    1.5x
                  </button>
                  <button
                    className="w-12 bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 m-2 rounded"
                    onClick={handleMultiplierTwo}
                  >
                    2x
                  </button>
                  <button
                    className="w-12 bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 m-2 rounded"
                    onClick={handleMultiplierFive}
                  >
                    5x
                  </button>
                  <button
                    className="w-12 bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 m-2 rounded"
                    onClick={handleMultiplierTen}
                  >
                    10x
                  </button>
                  <button
                    className="w-12 bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 m-2 rounded"
                    onClick={handleMultiplierTwenty}
                  >
                    20x
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-3">
        <button
          className="text-white bg-transparent border border-solid border-white opacity-80 hover:bg-yellow-50 hover:text-black font-bold uppercase text-xl px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1"
          type="button"
          style={{ transition: "all .15s ease" }}
        >
          upgrade
        </button>
      </div>
    </>
  );
};

export default Multiplygems;
