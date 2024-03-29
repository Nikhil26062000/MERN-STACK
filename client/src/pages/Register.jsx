import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import {  toast } from 'react-toastify';

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errMsg,setErrMsg] = useState();

  const navigate = useNavigate();
  const {storeTokenInLocalStorage} = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement registration logic here, e.g., sending data to a server
    console.log(formData); // For demonstration, log the form data

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(response);
      const responseData = await response.json();
      

      if (response.ok) {

        //getting token of user who register 
       
        //storing data in local storage using useContext hook
        storeTokenInLocalStorage(responseData.token);

        setFormData({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        toast.success("Registration successful");
        navigate("/");
      }else{
        // alert(responseData.message?responseData.message:responseData.extraDetails);
        // console.log(responseData.message?responseData.message:responseData.extraDetails);
        setErrMsg(responseData.message);
        toast.error(responseData.message);
      }
    } catch (error) {
      console.log(
        "Error while connecting to server in registration page : " + error
      );
      toast.error(error.message);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-700 text-center mt-[60px] mb-12">
        REGISTRATION FORM
      </h1>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {/* <p className="text-red-600 text-xs pb-4">{errMsg?errMsg:""}</p> */}
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
