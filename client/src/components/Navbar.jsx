import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Assuming you use React Router for navigation

const Navbar = () => {
  return (
    <div className="bg-gray-800">
    <nav className="w-[90%] mx-auto flex items-center justify-between  text-white p-4">
      <div className="flex items-center">
        <NavLink to="/" className="flex items-center">
          
          <span className="font-semibold">MERN STACK</span>
        </NavLink>
      </div>
      <ul className="flex space-x-4">
        <li>
          <NavLink to="/" className="hover:text-gray-300">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="hover:text-gray-300">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="hover:text-gray-300">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/service" className="hover:text-gray-300">Services</NavLink>
        </li>
        <li>
          <NavLink to="/login" className="hover:text-gray-300">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register" className="hover:text-gray-300">Register</NavLink>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
