
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { TiContacts } from "react-icons/ti";
import { FaUserAlt } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";

const AdminLayout = () => {
  return (
    <>
      <div className="flex justify-evenly p-10">
        <ul className="flex">
          <li className="m-2 w-[20%]">
            <NavLink to="/admin/users"><FaUserAlt/>Users</NavLink>
          </li>
          <li className="m-2 w-[20%]">
            <NavLink to="/admin/contacts"><TiContacts/>Contacts</NavLink>
          </li>
          <li className="m-2 w-[20%]">
            <NavLink to="/service"><MdMiscellaneousServices/>Services</NavLink>
          </li>
          <li className="m-2 w-[20%]">
            <NavLink to="/"><IoMdHome/>Home</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default AdminLayout;
