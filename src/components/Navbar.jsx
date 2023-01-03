import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  if (pathname == "/") {
    return (
      <>
        <nav className=" px-2 sm:px-4 py-2.5  bg-gray-900">
          <div className="container flex flex-wrap items-center justify-end  mx-auto">
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="flex flex-col p-4 mt-4 border border-gray-100   md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-gray-90">
                <li>
                  <button
                    onClick={() => {
                      localStorage.removeItem("user");
                      navigate("/login");
                    }}
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  } else {
    return <></>;
  }
};

export default Navbar;
