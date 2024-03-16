import React, { useState } from "react";
import { Link } from "react-router-dom";
import TeachersTable from "./TeachersTable";

const Sidebar = () => {
  const [teachers, setTeachers] = useState("false");

  const sideMenus = [
    { name: "Users", href: "#" },
    { name: "Teachers", href: "/teachersTable" },
    { name: "Students", href: "#" },
    { name: "courses", href: "#" },
  ];
  return (
    <div className="flex flex-col bg-sidebarColor w-60 p-3 text-black">
      <div className="flex gap-2 px-1 py-3">
        <Link to="/">
          <img
            src="../public/images/logo.png"
            alt="logo"
            className="w-10 rounded-md"
          />
        </Link>
        <p className="font-bold text-xl">GANJ</p>
      </div>
      <div className="flex-1">
        {/* <Link to="/dashboard/teachers">Teachers</Link> */}
        <div className="flex flex-col text-lg">
          {sideMenus.map((item) => (
            <Link to={item.href} key={item.name}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div>bottom</div>
    </div>
  );
};

export default Sidebar;
