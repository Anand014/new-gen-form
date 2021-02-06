import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import green from "./../../assets/green.svg";
import purple from "./../../assets/purple.svg";
import plus from "./../../assets/plusCircle.svg";
import pluswhite from "./../../assets/plus-circle-white.svg";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Transition } from "@tailwindui/react";
import { AuthContext } from "../../Utility/AuthContext";

const Navbar = () => {
  const history = useHistory();
  const [profileToggle, setProfileToggle] = useState(false);
  const [hamburgerMenuToggle, setHamburgerMenuToggle] = useState(false);
  const [name, setName] = useState(`${localStorage.getItem("name")}`);
  const [image, setimage] = useState(`${localStorage.getItem("image")}`);
  const [gems, setGems] = useState(`${localStorage.getItem("gems")}`);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser === null) {
      return <Redirect to="/login" />;
    }
  });
  useEffect(() => {
    setGems(`${localStorage.getItem("gems")}`);
  });

  const handleLogOut = () => {
    localStorage.clear();
    history.go("/login");
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="glasseffectnavbar w-4/5 h-1/6 static z-50">
          <nav className="rounded">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <button
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    aria-expanded="false"
                    onClick={() => setHamburgerMenuToggle(!hamburgerMenuToggle)}
                  >
                    <span className="sr-only">Open main menu</span>

                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>

                    <svg
                      className="hidden h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src={green}
                      alt="Mainlogo"
                    />

                    <img
                      className="hidden lg:block h-8 w-auto"
                      src={green}
                      alt="Mainlogo"
                    />
                    <Link to="/">
                      <h1 className="font-black block p-2">Lucky Gems</h1>
                    </Link>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="hidden sm:block">
                    <div className="flex space-x-4">
                      <div className="flex justify-center">
                        <Link to="/addgems">
                          {" "}
                          <img
                            className="pr-2 mb-1 cursor-pointer fill-current text-white"
                            src={plus}
                          />
                        </Link>

                        <h4 className="formtext font-bold mr-2">{gems}</h4>
                        <img className="h-7 rounded-md" src={purple} />
                      </div>
                      {/* <div className="flex justify-center">
                        <h4 className="formtext  mr-2">50</h4>
                        <img className="h-7 rounded-md" src={orange} />
                      </div> */}
                    </div>
                  </div>
                  <div className="ml-10 relative ">
                    <div>
                      {profileToggle ? (
                        <button
                          className="bg-white bg-opacity-30 flex text-sm rounded-full shadow-lg focus:outline-none"
                          onClick={() => setProfileToggle(!profileToggle)}
                        >
                          <span className="sr-only">Open user menu</span>
                          {name && (
                            <h4
                              className="p-1 font-bold hidden sm:block"
                              style={{ marginTop: "0.4rem" }}
                            >
                              {name[0].toUpperCase() +
                                name.slice(1).toLowerCase()}
                            </h4>
                          )}

                          <img
                            className="m-0 h-8 w-8 rounded-full sm:m-1"
                            src={image}
                            alt=""
                          />
                        </button>
                      ) : (
                        <button
                          className="bg-white bg-opacity-30 flex text-sm rounded-full shadow-xl shadow-inner focus:outline-none ring-1 ring-white"
                          onClick={() => setProfileToggle(!profileToggle)}
                        >
                          <span className="sr-only">Open user menu</span>
                          {name && (
                            <h4
                              className="p-1 font-bold hidden sm:block"
                              style={{ marginTop: "0.4rem" }}
                            >
                              {name[0].toUpperCase() +
                                name.slice(1).toLowerCase()}
                            </h4>
                          )}

                          <img
                            className="m-0 h-8 w-8 rounded-full sm:m-1"
                            src={image}
                            alt=""
                          />
                        </button>
                      )}
                    </div>
                    <Transition
                      show={profileToggle}
                      enter="transition ease-out duration-75"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-150"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <div
                        className="origin-top-right absolute z-50 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                        role="menu"
                        aria-orientation="vertical"
                      >
                        <Link
                          to="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Your Profile
                        </Link>
                        <Link
                          to="/settings"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Settings
                        </Link>
                        <Link
                          onClick={handleLogOut}
                          to="/login"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Sign out
                        </Link>
                      </div>
                    </Transition>
                  </div>
                </div>
              </div>
            </div>
            <Transition
              show={hamburgerMenuToggle}
              enter="transition ease-out duration-300"
              enterFrom="transform opacity-0 scale-50"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-300"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-50"
            >
              <div className="block sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <div className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium flex flex-row justify-between">
                    <img className="h-7 rounded-md" src={purple} />
                    <Link to="/addgems">
                      {" "}
                      <img
                        className="pr-2 mb-1 cursor-pointer fill-current text-white"
                        src={pluswhite}
                      />
                    </Link>
                    <div>{gems}</div>
                  </div>
                </div>
              </div>
            </Transition>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
