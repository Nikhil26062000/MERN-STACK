import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import TechCards from "../components/TechCards";
import { useAuth } from "../store/auth";
import { motion } from 'framer-motion';

const Home = () => {

 const {user} = useAuth();



  return (
    <>
      <div className="container mx-auto mt-10 ">
        {/* Header */}
        <header className="text-center mb-8">

        <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      
      className="text-4xl font-bold text-blue-500"
    >
    Welcome {user?`${user.username}`:`to our website`}
    </motion.h1>



          <h1 className="text-4xl font-bold"> </h1>
          <p className="text-lg text-gray-600">
            Your go-to place for amazing stuff!
          </p>
        </header>

        {/* About MERN */}
       

        <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
       
      >
        <section className="bg-gray-200 w-[90%] py-16 my-10 px-5 rounded-lg mx-auto">
        <div className="container mx-auto ">
            <h2 className="text-3xl font-bold text-center mb-8">
              MERN Stack Development
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg mb-4">
                  MERN stack is a powerful combination of technologies -
                  MongoDB, Express.js, React, and Node.js. It allows for
                  seamless full-stack development, making it a popular choice
                  for building modern web applications.
                </p>
                <p className="text-lg mb-4">
                  MongoDB: A NoSQL database that provides flexibility and
                  scalability.
                </p>
                <p className="text-lg mb-4">
                  Express.js: A minimalist web application framework for
                  Node.js, simplifying API development.
                </p>
              </div>
              <div>
                <p className="text-lg mb-4">
                  React: A front-end library for building user interfaces, known
                  for its component-based architecture and reactivity.
                </p>
                <p className="text-lg mb-4">
                  Node.js: A runtime environment for executing JavaScript code
                  outside the browser, ideal for server-side applications.
                </p>
                <p className="text-lg mb-4">
                  Together, these technologies enable developers to create
                  scalable, efficient, and modern web applications.
                </p>
              </div>
            </div>
          </div>
        </section>
      </motion.div>






          

        {/* Cards section */}


        <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 5 }}
        className="box"
      >
         <section className="w-[90%] mx-auto">
          <TechCards />
        </section>
      </motion.div>

       

        {/* About and Product */}


        <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="box"
      >
         <section className="grid grid-cols-1 gap-6 w-[90%] mx-auto md:grid-cols-2">
          <section className="bg-gray-100 p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p>Learn about our company and our mission.</p>
            <NavLink
              to="/about"
              className="text-blue-500 hover:underline block mt-2"
            >
              Read more
            </NavLink>
          </section>

          <section className="bg-gray-100 p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Our Products</h2>
            <p>Discover our wide range of high-quality products.</p>
            <NavLink
              to="/service"
              className="text-blue-500 hover:underline block mt-2"
            >
              Explore products
            </NavLink>
          </section>
        </section>
      </motion.div>
       

        {/* Footer */}
        <footer className="mt-10 text-center text-gray-500">
          <p>&copy; 2023 YourWebsite.com. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default Home;
