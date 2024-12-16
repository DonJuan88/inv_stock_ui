import React, { useState } from "react";
import {
  MdOutlineDashboard,
  MdDashboardCustomize,
  MdBrightnessAuto,
} from "react-icons/md";
import { FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";
const Home = () => {
  const menus = [
    { name: "Dashboard", link: "/", icon: MdDashboardCustomize, margin: true },
    { name: "Brand", link: "/", icon: MdBrightnessAuto },
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "Reports", link: "/reports", icon: FaChartLine },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">
      <div
        className={`bg-blue-800 min-h-screen ${
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
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-blue-600 rounded-md`}
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
            </Link>
          ))}
        </div>
      </div>
      <div className="m-3 text-xl text-gray-900 font-semibold">Testing</div>
    </section>
  );
};

export default Home;
