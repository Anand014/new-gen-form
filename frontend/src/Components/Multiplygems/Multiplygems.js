import React from "react";
import purple from "../../assets/purple.svg";
import crystal from "../../assets/crystal.svg";

const Multiplygems = () => {
  return (
    <div className="flex justify-center">
      <div className="glasseffectuser w-4/5 p-5">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="rounded bg-yellow-50 shadow-lg bg-opacity-50">
            <div class="grid justify-items-center">
              <h1 className="text-2xl font-bold my-2 formtext">Your Gems</h1>
              <img className="w-1/3" src={purple} />
              <div className="mt-6">
                <span className="z-10 h-full leading-snug font-normal absolute absolute items-center justify-center w-8 pl-3 py-3">
                  <img src={purple} />
                </span>
                <input
                  type="number"
                  placeholder="Add Gems"
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline pl-10"
                />
              </div>
            </div>
          </div>
          <div className="w-3/4 rounded bg-yellow-50 bg-opacity-50 shadow-lg justify-self-center">
            <div class="grid justify-items-center">
              <div> hello</div>
            </div>
          </div>
          <div className="rounded bg-yellow-50 bg-opacity-50 shadow-lg">
            <div class="grid justify-items-center">
              <h1 className="text-2xl font-bold my-2 formtext">Upgrade</h1>
              <img className="w-1/3" src={crystal} />
              <h4 className="text-lg font-bold my-2 formtext">200</h4>
              <div class="flex flex-col md:flex-row">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 m-2 rounded">
                  1.5x
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 m-2 rounded">
                  2x
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 m-2 rounded">
                  5x
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 m-2 rounded">
                  10x
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 m-2 rounded">
                  20x
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Multiplygems;
