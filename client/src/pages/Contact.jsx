import React, { useState } from 'react';
import { useAuth } from '../store/auth';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: '',
  });

  const [userData,setUserData] = useState(true);
  const {user} = useAuth();

  if(userData && user){
    setFormData({
      username: user.username,
      email: user.email,
      message: '',
    })

    setUserData(false);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission with formData
    console.log(formData); // For example: log the form data
    // You can perform further actions here (e.g., send data to a backend)
    try {
      if(formData.message=="") {
        return toast.error("Message is empty 👎");
      }
      
    const response = await fetch('http://localhost:5000/api/form/contact',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(formData)
    })

    if(response.ok){
      // alert("Message send successfully");
      setFormData({
        username: user.username,
      email: user.email,
      message: '',
      })
      // console.log("Message sent succesfully");
      toast.success("Message sent successfully");

    }
    } catch (error) {
      console.log("error while submiting message",error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12 mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

      <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="box"
    >
       <form className="bg-white shadow-md rounded px-8 pt-6 pb-8" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
            id="message"
            placeholder="Your message here"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </motion.div>
   
    </div>
  );
};

export default Contact;
