import React from "react";
import "./Navbar.css";
import green from "./../../assets/green.svg";
import purple from "./../../assets/purple.svg";
import orange from "./../../assets/orange.svg";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="glasseffectnavbar w-4/5 h-1/6">
          <nav class="rounded">
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div class="relative flex items-center justify-between h-16">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <button
                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    aria-expanded="false"
                  >
                    <span class="sr-only">Open main menu</span>

                    <svg
                      class="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>

                    <svg
                      class="hidden h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div class="flex-shrink-0 flex items-center">
                    <img
                      class="block lg:hidden h-8 w-auto"
                      src={green}
                      alt="Mainlogo"
                    />

                    <img
                      class="hidden lg:block h-8 w-auto"
                      src={green}
                      alt="Mainlogo"
                    />
                    <h1 className="font-black block p-2">Lucky Gems</h1>
                  </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div class="hidden sm:block">
                    <div class="flex space-x-4">
                      <div className="flex justify-center">
                        {/* purple gems count value */}
                        <h4 className="formtext mr-2">100</h4>
                        <img className="h-7 rounded-md" src={purple} />
                      </div>
                      <div className="flex justify-center">
                        {/* orange gems count value */}
                        <h4 className="formtext  mr-2">50</h4>
                        <img className="h-7 rounded-md" src={orange} />
                      </div>
                    </div>
                  </div>
                  <div class="ml-10 relative">
                    <div>
                      <button
                        class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        id="user-menu"
                        aria-haspopup="true"
                      >
                        <span class="sr-only">Open user menu</span>
                        <img
                          class="h-8 w-8 rounded-full"
                          src="https://images.pexels.com/photos/2804282/pexels-photo-2804282.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                          alt=""
                        />
                      </button>
                    </div>

                    {/* <div
                      class="origin-top-right absolute right-0 mt-2 w-48 rounded-md z-50 shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Your Profile
                      </a>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Settings
                      </a>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <div class="hidden sm:hidden">
              <div class="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="#"
                  class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Gems
                </a>
                <a
                  href="#"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Your Gems
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
