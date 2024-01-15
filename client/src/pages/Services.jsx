import React, { useEffect, useState } from "react";
import ServiceCards from "../components/ServiceCards";
import { motion } from 'framer-motion';

const Services = () => {
  const [cardData, setCardData] = useState();
  const getdata = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data/service", {
        method: "GET",
       
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setCardData(data);
      }
    } catch (error) {
      console.log("Error while fetching data on service page: " + error);
    }
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div className="container w-[90%] mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        MERN Stack Development Services
      </h2>

      <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded shadow p-6">
          <h3 className="text-xl font-semibold mb-2">MongoDB</h3>
          <p className="text-gray-700">
            MongoDB is a flexible and scalable NoSQL database used in MERN stack
            applications for data storage. It offers high performance and is
            schema-less.
          </p>
        </div>
        <div className="bg-white rounded shadow p-6">
          <h3 className="text-xl font-semibold mb-2">Express.js</h3>
          <p className="text-gray-700">
            Express.js is a powerful framework used in MERN stack for building
            robust and scalable backend APIs. It simplifies routing and
            middleware handling.
          </p>
        </div>
        <div className="bg-white rounded shadow p-6">
          <h3 className="text-xl font-semibold mb-2">React</h3>
          <p className="text-gray-700">
            React is a popular front-end library used in MERN stack for building
            interactive and responsive user interfaces. It offers
            component-based architecture.
          </p>
        </div>
        <div className="bg-white rounded shadow p-6">
          <h3 className="text-xl font-semibold mb-2">Node.js</h3>
          <p className="text-gray-700">
            Node.js is the runtime environment used in MERN stack development.
            It allows server-side execution of JavaScript, enabling full-stack
            JavaScript applications.
          </p>
        </div>
        <div className="bg-white rounded shadow p-6">
          <h3 className="text-xl font-semibold mb-2">Tailwind CSS</h3>
          <p className="text-gray-700">
            Tailwind CSS is a utility-first CSS framework used in MERN stack
            projects for rapid UI development. It offers pre-designed utility
            classes.
          </p>
        </div>
        <div className="bg-white rounded shadow p-6">
          <h3 className="text-xl font-semibold mb-2">JSX</h3>
          <p className="text-gray-700">
            JSX (JavaScript XML) is used in React for writing UI components. It
            allows mixing HTML-like syntax within JavaScript.
          </p>
        </div> 
      </div>
    </motion.div>
    

      <h2 className="text-3xl font-bold text-center my-8">
         Services we Provide
      </h2>

 <motion.div
    initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
     {cardData&&cardData.map((data, index) => {
        return (
          <ServiceCards
            key={index}
            name={data.name}
            price={data.price}
            description={data.description}
            usage={data.usage}
          />
        );
      })}
    </motion.div>
     
    </div>
  );
};

export default Services;
