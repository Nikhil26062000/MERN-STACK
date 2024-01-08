
require('dotenv').config();
const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db");

//?Middleware
app.use(express.json()); //parses incoming requests with JSON payloads

// !Mount the Router : To use the router in your main Express app , you can "mount" it at a specific URL prefix

app.use("/api/auth", router);

// !below code is also a way to setup route but we are prefering the above method

// app.get("/", (req,res)=>{
//     res.status(200).send("Welcome Nikhil");
// });

// app.get("/register",(req,res)=>{
//     res.status(200).send("This is Registration page");
// })

connectDb().then(() => {
  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
