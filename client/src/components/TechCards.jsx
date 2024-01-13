import React from "react";
import { motion } from 'framer-motion';

const TechCards = () => {
  const techData = [
    {
      name: "MongoDB",
      description:
        "MongoDB is a NoSQL database known for its flexibility and scalability.",
      image:
        "https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png", // Replace with your image link or filename
    },
    {
      name: "Node.js",
      description:
        "Node.js is a runtime environment for executing JavaScript code outside the browser.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsg42QsKGeegWHT01o2L7oLpk5D29x8w2yL_K7EYjGAA&s", // Replace with your image link or filename
    },
    {
      name: "React.js",
      description:
        "React.js is a JavaScript library for building user interfaces.",
      image:
        "https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png", // Replace with your image link or filename
    },
    {
      name: "Express.js",
      description: "Express.js is a web application framework for Node.js.",
      image:
        "https://media.licdn.com/dms/image/D4E12AQEBg943ptCYpg/article-cover_image-shrink_720_1280/0/1686391647921?e=2147483647&v=beta&t=sTfwUvcIfW7Fuby7hMluDfuRJK3HfYMMWc2SyZR7-GA", // Replace with your image link or filename
    },
    {
      name: "HTML",
      description:
        "HTML (HyperText Markup Language) is the standard markup language for creating web pages.",
      image:
        "https://www.freecodecamp.org/news/content/images/2021/08/html.png", // Replace with your image link or filename
    },
    {
      name: "CSS",
      description:
        "CSS (Cascading Style Sheets) is used for styling the appearance of web pages.",
      image:
        "https://repository-images.githubusercontent.com/179574410/54cd7e80-6142-11e9-8f2e-c3774582a097", // Replace with your image link or filename
    },
    {
      name: "Tailwind CSS",
      description:
        "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
      image:
        "https://tailwindcss.com/_next/static/media/tailwindui-small@75.8bb955b2.jpg", // Replace with your image link or filename
    },
    {
      name: "JSX",
      description:
        "JSX (JavaScript XML) is a syntax extension used in React for writing UI components.",
      image:
        "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687457/retina_1708x683_staging.toptal.net_javascript_emulating-react-jsx-in-vanilla-javascript-816eafe06505b888585d08474f2166e7.png", // Replace with your image link or filename
    },
    // Add more technologies as needed
  ];

  return (
    
     <>
        <div className="container mx-auto py-8">
          <h2 className="text-3xl font-bold text-center mb-8">Technologies</h2>
          <div className="flex justify-center flex-wrap gap-10   md:justify-between">
            {techData.map((tech, index) => (
              <div
                key={index}
                className=" rounded shadow w-[300px] scale-100 hover:scale-105 transition-all duration-500 "
              >
                <div className="w-[300px] h-[200px]">
                  <img src={tech.image} alt={tech.name} className="w-[100%] " />
                </div>

                <div className="px-5">
                  <h3 className="text-xl font-semibold mb-2 text-gray-700">
                    {tech.name}
                  </h3>
                  <p className=" my-2 text-gray-700">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </>
     
    
  );
};

export default TechCards;
