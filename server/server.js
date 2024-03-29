
require('dotenv').config();
const express = require("express");
const app = express();
const authRouter = require("./router/auth-router");
const serviceRoute = require("./router/service-router");
const connectDb = require("./utils/db");
const errorMiddleware = require('./middleware/error-middleware');
const contactRoute = require("./router/contact-router");
const cors = require("cors");
const adminRoute = require("./router/admin-router");

//? Middleware for cors and adding options for cors
const corsOptions = {
  origin:"http://localhost:5173",
  method:"GET, POST, PUT, DELETE, PATCH, HEAD",
  Credential:true,
}
app.use(cors(corsOptions));

//?Middleware
app.use(express.json()); //parses incoming requests with JSON payloads

// !Mount the Router : To use the router in your main Express app , you can "mount" it at a specific URL prefix

app.use("/api/auth", authRouter);
app.use("/api/form",contactRoute);
app.use("/api/data",serviceRoute);
app.use("/api/admin",adminRoute);

// !below code is also a way to setup route but we are prefering the above method

// app.get("/", (req,res)=>{
//     res.status(200).send("Welcome Nikhil");
// });

// app.get("/register",(req,res)=>{
//     res.status(200).send("This is Registration page");
// })


//? callig errorMiddleware just before starting the server .Its compulsory to call this middleware
app.use(errorMiddleware);

connectDb().then(() => {
  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
