import React, { useEffect, useState } from "react";
import "./ShowUser.css";
import purple from "../../assets/purple.svg";
import Navbar from "../Navbar/Navbar";
//we will do something
const Addgems = () => {
  const [gems, setGems] = useState("1");
  const [price, setPrice] = useState("5");

  useEffect(() => {
    let individulPrice = 5;
    let totalprice = (gems * individulPrice).toFixed(2);
    setPrice(totalprice);
  }, [gems]);

  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="glasseffectuser w-4/5 p-5">
          <div class="flex bg-white shadow-md rounded-lg overflow-hidden">
            <div class="w-1/3 bg-cover  hidden lg:flex justify-center">
              <img class="h-48" src={purple} alt="Purple" />
            </div>
            <div class="w-2/3 p-4">
              <div className="flex">
                <div class="formtext font-bold text-xl">Purple Gem</div>
              </div>
              <div className="flex justify-center block lg:hidden">
                <img class="h-48" src={purple} alt="Purple" />
              </div>
              <p class="mt-2 text-gray-600 text-sm">
                Per Gem cost is 5 dollars.
                <br /> **At the time of withdrawal 2% will be deducted as
                convenience charge
              </p>
              <div class="flex item-center mt-5 ">
                <input
                  type="number"
                  value={gems}
                  placeholder="Add Gems"
                  className="w-1/2 lg:w-1/6 py-3 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline pl-5"
                  onChange={(e) => setGems(e.target.value)}
                />
              </div>
              <div class="flex item-center justify-center mt-3 lg:flex item-center justify-between">
                <h1 class="text-gray-700 font-bold text-xl mt-4">
                  $ {price ? price : "0"}
                </h1>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded my-2 uppercase">
                  Add Gems
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addgems;
