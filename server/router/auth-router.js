const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");

//?This is also a way to set up a route and below is another way to set up route.
//  router.get("/",(req,res)=>{
//     res.status(200).send("Welcome Nikhil by router");
// })

router.route("/").get(authControllers.Home);

router.route("/register").post(authControllers.Register);

module.exports = router;
