import React from 'react';

const About = () => {
  return (
    <div className="container w-[90%] mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-8">About MERN Stack Development</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded shadow p-6">
          <h3 className="text-xl font-semibold mb-2">What is MERN Stack?</h3>
          <p className="text-gray-700">
            MERN stack is a JavaScript-based technology stack used for full-stack web development. It consists of MongoDB, Express.js, React, and Node.js.
          </p>
        </div>
        <div className="bg-white rounded shadow p-6">
          <h3 className="text-xl font-semibold mb-2">Learning MERN Stack</h3>
          <p className="text-gray-700">
            As a student, you can start learning MERN stack by gaining proficiency in each component: <br />
            - MongoDB for database management <br />
            - Express.js for building server-side applications <br />
            - React for creating dynamic user interfaces <br />
            - Node.js for server-side runtime environment
          </p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Tips for Learning MERN Stack:</h3>
        <ul className=" text-center text-gray-700">
          <li>Start with a solid understanding of JavaScript and ES6+</li>
          <li>Explore MongoDB for NoSQL database management</li>
          <li>Learn Express.js to create APIs and backend services</li>
          <li>Master React for building modern UIs</li>
          <li>Understand Node.js for server-side development</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
