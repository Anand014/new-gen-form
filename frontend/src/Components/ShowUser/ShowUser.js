import React from "react";
import "./ShowUser.css";
import purple from "../../assets/purple.svg";
import orange from "../../assets/orange.svg";
//we will do something
const ShowUser = () => {
  return (
    <div className="flex justify-center">
      <div className="glasseffectuser w-4/5 p-5">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div class="rounded bg-yellow-50 shadow-lg">
            <div className="flex justify-center">
              <img class="w-1/2" src={purple} alt="Purple" />
            </div>
            <div className="flex justify-center">
              <div class="formtext font-bold text-xl">Purple Gem</div>
            </div>
            <div class="flex justify-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded my-2">
                $5 Buy
              </button>
            </div>
          </div>
          <div class="rounded bg-yellow-50 shadow-lg">
            <div className="flex justify-center">
              <img class="w-1/2" src={orange} alt="Purple" />
            </div>
            <div className="flex justify-center">
              <div class="formtext font-bold text-xl">Orange Gem</div>
            </div>
            <div class="flex justify-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded my-2">
                $2 Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowUser;
