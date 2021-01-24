import React, { useContext, useEffect, useRef, useState } from "react";
import "./AddGems.css";
import purple from "../../assets/purple.svg";
import Navbar from "../Navbar/Navbar";
import { Redirect, useHistory } from "react-router-dom";
import { AuthContext } from "../../Utility/AuthContext";
import { Transition } from "@tailwindui/react";
import axios from "axios";
import { MinusCircle } from "react-feather";

const Addgems = () => {
  const history = useHistory();
  const [gems, setGems] = useState(1);
  const [price, setPrice] = useState(5);
  const [openPayment, setOpenPayment] = useState(false);
  const [cardNumber, setCardNumber] = useState();
  const [cardHolderName, setCardHolderName] = useState();
  const [cvvCode, setCvvCode] = useState();
  const [userId, setUserId] = useState(localStorage.getItem("id"));
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    let individulPrice = 5;
    let totalprice = (gems * individulPrice).toFixed(2);
    setPrice(totalprice);
  }, [gems]);

  const handleLuckyPayment = (e) => {
    e.preventDefault();
    axios
      .post("/lucky-api/payment", {
        cardNumber,
        cvvCode,
        cardHolderName,
        gems,
        price,
        userId,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          localStorage.setItem("gems", res.data.UpdatedUser.gems);
          history.go("/");
        }
      });
  };
  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <Transition
        show={openPayment}
        enter="transition ease-out duration-500"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-500"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="w-full flex justify-center flex-wrap content-center h-screen">
          <div className="w-1/4 flex justify-center bg-white bg-opacity-50 shadow-md rounded">
            <div
              className="absolute mt-1 cursor-pointer"
              style={{ marginLeft: "22rem" }}
              onClick={() => setOpenPayment(!openPayment)}
            >
              <MinusCircle color="white" size={20} />
            </div>
            <form
              className="flex flex-col leading-8 m-5"
              onSubmit={(e) => handleLuckyPayment(e)}
            >
              <h1 className="text-2xl flex font-bold justify-center my-2 formtext">
                LUCKY PAYMENT
              </h1>
              <label className="text-yellow-50" htmlFor="cardNumber">
                CARD NUMBER
              </label>
              <input
                className="w-80 rounded-lg shadow-md pl-2 focus:outline-none"
                type="number"
                name="cardNumber"
                placeholder="XXXX XXXX XX12 3456"
                onChange={(e) => setCardNumber(e.target.value)}
                value={cardNumber}
                required
              ></input>
              <label className="text-yellow-50 mt-5" htmlFor="CvvCode">
                CVV CODE
              </label>
              <input
                className="w-80 rounded-lg shadow-md pl-2 focus:outline-none"
                type="number"
                name="CvvCode"
                placeholder="123"
                onChange={(e) => setCvvCode(e.target.value)}
                value={cvvCode}
                required
              ></input>
              <label className="text-yellow-50 mt-5" htmlFor="cardHolder">
                CARD HOLDER NAME
              </label>
              <input
                className="w-80 rounded-lg shadow-md pl-2 focus:outline-none"
                type="text"
                name="cardHolder"
                placeholder="Optional"
                onChange={(e) => setCardHolderName(e.target.value)}
                value={cardHolderName}
              ></input>
              <h1 className="flex justify-center mt-5 text-gray-700 font-bold text-xl">
                $ {price && price}
              </h1>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 rounded my-2 mt-5"
                type="submit"
              >
                PAY
              </button>
            </form>
          </div>
        </div>
      </Transition>
      {!openPayment && (
        <>
          <Navbar />
          <div className="flex justify-center">
            <div className="glasseffectuser w-4/5 p-5">
              <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
                <div className="w-1/3 bg-cover  hidden lg:flex justify-center">
                  <img className="h-48" src={purple} alt="Purple" />
                </div>
                <div className="w-2/3 p-4">
                  <div className="flex">
                    <div className="formtext font-bold text-xl">Purple Gem</div>
                  </div>
                  <div className="flex justify-center block lg:hidden">
                    <img className="h-48" src={purple} alt="Purple" />
                  </div>
                  <p className="mt-2 text-gray-600 text-sm">
                    Per Gem cost is 5 dollars.
                    <br /> **At the time of withdrawal 2% will be deducted as
                    convenience charge
                  </p>
                  <div className="flex item-center mt-5 ">
                    <input
                      type="number"
                      value={gems}
                      placeholder="Add Gems"
                      className="w-1/2 lg:w-1/6 py-3 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline pl-5"
                      onChange={(e) => setGems(e.target.value)}
                    />
                  </div>
                  <div className="flex item-center justify-center mt-3 lg:flex item-center justify-between">
                    <h1 className="text-gray-700 font-bold text-xl mt-4">
                      $ {price ? price : "0"}
                    </h1>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded my-2 uppercase"
                      onClick={() => setOpenPayment(true)}
                    >
                      Add Gems
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Addgems;
