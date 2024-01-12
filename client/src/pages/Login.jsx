import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../store/auth";

const Login = () => {
  const {storeTokenInLocalStorage,isLoggedIn} = useAuth();


  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement login logic here, e.g., sending data to a server
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(response);
      
      if (response.ok) {
        console.log("Login successful via database");
        const responseData = await response.json();
        console.log("Fetching token of login user from database",responseData.token);
        storeTokenInLocalStorage(responseData.token);
       // console.log("tokenStored and value of islogedIn is :",isloggedIn);
        setFormData({
          email:"",
          password:"",
        })
        navigate("/");
      }
    } catch (error) {
      console.log("Error while login to database", error);
    }
  };

  return (
    <>
      <div>
        <h1 className="font-bold text-3xl text-gray-700 text-center mt-[100px] mb-14">
          LOGIN FORM
        </h1>
        <div className="flex justify-center ">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8"
          >
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
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
