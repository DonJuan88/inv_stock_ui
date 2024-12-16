import React, { useState } from "react";
import {
  MdOutlineDashboard,
  MdDashboardCustomize,
  MdLan,
  MdOutlineContactPage,
} from "react-icons/md";

import { FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";

function SideBar() {
  const [open, setOpen] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(false);

  const menus = [
    { name: "Dashboard", link: "/", icon: MdDashboardCustomize, margin: true },
    {
      name: "Masters",
      link: "#", // Tetap "#" jika submenu digunakan
      icon: MdLan,
      submenu: [
        { name: "Brand", link: "/brands" },
        { name: "Category", link: "/category" },
        { name: "Item", link: "/products" },
      ],
    },
    {
      name: "Supplier and Customer",
      link: "#", // Tetap "#" jika submenu digunakan
      icon: MdOutlineContactPage,
      submenu: [
        { name: "Supplier", link: "/suppliers" },
        { name: "Customer", link: "/customers" },
      ],
    },
    {
      name: "Reports",
      link: "#", // Tetap "#" jika submenu digunakan
      icon: FaChartLine,
      submenu: [
        { name: "Sales Report", link: "/reports/sales" },
        { name: "Inventory Report", link: "/reports/inventory" },
      ],
    },

    { name: "Reports", link: "/reports", icon: FaChartLine },
  ];
  return (
    <section className="flex gap-6">
      <div
        className={`fiexd top-0 left-0 bg-blue-800 min-h-screen ${
          open ? `w-72` : `w-16`
        } duration-500 text-gray-200 px-4`}
      >
        <div className="py-3 flex justify-end">
          <MdOutlineDashboard
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>

        <div className="mt-4 flex flex-col gap-4 relative">
          {menus.map((menu, i) => (
            <div key={i}>
              {/* Menu Utama */}
              <div
                className={` ${
                  menu?.margin && "mt-5"
                } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-blue-600 rounded-md cursor-pointer`}
                onClick={() => {
                  // Toggle submenu hanya jika submenu ada
                  if (menu?.submenu) {
                    setOpenDropdown(openDropdown === i ? null : i);
                  }
                }}
              >
                <div>{React.createElement(menu?.icon, { size: "26" })}</div>
                <h2
                  style={{ transitionDelay: `${i + 3}00ms` }}
                  className={`whitespace-pre duration-500 ${
                    !open && `opacity-0 translate-x-28 overflow-hidden`
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-blue-800 font-semibold whitespace-pre text-white
          rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1
          group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  {menu?.name}
                </h2>
                {/* Icon untuk indikasi dropdown */}
                {menu?.submenu && (
                  <svg
                    className={`w-5 h-5 ml-auto transform duration-300 ${
                      openDropdown === i ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </div>

              {/* Submenu */}
              {menu?.submenu && openDropdown === i && (
                <div className="pl-8">
                  {menu?.submenu.map((submenu, j) => (
                    <Link
                      to={submenu.link}
                      key={j}
                      className="flex items-center text-sm gap-3 font-medium p-2 hover:bg-blue-700 rounded-md"
                    >
                      <div>
                        {/* {React.createElement(submenu?.icon, { size: "26" })} */}
                      </div>
                      {submenu.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="m-3 text-xl text-gray-900 font-semibold"></div>
    </section>
  );
}

export default SideBar;
